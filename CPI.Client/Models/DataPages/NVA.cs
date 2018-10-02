using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CPI.Client.Models;
using Newtonsoft.Json;

namespace CPI.Client.Models.DataPages
{
    public class NVA : ITemplate<NVAElement>
    {
        [JsonProperty("Elements")]
        public Dictionary<string, NVAElement> Elements { get; set; }

        [JsonProperty("Nva")]
        public bool Nva = true;

        public float CalculateAverage()
        {
            float total = 0;

            foreach (string key in Elements.Keys)
            {
                total += Elements[key].Percentage;
            }

            return (float)Math.Round(total / Elements.Count);
        }

        public int CalculatePercentage()
        {
            float nva = 0, total = 0;

            foreach (string key in Elements.Keys)
            {
                nva += Nva ? Elements[key].NVA : Elements[key].VA;
                total += Elements[key].NVA + Elements[key].VA;
            }

            float percentage = (nva / total) * 100;

            return Convert.ToInt32(Math.Round(percentage));

        }
    }
}
