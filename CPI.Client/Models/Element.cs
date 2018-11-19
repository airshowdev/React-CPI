using MongoDB.Bson.Serialization.Attributes;

using Newtonsoft.Json;

namespace CpiApi
{
    public class Element
    {
        [JsonProperty("Goal")]
        public string Goal { get; set; } = "";

        [JsonProperty("Actual")]
        public string Actual { get; set; } = "";

        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Type")]
        public string Type { get; set; } = "";

        [JsonProperty("VA")]
        [BsonIgnoreIfNull]
        public int? VA { get; set; } = null;

        [JsonProperty("NVA")]
        [BsonIgnoreIfNull]
        public int? NVA { get; set; } = null;

        [JsonProperty("Labor")]
        [BsonIgnoreIfNull]
        public decimal? Labor { get; set; } = null;

        [JsonProperty("Material")]
        [BsonIgnoreIfNull]
        public decimal? Material { get; set; } = null;

        [JsonProperty("Other")]
        [BsonIgnoreIfNull]
        public decimal? Other { get; set; } = null;

        [JsonProperty("Transaction")]
        [BsonIgnoreIfNull]
        public int? TransNum { get; set; } = null;
    }
}