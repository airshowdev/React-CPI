import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class MeetWithTeamLead extends Component {

    displayName = MeetWithTeamLead.name

    constructor(props, context) {
        super(props, context);
        this.state = { project: {}, dateBeginTemp: "", dateEndTemp: "", loading: true };

        this.handleChange = this.handleChange.bind(this);
        this.isDate = this.isDate.bind(this);
        this.formatDateBegin = this.formatDateBegin.bind(this);
        this.formatDateEnd = this.formatDateEnd.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, dateBeginTemp: data.TeamLeadMeeting.DateRange.begin, dateEndTemp: data.TeamLeadMeeting.DateRange.end, loading: false });
            });
    }
    

    handleChange(event) {
        var stateProject = this.state.project;
        switch (event.target.id) {
            case 'Members':
                stateProject.TeamLeadMeeting.MembersIdentified = event.target.value.split('\n');
                break;
        }
        this.setState({ project: stateProject });
    }


    formatDateBegin() {
        
        alert(this.state.dateBeginTemp);
        if (this.isDate(this.state.dateBeginTemp)) {
            var stateProject = this.state.project;
            stateProject.TeamLeadMeeting.DateRange.begin = this.state.dateBeginTemp;
            this.setState({ project: stateProject });
        } else {
            alert("Please Enter a valid date for the new element's \"begin\" value ");
        }
    }

    formatDateEnd() {
        if (this.isDate(this.state.dateEndTemp)) {
            var stateProject = this.state.project;
            stateProject.TeamLeadMeeting.DateRange.end = this.state.dateEndTemp;
            this.setState({ project: stateProject });
            alert(this.state.dateEndTemp);
        } else {
            alert("Please Enter a valid date for the new element's \"end\" value ");
        }
    }

    handleDateChange(event) {
        switch (event.target.id) {
            case "startDate":
                this.setState({ dateBeginTemp: event.target.value });
                break;
            case "endDate":
                this.setState({ dateEndTemp: event.target.value });
                break;
            default:
                alert("oh no, this is the problem");
                break;
        }
    }

    isDate(date) {
        console.log(Date.parse(date));
        return !isNaN(Date.parse(date));
    }


    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
        return (
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
                                    <textarea id="Members" type="text" value={this.state.project.TeamLeadMeeting.MembersIdentified.join('\n')} onChange={this.handleChange} />

                                </div>
                                <div>
                                    <p>Type in Proposed Event Date <br />(example: 12-20 July 2018) </p>
                                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                                        <tbody>
                                            <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" id="startDate" placeholder="MM/DD/YYYY" onBlur={this.formatDateBegin} onChange={this.handleDateChange} value={this.state.dateBeginTemp}  /></td>
                                                <td style={{ padding: "0px" }}><input className="column-input-box" type="text" id="endDate" placeholder="MM/DD/YYYY" onBlur={this.formatDateEnd} onChange={this.handleDateChange} value={this.state.dateEndTemp} /></td></tr>
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
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
        }
    }
}