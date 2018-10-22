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

        
        [BsonIgnoreIfDefault]
        [JsonProperty("MajCom")]
        public string MajCom { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Base")]
        public string Base { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";
  
        
        [BsonIgnoreIfDefault]
        [JsonProperty("WingDirectorate")]
        public string WingDirectorate { get; set; } = "";

		
		[BsonIgnoreIfDefault]
		[JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new string[0];

        
        [BsonIgnoreIfDefault]
        [JsonProperty("TeamLeads")]
        public IList<string> TeamLeads { get; set; } = new string[0];


        [JsonProperty("ProblemStatement")]
        public string ProblemStatement { get; set; } = "";

        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitators")]
        public IList<string> Facilitators { get; set; } = new string[0];
  
        
        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitator")]
        public string Facilitator { get; set; } = "";
 
        
        [BsonIgnoreIfDefault]
        [JsonProperty("ProcessOwner")]
        public string ProcessOwner { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = "";

        [BsonIgnoreIfNull]
        [JsonProperty("DataCollection")]
        public DataCollection DataCollection { get; set; } = new DataCollection();

        [BsonIgnoreIfNull]
        [JsonProperty("Champion")]
        public Champion Champion { get; set; } = new Champion();

        [BsonIgnoreIfNull]
        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; } = new TeamLeadMeeting();

        [BsonIgnoreIfNull]
        [JsonProperty("DraftCharter")]
        public DraftCharter DraftCharter { get; set; } = new DraftCharter();

        [BsonIgnoreIfNull]
        [JsonProperty("RootCauses")]
        public RootCause RootCauses { get; set; } = new RootCause();

        [BsonIgnoreIfNull]
        [JsonProperty("DesiredEffects")]
        public DesiredEffects DesiredEffects { get; set; } = new DesiredEffects();

        [BsonIgnoreIfNull]
        [JsonProperty("DateRange")]

        public DateRange Dates { get; set; } = new DateRange();
    }

    public partial class DesiredEffects
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("Productivity")]
        public string Productivity { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("EquipAvail")]
        public string EquipAvail { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Agility")]
        public string Agility { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("SafeOps")]
        public string SafeOps { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Efficiency")]
        public string Efficiency { get; set; } = "";
    }

    public partial class Champion
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Deficiency")]
        public string Deficiency { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Expectation")]
        public string Expectation { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Recommendation")]
        public string Recommendation { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Goal")]
        public int Goal { get; set; } = 0;

        
        [BsonIgnoreIfDefault]
        [JsonProperty("Response")]
        public Response Response { get; set; } = new Response();
    }

    public partial class Response
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("Concur")]
        public string Concur { get; set; } = "";
    }

    public partial class Sig
    {
    }

    public partial class DraftCharter
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("TeamLeadSig")]
        public Sig TeamLeadSig { get; set; } = new Sig();

        
        [BsonIgnoreIfDefault]
        [JsonProperty("ChampSig")]
        public Sig ChampSig { get; set; } = new Sig();
    }



    public partial class TeamLeadMeeting
    {
        [BsonIgnoreIfDefault]
        [JsonProperty("MembersIdentified")]
        public IList<string> MembersIdentified { get; set; } = new string[0];


        [BsonIgnoreIfDefault]
        [JsonProperty("DateRange")]
        public DateRange DateRange { get; set; } = new DateRange();

        //[JsonProperty("SIPOC")]
        //public SIPOC SIPOC { get; set; } = new SIPOC();

        [JsonProperty("SipocRows")]
        public IList<SipocRow> SipocRows { get; set; } = new List<SipocRow>();
    }

    //public partial class SIPOC
    //{

    //    [JsonProperty("SipocRow1")]
    //    public SipocRow SipocRow1 { get; set; } = 

    //}

    public partial class DateRange
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("begin")]
        public string Begin { get; set; } = "";

        
        [BsonIgnoreIfDefault]
        [JsonProperty("end")]
        public string End { get; set; } = "";
    }
	
	public partial class SipocRow
	{
		[JsonProperty("Supplier")]
		public string Supplier { get; set; } = "";

		[JsonProperty("Input")]
		public string Input { get; set; } = "";

		[JsonProperty("Process")]
		public string Process { get; set; } = "";

		[JsonProperty("Output")]
		public string Output { get; set; } = "";

		[JsonProperty("Customer")]
		public string Customer { get; set; } = "";
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
    }

    public partial class RootCause
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
        IList<FishboneBranch> FishboneBranches { get; set; } = new List<FishboneBranch>();

        [BsonIgnoreIfNull]
        [JsonProperty("RootCausesAndCounters")]
        IDictionary<string, string> CausesAndCounters { get; set; } = new Dictionary<string, string>();
        
    }

    public partial class FishboneBranch
    {
        
        [BsonIgnoreIfDefault]
        [JsonProperty("Nodes")]
        IList<string> Nodes { get; set; } = new string[0];
    }
}
