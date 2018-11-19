using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace CpiApi.Models
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
        private ObjectId id { get; set; } = new ObjectId();

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

        [BsonDefaultValue(new string[0])]

        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = new string[0];

        [JsonProperty("TeamLeads")]
        public IList<string> TeamLeads { get; set; } = new string[0];

        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitators")]
        public IList<string> Facilitators { get; set; } = new string[0];

        [JsonProperty("Facilitator")]
        public string Facilitator { get; set; } = "";

        [JsonProperty("IdentifyPerformanceGap")]
        public string IdentifyPerformanceGap { get; set; } = "";

        [JsonProperty("ImprovementTarget")]
        public string ImprovementTarget { get; set; } = "";

        [JsonProperty("ProcessOwner")]
        public string ProcessOwner { get; set; } = "";

        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = "";

        [JsonProperty("Elements")]
        public Dictionary<string, decimal> Elements { get; set; } = new Dictionary<string, decimal>();

        [JsonProperty("Champion")]
        public Champion Champion { get; set; } = new Champion();

        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; } = new TeamLeadMeeting();

        [JsonProperty("RootCauses")]
        public IList<RootCause> RootCauses { get; set; } = new List<RootCause>();

        [JsonProperty("DesiredEffects")]
        public DesiredEffects DesiredEffects { get; set; } = new DesiredEffects();

        [JsonProperty("DateRange")]
        public DateRange Dates { get; set; } = new DateRange();

        [JsonProperty("ProblemStatement")]
        public string ProblemStatement { get; set; } = "";
    }


    public static partial class Converter
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
}