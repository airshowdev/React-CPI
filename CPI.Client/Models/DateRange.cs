using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class DateRange
    {
        [JsonProperty("Begin")]
        public string Begin { get; set; } = "";

        [JsonProperty("End")]
        public string End { get; set; } = "";
    }
}