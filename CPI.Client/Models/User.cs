using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public IList<string> Permissions { get; set; } = new List<string>();

        public static User CurrentUser { get; set; }

    }
}
