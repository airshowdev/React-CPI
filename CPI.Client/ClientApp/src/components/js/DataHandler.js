export default class DataHandler{
    
    function getProject(id){
        var output = {};
        fetch('api/Project/GetProjectAsync?id=' + id)
                .then(response => response.json())
                .then(data => output = data);
        output.Name = output.Name ? output.Name : "";
        output.MajCom = output.MajCom ? output.MajCom : "";
        output.Base = output.Base ? output.Base : "";
        output.Creator = output.Creator ? output.Creator : "";
        output.Unit = output.Unit ? output.Unit : "";
        output.Facilitator = output.Facilitator ? output.Facilitator : "";
        output.WingDirectorate = output.WingDirectorate ? output.WingDirectorate : "";
        output.Evaluators = output.Evaluators ? output.Evaluators : [];
        output.TeamLeads = output.TeamLeads ? output.TeamLeads : [];
        output.Facilitators = output.Facilitators ? output.Facilitators : [];
        output.MajCom = output.MajCom ? output.MajCom : "";
        output.ProcessOwner = output.ProcessOwner ? output.ProcessOwner : "";
        output.Mentor = output.Mentor ? output.Mentor : "";
        output.Champion = output.Champion ? output.Champion : {Name: "", Deficiency:"", Expectation: ""};
        output.DataCollection = output.DataCollection ? output.DataCollection : {Elements: [], Type: ""};
        output.TeamLeadMeeting = output.TeamLeadMeeting ? output.TeamLeadMeeting : {MembersIdentified: [], DateRange: {Begin: "", End:"" }, SipocRows: []};
        output.Facilitator = output.Facilitator ? output.Facilitator : "";
        output.Facilitator = output.Facilitator ? output.Facilitator : "";
        output.Facilitator = output.Facilitator ? output.Facilitator : "";

    }
}