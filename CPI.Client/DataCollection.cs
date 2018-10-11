using System.Collections.Generic;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using Newtonsoft.Json;


namespace CPI.Client
{
    public partial class DataCollection
    {
        [JsonProperty("_id")]
        [BsonIgnore]
        public string Id { get { return id.ToString(); } set { id = new ObjectId(value); } }
        [BsonId]
        [JsonIgnore]
        private ObjectId id { get; set; } = new ObjectId();

        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Elements")]
        public IList<Element> Elements = new List<Element>();

        [JsonProperty("Type")]
        public string Type { get; set; } = "";

        [JsonIgnore]
        [BsonIgnore]
        public bool GoalMet => CheckGoalMet();

        [JsonIgnore]
        [BsonIgnore]
        public decimal PercentageAverage => GetPercentAverage();

        private bool CheckGoalMet()
        {
            bool goalMet = true;
            foreach (Element element in Elements)
            {
                goalMet &= element.GoalMet;
            }
            return goalMet;
        }

        private decimal GetPercentAverage()
        {
            decimal total = 0m;
            foreach (Element element in Elements)
            {
                switch (Type)
                {
                    case "CPT":
                        total += element.CPTVariance;
                        break;
                    case "OnTime":
                        total += element.OnTimeVariance;
                        break;
                    case "TotalCost":
                        total += element.TotalCostVariance;
                        break;
                    case "Savings":
                        total += element.SavingVariance;
                        break;
                    case "NVA":
                        total += element.NVAPercentage;
                        break;
                    case "VA":
                        total += element.VAPercentage;
                        break;
                    default:
                        return -1;

                }
            }
            return total / Elements.Count;
        }

        
    }

    public partial class DataCollection
    {
        public static DataCollection FromJson(string json) => JsonConvert.DeserializeObject<DataCollection>(json, Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this DataCollection self) => JsonConvert.SerializeObject(self, Converter.Settings);
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
}
