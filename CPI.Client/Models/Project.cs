using System.Collections.Generic;
using Newtonsoft.Json;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CPI.Client.Models
{
    public partial class Project
    {
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        public Stub ToStub()
        {
            return new Stub()
            {
                ID = Id.ToString(),
                Name = Name,
                Creator = Creator,
                Unit = Unit
            };
        }
        [BsonId]
        public ObjectId Id { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("MajCom")]
        public string MajCom { get; set; }

        [JsonProperty("Base")]
        public string Base { get; set; }

        [JsonProperty("Creator")]
        public string Creator { get; set; }

        [JsonProperty("Unit")]
        public string Unit { get; set; }

        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new List<string>();

        [JsonProperty("TeamLead")]
        public string TeamLead { get; set; }

        [JsonProperty("Mentor")]
        public string Mentor { get; set; }

        [JsonProperty("DataCollection")]
        public ITemplate<IElement> DataCollection { get; set; }

        [JsonProperty("Champion")]
        public Champion Champion { get; set; }

        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; }

        [JsonProperty("DraftCharter")]
        public DraftCharter DraftCharter { get; set; }
    }

    public partial class Champion
    {
        [JsonProperty("Deficiency")]
        public string Deficiency { get; set; }

        [JsonProperty("Expectation")]
        public string Expectation { get; set; }

        [JsonProperty("Recommendation")]
        public string Recommendation { get; set; }

        [JsonProperty("Goal")]
        public long Goal { get; set; }

        [JsonProperty("Response")]
        public Response Response { get; set; }
    }

    public partial class Response
    {
        [JsonProperty("Concur")]
        public string Concur { get; set; }
    }

    public partial class ChampSig
    {
    }

    public partial class DraftCharter
    {
        [JsonProperty("TeamLeadSig")]
        public ChampSig TeamLeadSig { get; set; }

        [JsonProperty("ChampSig")]
        public ChampSig ChampSig { get; set; }
    }

    public partial class TeamLeadMeeting
    {
        [JsonProperty("MembersIdentified")]
        public string[] MembersIdentified { get; set; }

        [JsonProperty("SIPOC")]
        public Sipoc Sipoc { get; set; }

        [JsonProperty("DateRange")]
        public DateRange DateRange { get; set; }
    }

    public partial class DateRange
    {
        [JsonProperty("begin")]
        public string Begin { get; set; }

        [JsonProperty("end")]
        public string End { get; set; }
    }

    public partial class Sipoc
    {
        [JsonProperty("Suppliers")]
        public string[] Suppliers { get; set; }

        [JsonProperty("Inputs")]
        public string[] Inputs { get; set; }

        [JsonProperty("Process")]
        public string[] Process { get; set; }

        [JsonProperty("Outputs")]
        public string[] Outputs { get; set; }

        [JsonProperty("Customers")]
        public string[] Customers { get; set; }
    }

    public partial class Project
    {
        public static Project FromJson(string json) => JsonConvert.DeserializeObject<Project>(json, Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this Project self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new Newtonsoft.Json.Converters.IsoDateTimeConverter { DateTimeStyles = System.Globalization.DateTimeStyles.AssumeUniversal }
            },
        };
    }
    public partial class RootCause
    {
        [JsonProperty("FishboneBranch")]
        IList<FishboneBranch> FishboneBranches { get; set; } = new List<FishboneBranch>();

        [JsonProperty("RootCausesAndCounters")]
        IDictionary<string, string> CausesAndCounters { get; set; } = new Dictionary<string, string>();
        
    }
    public partial class FishboneBranch
    {
        [JsonProperty("Nodes")]
        IList<string> Nodes { get; set; } = new List<string>();
    }
}
