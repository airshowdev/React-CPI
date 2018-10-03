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

        [JsonProperty("Password")]
        public string Password { get; set; } = "";

    }
}
