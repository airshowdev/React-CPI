using Newtonsoft.Json;

namespace CpiApi.Models
{
    public partial class DesiredEffects
    {
        [JsonProperty("Productivity")]
        public string Productivity { get; set; } = "";

        [JsonProperty("EquipAvail")]
        public string EquipAvail { get; set; } = "";

        [JsonProperty("Agility")]
        public string Agility { get; set; } = "";

        [JsonProperty("SafeOps")]
        public string SafeOps { get; set; } = "";

        [JsonProperty("Efficiency")]
        public string Efficiency { get; set; } = "";
    }
}