using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using MongoDB.Driver;
using MongoDB.Bson;

using Microsoft.AspNetCore.Mvc;

using CPI.Client.Models;


namespace CPI.Client.Controllers
{


    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        [HttpGet("[action]")]
        public async Task<string> Test(string function = "getAll", string ID = "", string json = "")
        {

            string Host = "https://" + HttpContext.Request.Host;

            ServicePointManager.ServerCertificateValidationCallback += (send, certificate, chain, sslPolicyErrors) => { return true; };

            HttpClient client = new HttpClient();

            HttpResponseMessage response = null;

            if (function.ToUpper() == "create".ToUpper())
            {
                HttpContent content = new StringContent(new Project().ToJson());
                response = await client.PostAsync(Host + "/api/Project/CreateProject", content);
            }
            else if (function.ToUpper() == "getAll".ToUpper())
            {
                response = await client.GetAsync(Host + "/api/Project/AllProjectsAsync");
            }
            else if (function.ToUpper() == "getId".ToUpper())
            {
                string idJson = new { id = ID }.ToJson();
                HttpContent content = new StringContent(idJson);
                response = await client.PostAsync(Host + "/api/Project/GetProjectAsync", content);
            }
            else if (function.ToUpper() == "update".ToUpper())
            {
                HttpContent content = new StringContent(json);
                response = await client.PatchAsync(Host + "/api/Project/UpdateProject", content);
            }

            return (response == null) ? null : await response.Content.ReadAsStringAsync();

        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<Stub>> AllProjectsAsync()
        {

            Log4NetLogger.Info("Get all projects process started");



            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IList<Project> returnProjects = await (await projects.FindAsync(_ => true)).ToListAsync();

                IList<Stub> stubs = new List<Stub>();

                foreach (Project proj in returnProjects)
                {
                    stubs.Add(proj.ToStub());
                }


                Log4NetLogger.Info("Get all projects process completed succesfully");
                return stubs;
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }
        }


