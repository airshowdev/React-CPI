using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class SipocRow
    {
        [JsonProperty("Supplier")]
        public string Supplier { get; set; } = "";

        [JsonProperty("Input")]
        public string Input { get; set; } = "";

        [JsonProperty("Process")]
        public string Process { get; set; } = "";

        [JsonProperty("Output")]
        public string Output { get; set; } = "";

        [JsonProperty("Customer")]
        public string Customer { get; set; } = "";
    }
}