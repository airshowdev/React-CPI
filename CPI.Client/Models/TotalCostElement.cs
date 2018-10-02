using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class TotalCostElement : IElement
    {
        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("MaterialCost")]
        public float MaterialCost { get; set; }

        [JsonProperty("TotalCost")]
        public float TotalCost => MaterialCost + LaborCost + OtherCost;

        [JsonProperty("LaborCost")]
        public float LaborCost { get; set; }

        [JsonProperty("OtherCost")]
        public float OtherCost { get; set; }
    }
}
