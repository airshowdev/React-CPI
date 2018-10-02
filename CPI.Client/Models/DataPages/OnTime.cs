using System;
using System.Collections.Generic;

using CPI.Client.Models;
using Newtonsoft.Json;

namespace CPI.Client.Models.DataPages
{
    public class OnTime : ITemplate<OnTimeElement>
    {
        [JsonProperty("Elements")]
        public Dictionary<string,OnTimeElement> Elements { get; set; }

        public float CalculateAverage()
        {
            throw new NotImplementedException();
        }

        public int CalculatePercentage()
        {
            int good = 0;
            foreach (string key in Elements.Keys)
            {
                good += (Elements[key].GoalMet) ? 1 : 0;
            }

            float percentage = (good / Elements.Count) * 100;

            return Convert.ToInt32(Math.Round(percentage));
        }

    }
}
