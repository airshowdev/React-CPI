using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class CostAvoidanceElement : IElement
    {
        [JsonProperty("Goal")]
        public object Goal { get => goal; set { goal = (float) value; } }

        [JsonProperty("goal")]
        private float goal { get; set; }

        [JsonProperty("Actual")]
        public object Actual { get => Total; set { Total = (float) value; } }

        [JsonProperty("Total")]
        private float Total { get; set; }

        [JsonProperty("Name")]
        public string Name { get; set; }       
    }
}
