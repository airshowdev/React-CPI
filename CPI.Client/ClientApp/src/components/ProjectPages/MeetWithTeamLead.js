import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';
import PropTypes from 'prop-types';
import DataHandler from '../js/DataHandler';

export class MeetWithTeamLead extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    displayName = MeetWithTeamLead.name;

    
    constructor(props, context) {
        super(props, context);
		this.state = {
            TeamLeadMeeting: {},
            loading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.isDate = this.isDate.bind(this);
        this.formatDateBegin = this.formatDateBegin.bind(this);
        this.formatDateEnd = this.formatDateEnd.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSipocChange = this.handleSipocChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    async componentDidMount() {
        var dHandler = new DataHandler();
        let data = await dHandler.getProject(this.props.match.params.id);
        this.setState({
            TeamLeadMeeting: data.TeamLeadMeeting,
            loading: false
        });
    }
    

    handleChange(event) {
        var tempTLM = this.state.TeamLeadMeeting;
        switch (event.target.id) {
            case 'Members':
                tempTLM.MembersIdentified = event.target.value.split('\n');
                break;
        }
        this.setState({ TeamLeadMeeting: tempTLM });
    }


    formatDateBegin() {
        if (!this.isDate(this.state.TeamLeadMeeting.DateRange.Begin)) {
            alert("Please Enter a valid date for the new element's \"begin\" value ");
        }
    }

    formatDateEnd() {
        if (!this.isDate(this.state.TeamLeadMeeting.DateRange.End)) {
            alert(this.state.dateEndTemp);
        }
    }

    handleDateChange(event) {
        let tempTLM = this.state.TeamLeadMeeting;
        switch (event.target.id) {
            case "startDate":
                tempTLM.DateRange ? tempTLM.DateRange.Begin = event.target.value :
                    tempTLM.DateRange = {
                        Begin: event.target.value,
                        End: ""
                    };
                break;
            case "endDate":
                tempTLM.DateRange ? tempTLM.DateRange.End = event.target.value :
                    tempTLM.DateRange = {
                        Begin: "",
                        End: event.target.value
                    };
                break;
            default:
                alert("oh no, this is the problem");
                break;
        }
        this.setState({TeamLeadMeeting: tempTLM })
    }

    async handleSave() {
        
        let dHandler = new DataHandler();
        var sendData = { TeamLeadMeeting: this.state.TeamLeadMeeting  }

        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);
        if (response !== 200) {
            alert("There was an error saving changes. Please try again or contact a system administrator")
        }
    }

    isDate(date) {
        console.log(Date.parse(date));
        return !isNaN(Date.parse(date));
    }

    handleSipocChange(event) {
        var Sipoc = this.state.TeamLeadMeeting.SipocRows;
		switch (event.target.name) {
			case "Supplier":
				Sipoc[parseInt(event.target.id)].Supplier = event.target.value;
				break;
			case "Input":
				Sipoc[parseInt(event.target.id)].Input = event.target.value;
				break;
			case "Process":
				Sipoc[parseInt(event.target.id)].Process = event.target.value;
				break;
			case "Output":
				Sipoc[parseInt(event.target.id)].Output = event.target.value;
				break;
			case "Customer":
				Sipoc[parseInt(event.target.id)].Customer = event.target.value;
				break;
		}

        this.setState({ SIPOC: Sipoc });
	}

    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <div>
                    <NavButtons next="DraftCharter" previous="MeetWithChampion" title="Meet with Team Lead" projectId={this.props.match.params.id}/>
            <div className="paragraph" style={{ border: "hidden", float: "none", marginLeft: "auto", marginRight: "auto", minWidth: "1000px", maxWidth: "1200px" }}>
                <h1 style={{ marginLeft: "30%" }}> Meet With Team Lead </h1>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Activity</b></td>
                            <td><b>Inputs From Activity</b></td>
                        </tr>
                        <tr>
                            <td style={{ minWidth: "400px" }}>
                                <p><u>Schedule Meeting with Team</u><br />At this point in the process you have already met with the Champion
                                    in order to get support for the event and to identify who will be the Team Lead.<br /> <br />
                                    The next step in the process will be to work with the team lead in order to get additional information required to complete the event charter.
                                </p>
                                <div>
                                    <button>Click to Open Directions</button>
                                </div>
                                <div>
                                    <p>Add additional Team Members Selected</p>
                                    <textarea id="Members" type="text" value={this.state.TeamLeadMeeting.MembersIdentified.join('\n') || ""} onChange={this.handleChange} />

                                </div>
                                <div>
                                    <p>Type in Proposed Event Date <br />(example: 12-20 July 2018) </p>
                                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                                                <tbody>
                                                    <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" id="startDate" placeholder="MM/DD/YYYY" onBlur={this.formatDateBegin} onChange={this.handleDateChange} value={this.state.TeamLeadMeeting.DateRange ? this.state.TeamLeadMeeting.DateRange.Begin : "" } /></td>
                                                        <td style={{ padding: "0px" }}><input className="column-input-box" type="text" id="endDate" placeholder="MM/DD/YYYY" onBlur={this.formatDateEnd} onChange={this.handleDateChange} value={this.state.TeamLeadMeeting.DateRange ? this.state.TeamLeadMeeting.DateRange.End : "" }/></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td style={{ padding: "0px" }}>
                                <table className="teamlead-table" style={{ margin: "auto", width: "auto", borderLeft: "hidden", borderRight: "hidden" }}>
                                    <tbody>
                                        <tr>
                                            <td>Suppliers</td>
                                            <td>Inputs</td>
                                            <td>Process</td>
                                            <td>Outputs</td>
                                            <td>Customers</td>
                                        </tr>
                                        <tr>
                                            <td>Who supplies inputs to the process?</td>
                                            <td>What people, materials, equipment, policies, or procedures feed the process?</td>
                                            <td>What are the 5-7 high level steps in the process?</td>
                                            <td>What products/services are generated from the process?</td>
                                            <td>Who receives the outputs of the process?</td>
										</tr>	
                                                {
                                                    this.state.TeamLeadMeeting.SipocRows.map((el, i) => (
												<tr>
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" id={i} name="Supplier" onChange={this.handleSipocChange} value={el.Supplier} /></td>{/*Suppliers*/}
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" id={i} name="Input" onChange={this.handleSipocChange} value={el.Input} /></td>{/*Inputs*/}
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" id={i} name="Process" onChange={this.handleSipocChange} value={el.Process} /></td>{/*Process*/}
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" id={i} name="Output" onChange={this.handleSipocChange} value={el.Output} /></td>{/*Outputs*/}
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" id={i} name="Customer" onChange={this.handleSipocChange} value={el.Customer} /></td>{/*Customers*/}
											</tr>)) }
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.handleSave}>SAVE!</button>
                    </div>
                    </div>
            )
        }
    }
}