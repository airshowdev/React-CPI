using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using CPI.Client.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http;

namespace CPI.Client.Controllers
{
    public class AuthenticationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("[action]")]
        public async Task<HttpResponse> Authenticate()
        {

            Log4NetLogger.Info("Authentication process started");

            try
            {
                JObject authToken;

                string tokenJson = "";

                using (Stream body = Request.Body)
                using (StreamReader reader = new StreamReader(body))
                {
                    tokenJson = reader.ReadToEnd();
                }

                authToken = (JObject)JsonConvert.DeserializeObject(tokenJson);


                string username = authToken.GetValue("username").ToString();
                string pass = authToken.GetValue("password").ToString();

                User authUser = await GetUserDetails(username);

                string hash = GenerateHash(pass);

                bool authenticated = VerifiyHash(pass, authUser.PasswordHash);

                Models.User.CurrentUser = (authenticated) ? authUser : null;

                Log4NetLogger.Info($"Authentication attempt by {username} was {(authenticated ? "successful" : "unsuccessful")}.");

                Log4NetLogger.Info("Authentication process completed succesfully");

                //Response.Body = authenticated.ToStream();

                
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                //Response.Body = E.ToStream();
            }
            return Response;
        }

        

        private async Task<User> GetUserDetails(string username)
        {
            Log4NetLogger.Info($"Get user details process started with parameters username = {username}");
            try
            {
                MongoConnection connection = new MongoConnection(await ProjectController.GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<User> users = connection.GetCollection<User>("User");

                FilterDefinition<User> filter = Builders<User>.Filter.Eq("Username", username);

                IAsyncCursor<User> cursor = await users.FindAsync<User>(filter);

                Log4NetLogger.Info("Get user details process completed succesfully");

                return await cursor.FirstAsync();
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return null;
            }
        }

        private string GenerateHash(string pass)
        {
            Log4NetLogger.Info("Generate hash process started");
            try
            {
                RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
                HashAlgorithm algo = new SHA512Managed();

                byte[] bytes = Encoding.ASCII.GetBytes(pass);

                byte[] salt = new byte[8];

                rng.GetBytes(salt);

                bytes = algo.ComputeHash(bytes);

                byte[] hashWithSalt = new byte[bytes.Length + salt.Length];

                Array.Copy(bytes, hashWithSalt, bytes.Length);

                for (int i = 0; i < salt.Length; i++)
                {
                    hashWithSalt[bytes.Length + i] = salt[i];
                }

                Log4NetLogger.Info("Generate hash process completed succesfully");
                return Convert.ToBase64String(hashWithSalt);
            }
            catch (ArgumentNullException nullEx)
            {
                Log4NetLogger.Error(nullEx);
                return "";
            }
            catch (EncoderFallbackException encodingEx)
            {
                Log4NetLogger.Error(encodingEx);
                return "";
            }
        }

        private bool VerifiyHash(string pass, string hash)
        {

            byte[] hashBytes = Convert.FromBase64String(hash);

            byte[] salt = new byte[8];

            for (int i = 8; i > 0; i--)
            {
                salt[i - 1] = hashBytes[hashBytes.Length - i];
            }

            Array.Reverse(salt);

            HashAlgorithm algo = new SHA512Managed();

            byte[] passBytes = Encoding.ASCII.GetBytes(pass);

            byte[] passHash = algo.ComputeHash(passBytes);

            byte[] passWithSalt = new byte[passHash.Length + salt.Length];

            Array.Copy(passHash, passWithSalt, passHash.Length);

            for (int i = 0; i < salt.Length; i++)
            {
                passWithSalt[passHash.Length + i] = salt[i];
            }

            string verifyingPass = Convert.ToBase64String(passWithSalt);

            if (verifyingPass == hash)
            {
                return true;
            }
            return false;
        }
    }
}