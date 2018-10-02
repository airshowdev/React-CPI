using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class CPTElement : IElement
    {
        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("TotalCost")]
        public float TotalCost { get; set; }

        [JsonProperty("TransactionTime")]
        public int TransactionNum { get; set; }
    }
}
