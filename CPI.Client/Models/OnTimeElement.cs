using Newtonsoft.Json;
using System;

namespace CPI.Client.Models
{
    public class OnTimeElement : IElement
    {
        [JsonProperty("Actual")]
        public DateTime Actual { get; set; } 
    
        [JsonProperty("Goal")]
        public DateTime Goal { get; set; }

       

        [JsonProperty("GoalMet")]
        public bool GoalMet => Actual <= Goal;


        [JsonProperty("Name")]
        public string Name { get; set; }
    }
}
