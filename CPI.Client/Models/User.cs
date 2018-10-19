using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace CPI.Client.Models
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Username")]
        public string Username { get; set; } = "";

        [JsonProperty("PasswordHash")]
        public string PasswordHash { get; set; } = "";

        [JsonProperty("Permissions")]
        public IList<string> Permissions { get; set; } = new string[0];
        [JsonIgnore]
        [BsonIgnore]
        public string AuthToken { get { return authToken ?? GetAuthToken(); } }

        [JsonIgnore]
        [BsonIgnore]
        private string authToken { get; set; } = null;

        [JsonIgnore]
        [BsonIgnore]
        private string DecryptedToken => DecryptToken(AuthToken);

        [JsonIgnore]
        [BsonIgnore]
        public static User CurrentUser { get; set; }

        private string GetAuthToken()
        {

            if (authToken == "" || authToken == null)
            {
                byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
                byte[] key = Guid.NewGuid().ToByteArray();
                string token = Convert.ToBase64String(time.Concat(key).ToArray());
                authToken = EncryptToken(token);
            }

            return authToken;
        }

        [JsonIgnore]
        [BsonIgnore]
        private Aes aes = Aes.Create();

        private string EncryptToken(string token)
        {
            byte[] data = Convert.FromBase64String(token);

            byte[] output;

            using (Aes encryptAes = Aes.Create())
            {
                encryptAes.Key = aes.Key;
                encryptAes.IV = aes.IV;

                ICryptoTransform encryptor = aes.CreateEncryptor(encryptAes.Key, encryptAes.IV);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                    using (StreamWriter sw = new StreamWriter(cs))
                    {
                        sw.Write(token);

                        
                    }
                    output = ms.ToArray();
                }
            }
           return Convert.ToBase64String(output);
        }

        private string DecryptToken(string tokenToDecrypt)
        {

            byte[] data = Convert.FromBase64String(tokenToDecrypt);

            IList<byte> outputBytes = new List<byte>();

            using (Aes decryptAes = Aes.Create())
            {
                decryptAes.Key = aes.Key;
                decryptAes.IV = aes.IV;

                ICryptoTransform decryptor = decryptAes.CreateDecryptor(decryptAes.Key, decryptAes.IV);

                

                using (MemoryStream ms = new MemoryStream(Convert.FromBase64String(tokenToDecrypt)))
                using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))
                using (StreamReader sr = new StreamReader(cs))
                {
                    while (!sr.EndOfStream)
                    {
                        outputBytes.Add((byte)sr.Read());
                    }
                }
            }

            StringBuilder sb = new StringBuilder();
            foreach (byte b in outputBytes)
            {
                sb.Append((char)b);
            }
            return sb.ToString();
        }

    }
}