        [HttpGet("[action]")]
        public async Task<Project> GetProjectAsync(string id)
        {

            Log4NetLogger.Info($"Get project process started with parameter id = {id??"null"}");
            try
            {

                if (id == null)
                {
                    throw new ArgumentNullException("ID", "String id cannot be null");
                }
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                IAsyncCursor<Project> cursor = await projects.FindAsync<Project>(filter);

                Log4NetLogger.Info("Get project process completed succesfully");

                return await cursor.FirstAsync();
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<string> CreateProject()
        {
            Log4NetLogger.Info("Create project process started");
            try
            {
                string json = "";

                using (Stream stream = Request.Body)
                using (StreamReader sr = new StreamReader(stream))
                {
                    json = sr.ReadToEnd();
                }

                JObject project = (JObject)JsonConvert.DeserializeObject(json);

                string name = project.GetValue("Creator").ToString();
                string assignedBase = project.GetValue("Base").ToString();
                string unit = project.GetValue("Unit").ToString();
                string projectName = project.GetValue("Name").ToString();

                if (name == "" || name == null)
                {
                    return "Name cannot be null or empty";
                }
                else if (assignedBase == "" || assignedBase == null)
                {
                    return "Base cannot be null or empty";
                }
                else if (unit == "" || unit == null)
                {
                    return "Unit cannot be null or empty";
                }
                else if (projectName == "" || projectName == null)
                {
                    return "Project Name cannot be null or empty";
                }
                else
                {

                    Project newProject = Project.FromJson(json);

                    MongoConnection connection = new MongoConnection(GetConnectionString());
                    connection.ConnectDatabase("CPI_Database");
                    IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                    await projects.InsertOneAsync(newProject);

                    Log4NetLogger.Info("Create project process completed succesfully");

                    return newProject.Id.ToString();
                }
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }

        [HttpPost("[action]")]
        public async Task<long> UpdateProject()
        {

            Log4NetLogger.Info("Update project process started");

            try
            {
                string json = "";

                using (Stream stream = Request.Body)
                using (StreamReader sr = new StreamReader(stream))
                {
                    json = sr.ReadToEnd();
                }

                JObject project = (JObject)JsonConvert.DeserializeObject(json);

                ObjectId ID = new ObjectId(project.GetValue("_id").ToString());

                Project updateProject = Project.FromJson(json);
                updateProject.Id = ID;
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                ReplaceOneResult result = await projects.ReplaceOneAsync(x => x.Id == updateProject.Id, updateProject);

                Log4NetLogger.Info("Update project process completed succesfully");

                return result.ModifiedCount;
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }
        }

        private async Task<object> GetPage(string id, string page)
        {


            Log4NetLogger.Info($"Get page process started with parameters id = {id??"null"}, page = {page??"null"}");

            object returnObj = null;
            try
            {
                if (page == null)
                {
                    Log4NetLogger.Warn("Parameter (string) Page is null. ArumentNullException Possible");
                }

                if (id == null)
                {
                    return null;
                }
                Project project = await GetProjectAsync(id);


                switch (page.ToUpper())
                {
                    case "DATACOLLECTION":
                        returnObj =  project.DataCollection;
                        break;
                    case "CHAMPMEET":
                        returnObj =  project.Champion;
                        break;
                    case "TEAMLEADMEET":
                        returnObj = project.TeamLeadMeeting;
                        break;
                    case "DRAFTCHARTER":
                        returnObj = new
                        {
                            project.Dates,
                            project.Name,
                            project.Unit,
                            project.Base,
                            project.Creator,
                            project.Champion,
                            project.TeamLeads,
                            project.Facilitators,
                            project.Mentor,
                            project.TeamLeadMeeting,
                            project.DesiredEffects,
                            project.DraftCharter
                        };
                        break;
                    case "CAUSEANDCOUNTERS":
                        returnObj = project.RootCauses;
                        break;
                    default:
                        returnObj = null;
                        break;
                }
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }

            Log4NetLogger.Info("Get page process completed succesfully");

            return returnObj;
        }

        [HttpGet("[action]")]
        public async Task<object> DraftCharter(string id)
        {
            return await GetPage(id, "DraftCharter");
        }
        [HttpGet("[action]")]
        public async Task<object> DataCollection(string id)
        {
            return await GetPage(id, "DataCollection");
        }
        [HttpGet("[action]")]
        public async Task<object> ChampMeet(string id)
        {
            return await GetPage(id, "ChampMeet");
        }
        [HttpGet("[action]")]
        public async Task<object> TeamLeadMeet(string id)
        {
            return await GetPage(id, "TeamLeadMeet");
        }
        [HttpGet("[action]")]
        public async Task<object> CauseAndCounters(string id)
        {
            return await GetPage(id, "CauseAndCounters");
        }

        [HttpPost("[action]")]
        public async Task<bool> Authenticate()
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

                string hash = HashWithSalt(pass, username);

                bool authenticated = hash == authUser.PasswordHash;

                Models.User.CurrentUser = (authenticated) ? authUser : null;

                Log4NetLogger.Info($"Authentication attempt by {username} was {(authenticated ? "successful":"unsuccessful")}.");

                Log4NetLogger.Info("Authentication process completed succesfully");

                return authenticated;
            }
            catch (OutOfMemoryException memEx)
            {
                Log4NetLogger.Error(memEx);
                return false;
            }
            catch (IOException ioEx)
            {
                Log4NetLogger.Error(ioEx);
                return false;
            }
            catch (Exception E)
            {
                Log4NetLogger.Fatal(E);
                throw;
            }
        }

        private async Task<User> GetUserDetails(string username)
        {
            Log4NetLogger.Info($"Get user details process started with parameters username = {username}");
            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
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
        private string GetConnectionString()
        {

            Log4NetLogger.Info("Get connection string process started");
            using (Stream stream = new FileStream(".\\connectionString.txt", FileMode.Open))
            using (TextReader tr = new StreamReader(stream))
            {

                Log4NetLogger.Info("Get connection string process completed succesfully");
                return tr.ReadLine();
            }

        }

        private string HashWithSalt(string pass, string username)
        {
            Log4NetLogger.Info("Create hash using salt process started");
            try
            {
                HashAlgorithm algo = new SHA512Managed();

                byte[] bytes = Encoding.ASCII.GetBytes(pass + username);


                Log4NetLogger.Info("Create hash using salt process completed succesfully");
                return Convert.ToBase64String(algo.ComputeHash(bytes));
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


    }
}