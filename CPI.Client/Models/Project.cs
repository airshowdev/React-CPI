using System.Collections.Generic;
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

        public Stub ToStub()
        {
            return new Stub()
            {
                ID = ID.ToString(),
                Name = Name,
                Creator = Creator,
                Unit = Unit
            };
        }

        [BsonId]
        public ObjectId ID { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";
        [JsonProperty("MajCom")]
        public string MajCom { get; } = "AFGSC";
        [JsonProperty("Base")]
        public string Base { get; set; } = "";

        [JsonProperty("Template")]
        public ITemplate<IElement> DataCollection { get; set; } = null;

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
    }
}
