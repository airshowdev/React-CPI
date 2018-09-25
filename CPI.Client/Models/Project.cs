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

        [BsonId]
        public ObjectId ID { get; set; }

        public string Creator { get; set; }

        public string MajCom { get; } = "AFGSC";

        public string Base { get; set; }

        public Template Template { get; set; }

        public string Champion { get; set; }

        public string Mentor { get; set; }

        public string TeamLead { get; set; }

        public IList<string> Evaluators { get; set; }

        public string Unit { get; set; }

        public long Date { get; set; }

        public IList<IPage> Pages { get; set; }
    }
}
