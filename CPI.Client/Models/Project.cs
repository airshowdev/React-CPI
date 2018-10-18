using System.Collections.Generic;

using Newtonsoft.Json;

using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CPI.Client.Models
{
    public partial class Project
    { 
        public Stub ToStub()
        {
            return new Stub()
            {
                ID = id.ToString(),
                Name = Name,
                Creator = Creator,
                Unit = Unit
            };
        }

        [BsonIgnore]
        [JsonProperty("_id")]
        public string ID { get { return id.ToString(); } set { id = new ObjectId(value); } }

        [BsonId]
        [JsonIgnore]
        public ObjectId id { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("MajCom")]
        public string MajCom { get; set; } = "";

        [JsonProperty("Base")]
        public string Base { get; set; } = "";

        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";

        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";

        [JsonProperty("WingDirectorate")]
        public string WingDirectorate { get; set; } = "";

        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new List<string>();

        [JsonProperty("TeamLeads")]
        public IList<string> TeamLeads { get; set; } = new List<string>();

        [JsonProperty("Facilitators")]
        public IList<string> Facilitators { get; set; } = new List<string>();

        [JsonProperty("Facilitator")]
        public string Facilitator { get; set; } = "";

        [JsonProperty("ProcessOwner")]
        public string ProcessOwner { get; set; } = "";

        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = "";

        [JsonProperty("DataCollection")]
        public DataCollection DataCollection { get; set; } = new DataCollection();
        
        [JsonProperty("Champion")]
        public Champion Champion { get; set; } = new Champion();

        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; } = new TeamLeadMeeting();

        [JsonProperty("DraftCharter")]
        public DraftCharter DraftCharter { get; set; } = new DraftCharter();

        [JsonProperty("RootCauses")]

        public RootCause RootCauses { get; set; } = new RootCause();

        [JsonProperty("DesiredEffects")]
        public DesiredEffects DesiredEffects { get; set; } = new DesiredEffects();

        [JsonProperty("DateRange")]

        public DateRange Dates { get; set; } = new DateRange();
    }

    public partial class DesiredEffects
    {
        [JsonProperty("Productivity")]
        public string Productivity { get; set; } = "";

        [JsonProperty("EquipAvail")]
        public string EquipAvail { get; set; } = "";

        [JsonProperty("Agility")]
        public string Agility { get; set; } = "";

        [JsonProperty("SafeOps")]
        public string SafeOps { get; set; } = "";

        [JsonProperty("Efficiency")]
        public string Efficiency { get; set; } = "";
    }

    public partial class Champion
    {
        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Deficiency")]
        public string Deficiency { get; set; } = "";

        [JsonProperty("Expectation")]
        public string Expectation { get; set; } = "";

        [JsonProperty("Recommendation")]
        public string Recommendation { get; set; } = "";

        [JsonProperty("Goal")]
        public int Goal { get; set; } = 0;

        [JsonProperty("Response")]
        public Response Response { get; set; } = new Response();
    }

    public partial class Response
    {
        [JsonProperty("Concur")]
        public string Concur { get; set; } = "";
    }

    public partial class Sig
    {
    }

    public partial class DraftCharter
    {
        [JsonProperty("TeamLeadSig")]
        public Sig TeamLeadSig { get; set; } = new Sig();

        [JsonProperty("ChampSig")]
        public Sig ChampSig { get; set; } = new Sig();
    }

    

    public partial class TeamLeadMeeting
    {
        [JsonProperty("MembersIdentified")]
        public IList<string> MembersIdentified { get; set; } = new List<string>();

        [JsonProperty("SIPOC")]
        public Sipoc Sipoc { get; set; } = new Sipoc();

        [JsonProperty("DateRange")]
        public DateRange DateRange { get; set; } = new DateRange();
    }

    public partial class DateRange
    {
        [JsonProperty("begin")]
        public string Begin { get; set; } = "";

        [JsonProperty("end")]
        public string End { get; set; } = "";
    }

    public partial class Sipoc
    {
        [JsonProperty("Suppliers")]
        public IList<string> Suppliers { get; set; } = new List<string>();

        [JsonProperty("Inputs")]
        public IList<string> Inputs { get; set; } = new List<string>();

        [JsonProperty("Process")]
        public IList<string> Process { get; set; } = new List<string>();

        [JsonProperty("Outputs")]
        public IList<string> Outputs { get; set; } = new List<string>();

        [JsonProperty("Customers")]
        public IList<string> Customers { get; set; } = new List<string>();
    }

    public partial class Project
    {
        public static Project FromJson(string json) => JsonConvert.DeserializeObject<Project>(json, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this Project self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }
public partial class Champion
    {
        public static Champion FromJson(string json) => JsonConvert.DeserializeObject<Champion>(json, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this Champion self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }
    public partial class TeamLeadMeeting
    {
        public static TeamLeadMeeting FromJson(string json) => JsonConvert.DeserializeObject<TeamLeadMeeting>(json, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this TeamLeadMeeting self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }public partial class RootCause
    {
        public static RootCause FromJson(string json) => JsonConvert.DeserializeObject<RootCause>(json, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this RootCause self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this DesiredEffects self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }
    public partial class DesiredEffects
    {
        public static DesiredEffects FromJson(string json) => JsonConvert.DeserializeObject<DesiredEffects>(json, Converter.Settings);
    }

    public static partial class Serialize
    {
        public static string ToJson(this DraftCharter self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }
    public partial class DraftCharter
    {
        public static DraftCharter FromJson(string json) => JsonConvert.DeserializeObject<DraftCharter>(json, Converter.Settings);
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
