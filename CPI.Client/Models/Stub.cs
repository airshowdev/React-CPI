using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CPI.Client.Models
{
    public class Stub
    {

        [JsonProperty("ID")]
        public string ID { get; set; } = "";

        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";

        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";

        [JsonProperty("Name")]
        public string Name { get; set; } = "";
    }
}
