using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace CpiApi.Models
{
    public partial class RootCause
    {
        [BsonIgnoreIfNull]
        [JsonProperty("Description")]
        public string Description { get; set; } = "";

        [BsonIgnoreIfNull]
        [JsonProperty("Countermeasures")]
        public IList<Countermeasure> Countermeasures { get; set; } = new List<Countermeasure>();
    }
}