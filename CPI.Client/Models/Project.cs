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
        public ObjectId id { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; } = null;

        [JsonProperty("MajCom")]
        public string MajCom { get; set; } = null;

        [JsonProperty("Base")]
        public string Base { get; set; } = null;

        [JsonProperty("Creator")]
        public string Creator { get; set; } = null;

        [JsonProperty("Unit")]
        public string Unit { get; set; } = null;

        [JsonProperty("WingDirectorate")]
        public string WingDirectorate { get; set; } = null;

        [JsonProperty("Standard")]
        public string Standard { get; set; } = null;

        [BsonDefaultValue(new string[0])]

        [JsonProperty("Evaluators")]
        public IList<string> Evaluators { get; set; } = null;

        [JsonProperty("TeamLeads")]
        public IList<string> TeamLeads { get; set; } = null;

        [BsonIgnoreIfDefault]
        [JsonProperty("Facilitators")]
        public IList<string> Facilitators { get; set; } = null;

        [JsonProperty("Facilitator")]
        public string Facilitator { get; set; } = null;

        [JsonProperty("IdentifyPerformanceGap")]
        public string IdentifyPerformanceGap { get; set; } = null;

        [JsonProperty("ImprovementTarget")]
        public string ImprovementTarget { get; set; } = null;

        [JsonProperty("ProcessOwner")]
        public string ProcessOwner { get; set; } = null;

        [JsonProperty("Mentor")]
        public string Mentor { get; set; } = null;

        [JsonProperty("Elements")]
        public IList<Element> Elements { get; set; } = null;

        [JsonProperty("Champion")]
        public Champion Champion { get; set; } = null;

        [JsonProperty("TeamLeadMeeting")]
        public TeamLeadMeeting TeamLeadMeeting { get; set; } =null;

        [JsonProperty("RootCauses")]
        public IList<RootCause> RootCauses { get; set; } =null;

        [JsonProperty("DesiredEffects")]
        public DesiredEffects DesiredEffects { get; set; } = null;

        [JsonProperty("DateRange")]
        public DateRange Dates { get; set; } = new DateRange();

        [JsonProperty("ProblemStatement")]
        public string ProblemStatement { get; set; } = null;
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