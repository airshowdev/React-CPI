using System;
using System.Collections.Generic;
using Newtonsoft;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CPI.Client.Models
{
    public class Project
    {

        public static Project FromJson(string Json)
        {
            Project project = new Project();
            return JsonConvert.DeserializeObject<Project>(Json);
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        [BsonId]
        public ObjectId ID { get; set; } = new ObjectId();

        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";
        [JsonProperty("MajCom")]
        public string MajCom { get; } = "AFGSC";
        [JsonProperty("Base")]
        public string Base { get; set; } = "";

        [JsonProperty("Template")]
        public string Template { get; set; } = "";

        [JsonProperty("Champion")]
        public string Champion { get; set; } = "";

        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = "";

        [JsonProperty("TeamLead")]
        public string TeamLead { get; set; } = "";

        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new string[] { ""};

        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";

        [JsonProperty("Date")]
        public long Date { get; set; } = 0;

        //public DataCollectionPage DataCollectionPage { get; set; }
    }
}
