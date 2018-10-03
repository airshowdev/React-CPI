using System.Collections.Generic;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using Newtonsoft.Json;


namespace CPI.Client
{
    public class DataCollection
    {
        [BsonId]
        public ObjectId Id { get; set; } = new ObjectId();

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
}
