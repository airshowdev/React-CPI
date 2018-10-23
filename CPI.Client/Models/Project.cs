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

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("MajCom")]
        public string MajCom { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Base")]
        public string Base { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";
  
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("WingDirectorate")]
        public string WingDirectorate { get; set; } = "";

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("TeamLeads")]
        public IList<string> TeamLeads { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitators")]
        public IList<string> Facilitators { get; set; } = new string[0];
  
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitator")]
        public string Facilitator { get; set; } = "";

      
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("ProcessOwner")]
        public string ProcessOwner { get; set; } = "";


        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]

        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = "";

        [BsonIgnoreIfNull]
        [JsonProperty("DataCollection")]
        public DataCollection DataCollection { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("Champion")]
        public Champion Champion { get; set; } = null;


        [BsonIgnoreIfNull]
        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("DraftCharter")]
        public DraftCharter DraftCharter { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("RootCauses")]

        public RootCause RootCauses { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("DesiredEffects")]
        public DesiredEffects DesiredEffects { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("DateRange")]

        public DateRange Dates { get; set; } = null;
    }

    public partial class DesiredEffects
    {
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Productivity")]
        public string Productivity { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("EquipAvail")]
        public string EquipAvail { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Agility")]
        public string Agility { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("SafeOps")]
        public string SafeOps { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Efficiency")]
        public string Efficiency { get; set; } = "";
    }

    public partial class Champion
    {
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Deficiency")]
        public string Deficiency { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Expectation")]
        public string Expectation { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Recommendation")]
        public string Recommendation { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Goal")]
        public string Goal { get; set; } = "";

        [BsonDefaultValue(null)]
        [BsonIgnoreIfDefault]
        [JsonProperty("Response")]
        public Response Response { get; set; } = null;
    }

    public partial class Response
    {
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("Concur")]
        public string Concur { get; set; } = "";
    }

    public partial class Sig
    {
    }

    public partial class DraftCharter
    {
        [BsonDefaultValue(null)]
        [BsonIgnoreIfDefault]
        [JsonProperty("TeamLeadSig")]
        public Sig TeamLeadSig { get; set; } = null;

        [BsonDefaultValue(null)]
        [BsonIgnoreIfDefault]
        [JsonProperty("ChampSig")]
        public Sig ChampSig { get; set; } = null;
    }

    

    public partial class TeamLeadMeeting
    {
        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("MembersIdentified")]
        public IList<string> MembersIdentified { get; set; } = new string[0];

        [BsonDefaultValue(null)]
        [BsonIgnoreIfDefault]
        [JsonProperty("SipocRows")]
        public Sipoc Sipoc { get; set; } = null;

        [BsonDefaultValue(null)]
        [BsonIgnoreIfDefault]
        [JsonProperty("DateRange")]
        public DateRange DateRange { get; set; } = null;
    }

    public partial class DateRange
    {
        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("begin")]
        public string Begin { get; set; } = "";

        [BsonDefaultValue("")]
        [BsonIgnoreIfDefault]
        [JsonProperty("end")]
        public string End { get; set; } = "";
    }

    public partial class Sipoc
    {
        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Suppliers")]
        public IList<string> Suppliers { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Inputs")]
        public IList<string> Inputs { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Process")]
        public IList<string> Process { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Outputs")]
        public IList<string> Outputs { get; set; } = new string[0];

        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Customers")]
        public IList<string> Customers { get; set; } = new string[0];
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
        [BsonIgnoreIfNull]
        [JsonProperty("FishboneBranch")]
        IList<FishboneBranch> FishboneBranches { get; set; } = null;

        [BsonIgnoreIfNull]
        [JsonProperty("RootCausesAndCounters")]
        IDictionary<string, string> CausesAndCounters { get; set; } = null;
        
    }
    public partial class FishboneBranch
    {
        [BsonDefaultValue(new string[0])]
        [BsonIgnoreIfDefault]
        [JsonProperty("Nodes")]
        IList<string> Nodes { get; set; } = new string[0];
    }
}
