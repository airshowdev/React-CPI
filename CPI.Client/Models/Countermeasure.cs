using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class Countermeasure
    {
        [JsonProperty("Description")]
        public string Description { get; set; } = "";

        [JsonProperty("ActionOfficer")]
        public string ActionOfficer { get; set; } = "";

        [JsonProperty("Date")]
        public string Date { get; set; } = "";

        [JsonProperty("Status")]
        public string Status { get; set; } = "";
    }
}