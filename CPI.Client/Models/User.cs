using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CpiApi.Models
{
    public class User
    {
        [JsonProperty("_id")]
        [BsonId]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
