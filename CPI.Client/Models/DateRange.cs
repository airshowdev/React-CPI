using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class DateRange
    {
        [JsonProperty("begin")]
        public string Begin { get; set; } = "";

        [JsonProperty("end")]
        public string End { get; set; } = "";
    }
}