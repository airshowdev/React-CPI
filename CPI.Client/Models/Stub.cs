using Newtonsoft.Json;

namespace CpiApi
{
    public class Stub
    {
        [JsonProperty("ID")]
        public string ID { get; set; } = "";

        [JsonProperty("Unit")]
        public string Unit { get; set; } = "";

        [JsonProperty("Creator")]
        public string Creator { get; set; } = "";

        [JsonProperty("Name")]
        public string Name { get; set; } = "";
    }
}