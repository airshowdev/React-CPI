using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class Champion
    {
        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Deficiency")]
        public string Deficiency { get; set; } = "";

        [JsonProperty("Expectation")]
        public string Expectation { get; set; } = "";

        [JsonProperty("Recommendation")]
        public string Recommendation { get; set; } = "";

        [JsonProperty("Goal")]
        public string Goal { get; set; } = "";

        [JsonProperty("Response")]
        public string Response { get; set; } = "";
    }
}