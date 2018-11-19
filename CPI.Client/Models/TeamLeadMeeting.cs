using Newtonsoft.Json;
using System.Collections.Generic;

namespace CpiApi.Models
{
    public partial class TeamLeadMeeting
    {
		[JsonProperty("DateRange")]
		public DateRange DateRange { get; set; } = new DateRange();

        [JsonProperty("MembersIdentified")]
        public IList<string> MembersIdentified { get; set; } = new string[0];

        [JsonProperty("SipocRows")]
        public IList<SipocRow> SipocRows { get; set; } = new SipocRow[7] { new SipocRow(), new SipocRow(), new SipocRow(), new SipocRow(), new SipocRow(), new SipocRow(), new SipocRow() };
    }
}