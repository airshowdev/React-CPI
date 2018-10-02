using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class NVAElement : IElement
    {
       [JsonProperty("NVA")]
        public float NVA { get; set; }

        [JsonProperty("VA")]
        public float VA { get; set; }


        [JsonProperty("Goal")]
        public float Goal { get; set; }


        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("Perecentage")]
        public float Percentage { get; set; }
    }
}
