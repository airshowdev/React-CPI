import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { Checkbox } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons';

export class DraftCharter extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    displayName = DraftCharter.name;

    constructor(props, context) {
        super(props, context);

        this.state = { project: {}, loading: true};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("api/Project/GetProjectAsync?id=" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ project: data, loading: false }));
    }

    handleClick = (event) => {

        var labelContent = this.state.content;

        if (parseInt(event.target.id) < 5) {
            labelContent[0] = "-";
            labelContent[1] = "-";
            labelContent[2] = "-";
            labelContent[3] = "-";
            labelContent[4] = "-";
        }
        else if (parseInt(event.target.id) < 10) {
            labelContent[5] = "-";
            labelContent[6] = "-";
            labelContent[7] = "-";
            labelContent[8] = "-";
            labelContent[9] = "-";
        }
        else if (parseInt(event.target.id) < 15) {
            labelContent[10] = "-";
            labelContent[11] = "-";
            labelContent[12] = "-";
            labelContent[13] = "-";
            labelContent[14] = "-";
        }
        else if (parseInt(event.target.id) < 20) {
            labelContent[15] = "-";
            labelContent[16] = "-";
            labelContent[17] = "-";
            labelContent[18] = "-";
            labelContent[19] = "-";
        }
        else {
            labelContent[20] = "-";
            labelContent[21] = "-";
            labelContent[22] = "-";
            labelContent[23] = "-";
            labelContent[24] = "-";
        }

        labelContent[parseInt(event.target.id)] = (labelContent[parseInt(event.target.id)] === "-") ? "X" : "-";
        this.setState({ content: labelContent });
    };

    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <div style={{ height: '11in', width: '8.5in', fontSize: '12px' }}>
                    <h2>{this.state.project.Name + " Event Charter"}</h2>
                    <table className="charterTable" style={{ padding: '0', width: '100%' }}>
                        <thead>
                            <th/>
                            <th>Name/Rank</th>
                        </thead>
                        <tbody>
                            <tr><td>Champion/Owner</td><td>{this.state.project.Champion.Name}</td></tr>
                            <tr><td>Process Owner</td><td>{this.state.project.ProcessOwner}</td></tr>
                            <tr><td>Unit AF CPI POC:</td><td>{this.state.project.Facilitator}</td></tr>
                            <tr><td>Facilitator(s) in Training</td><td>{this.state.project.Evaluators.join(" ")}</td></tr>
                            <tr><td>Facilitator / Trainer</td><td>{this.state.project.Facilitator}</td></tr>
                        </tbody>
                    </table>

                    <label htmlFor="problemTable">Problem</label>
                    <table id="problemTable" className="charterTable" style={{ padding: '0', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '25%', wordWrap: 'wrap' }}>Define the problem/opportunity for improvement. <br /> Answer: What, when, where, how. <br />  <strong>Don't answer: Why</strong></td>
                                <td>{this.state.project.ProblemStatement}</td>
                            </tr>
                            <tr>
                                <td style={{ width: '25%', wordWrap: 'wrap' }}>Tell how bad the mproblem is. Explain what is happening and what should happen. <strong>How do we know it's a problem?</strong></td>
                                <td>{this.state.project.ProblemStatement}</td>
                            </tr>
                        </tbody>
                    </table>

                    <label htmlFor="impactStatementTable">Impact Statement</label>
                    <table id="impactStatementTable" className="charterTable" style={{ padding: '0', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '25%', wordWrap: 'wrap' }}>How does the problem impact your organization's ability to meet its mission, quality of life, AF goals, priorities, etc? <strong>This helps categorize the improvement type</strong></td>
                                <td>{this.state.project.ImpactStatement}</td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <label htmlFor="expectedImprovementTable">Goal/Expected Improvements</label>
                    <table id="expectedImprovementTable" className="charterTable" style={{ padding: '0', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '25%', wordWrap: 'wrap' }}>What specific, quantifiable goals should the team strive toward during the event?<strong>This helps with the improvement target.</strong></td>
                                <td>{this.state.project.Champion.Expectation}</td>
                            </tr>

                        </tbody>
                    </table>

                    <label htmlFor="sipocTable">SIPOC (Defines the scope and major elements of the process.)</label>
                    <table id="sipocTable" className="charterTable" style={{ padding: '0', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td ><strong>SUPPLIERS</strong><br/>Who supplies inputs to the process?</td>
                                <td ><strong>INPUTS</strong><br />What people, materials, equipment, policies, or procedures feed the process?</td>
                                <td ><strong>PROCESS</strong><br />What are the 5-7 high level steps in the process?</td>
                                <td ><strong>OUTPUTS</strong><br />What products/services are generated from the process?</td>
                                <td ><strong>CUSTOMERS</strong><br />Who receives the outputs of the process?</td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.project.TeamLeadMeeting.SipocRows.map((x, i) => (
                                        (i === 0 ? "" : "\n") + x.Supplier
                                         ))
                                    }
                                </td>
                                <td>
                                    {this.state.project.TeamLeadMeeting.SipocRows.map((x, i) => (
                                        (i === 0 ? "" : "\n") + x.Input
                                    ))
                                    }
                                </td>
                                <td>
                                    {this.state.project.TeamLeadMeeting.SipocRows.map((x, i) => (
                                        (i === 0 ? "" : "\n") + x.Process
                                    ))
                                    }
                                </td>
                                <td>
                                    {this.state.project.TeamLeadMeeting.SipocRows.map((x, i) => (
                                        (i === 0 ? "" : "\n") + x.Output
                                    ))
                                    }
                                </td>
                                <td>
                                    {this.state.project.TeamLeadMeeting.SipocRows.map((x, i) => (
                                        (i === 0 ? "" : "\n") + x.Customer
                                    ))
                                    }
                                </td>

                            </tr>
                            <tr style={{width: "100%"}}><td><strong>Exclusions</strong> (Identify any items/processes that are off limits or will not be looked at during this event.)</td></tr>
                        </tbody>
                    </table>

                    <label htmlFor="teamMemberTable"><strong>TEAM MEMBERS (INCLUDE INDIVIDUALS IDENTIFIED IN THE SIPOC)</strong></label>
                    <div className="flex-no-wrap">
                        <table id="teamMemberTable" className="charterTable" style={{ padding: '0', width: '45%' }}>
                            <thead>
                                <th>NAME/RANK</th>
                                <th>ORGANIZATION</th>
                            </thead>
                            <tbody>
                                {this.state.project.Evaluators.map((x, i) => (
                                    i < this.state.project.Evaluators.length/2 ?
                                        <tr>
                                            <td>{x}</td>
                                            <td>Unit?</td>
                                        </tr> : null
                                ))}
                            </tbody>
                        </table>

                        <table id="teamMemberTable2" className="charterTable" style={{ padding: '0', width: '45%' }}>
                            <thead>
                                <th>NAME/RANK</th>
                                <th>ORGANIZATION</th>
                            </thead>
                            <tbody>
                                {this.state.project.Evaluators.map((x, i) => (
                                    i >= this.state.project.Evaluators.length / 2 ?
                                        <tr>
                                            <td>{x}</td>
                                            <td>Unit?</td>
                                    </tr> : null
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <label htmlFor="currentPerformanceTable"><strong>TEAM MEMBERS (INCLUDE INDIVIDUALS IDENTIFIED IN THE SIPOC)</strong></label>
                    <div className="flex-no-wrap">
                        <div style={{ width: '25%' }}>What metrics are used to measure the current performance of the process and how have they been performing?</div>
                        <div></div>
                    </div>
                </div>
            )
        }
    }
}
            /*
            <div>
                <NavButtons next="ProcessWalk" previous="MeetWithTeamLeader" title="CPI Event Charter" projectId={this.props.match.params.id}/>
            <div className="paragraph" style={{ border: "hidden", minWidth: "687px" }}>
                <h1> CPI Event Charter </h1><button>Print Charter</button>
                <table style={{ textAlign: "center", padding: "0px", minWidth: "1000px", maxWidth: "1000px" }}>
                    <tbody>
                        <tr>
                            <td><b>Event Title;</b></td>
                            <td style={{ padding: "0px" }}><input className="tinycolumn-input-box" type="text" placeholder="x" /></td>
                            <td><b>Wing/Directorate:</b></td>
                            <td style={{ padding: "0px" }}><input className="tinycolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td><b>Event Type (EVSA, VSA, RIE, Project);</b></td>
                            <td style={{ padding: "0px" }}><input className="tinycolumn-input-box" type="text" placeholder="x" /></td>
                            <td><b>Event/Dates:</b></td>
                            <td style={{ padding: "0px" }}><input className="tinycolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                    </tbody>
                </table>

                <p style={{ fontSize: "23px" }}> <b>SECTION 1</b> (TO BE COMPLETED WITH GUIDANCE FROM THE PROCESS OWNER)</p>
                <table className="draftcharter-table" style={{ padding: "0px", marginBottom: "5px" }}>
                    <tbody>
                        <tr>
                            <td>Role</td>
                            <td>Name/Rank</td>
                        </tr>
                        <tr>
                            <td>Champion:</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>Process Owner:</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>Event Team Leader(s):</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>Facilitator(s)-in-Training:</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>*Facilitator/Trainer:</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: "14px", marginTop: "0px" }}>* If requesting support, the MANPOWER office will assign the facilitater/trainer</p>

                <h4 style={{ marginBottom: "0px" }}>PROBLEM STATEMENT</h4>
                <table className="draftcharter-table" style={{ padding: "0px", marginBottom: "5px", marginTop: "0px" }}>
                    <tbody>
                        <tr>
                            <td>Define the problem/opportunity for improvement.</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>What is the business case for holding this event? In other words, what is the strategic inportance to your organization for conducting this event?</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" style={{ minHeight: "87px", maxHeight: "87px" }} /></td>
                        </tr>
                    </tbody>
                </table>

                <h4 style={{ marginBottom: "0px" }}>IMPACT STATEMENT</h4>
                <table className="draftcharter-table" style={{ padding: "0px", marginBottom: "5px", marginTop: "0px" }}>
                    <tbody>
                        <tr>
                            <td>How does the problem impact your organization's ability to meet its mission, quality of life, AF goals, priorities, etc.?</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" style={{ minHeight: "87px", maxHeight: "87px" }} /></td>
                        </tr>
                    </tbody>
                </table>

                <h4 style={{ marginBottom: "0px" }}>GOALS/EXPECTED IMPROVEMENTS</h4>
                <table className="draftcharter-table" style={{ padding: "0px", marginBottom: "5px", marginTop: "0px" }}>
                    <tbody>
                        <tr>
                            <td>What specific, quantifiable goals should the team strive toward during the event?</td>
                            <td style={{ padding: "0" }}><input className="thincolumn-input-box" type="text" placeholder="x" style={{ minHeight: "87px", maxHeight: "87px" }} /></td>
                        </tr>
                    </tbody>
                </table>

                <h4 style={{ marginBottom: "0px" }}>FIVE DESIRED EFFECTS IMPACT</h4>
                <table className="draftcharter-button" style={{ padding: "0px", marginBottom: "5px", maxWidth: "800", minWidth: "800", marginTop: "0px" }}>
                    <tbody>
                        <tr>
                            <td>(Place an X as appropriate)</td>
                            <td>Worsen</td>
                            <td>No Change</td>
                            <td>Small</td>
                            <td>Moderate</td>
                            <td>Significant</td>
                        </tr>
                        <tr>
                            <td>Productivity of People</td>
                            <td><label id="0" onClick={this.handleClick}>{this.state.content[0]}</label></td>
                            <td><label id="1" onClick={this.handleClick}>{this.state.content[1]}</label></td>
                            <td><label id="2" onClick={this.handleClick}>{this.state.content[2]}</label></td>
                            <td><label id="3" onClick={this.handleClick}>{this.state.content[3]}</label></td>
                            <td><label id="4" onClick={this.handleClick}>{this.state.content[4]}</label></td>
                        </tr>
                        <tr>
                            <td>Critical Equipment Availability</td>
                            <td><label id="5" onClick={this.handleClick}>{this.state.content[5]}</label></td>
                            <td><label id="6" onClick={this.handleClick}>{this.state.content[6]}</label></td>
                            <td><label id="7" onClick={this.handleClick}>{this.state.content[7]}</label></td>
                            <td><label id="8" onClick={this.handleClick}>{this.state.content[8]}</label></td>
                            <td><label id="9" onClick={this.handleClick}>{this.state.content[9]}</label></td>
                        </tr>
                        <tr>
                            <td>Response Time and Agility </td>
                            <td><label id="10" onClick={this.handleClick}>{this.state.content[10]}</label></td>
                            <td><label id="11" onClick={this.handleClick}>{this.state.content[11]}</label></td>
                            <td><label id="12" onClick={this.handleClick}>{this.state.content[12]}</label></td>
                            <td><label id="13" onClick={this.handleClick}>{this.state.content[13]}</label></td>
                            <td><label id="14" onClick={this.handleClick}>{this.state.content[14]}</label></td>
                        </tr>
                        <tr>
                            <td>Sustain Safe and Reliable Operations</td>
                            <td><label id="15" onClick={this.handleClick}>{this.state.content[15]}</label></td>
                            <td><label id="16" onClick={this.handleClick}>{this.state.content[16]}</label></td>
                            <td><label id="17" onClick={this.handleClick}>{this.state.content[17]}</label></td>
                            <td><label id="18" onClick={this.handleClick}>{this.state.content[18]}</label></td>
                            <td><label id="19" onClick={this.handleClick}>{this.state.content[19]}</label></td>
                        </tr>
                        <tr>
                            <td>Energy Efficiency</td>
                            <td><label id="20" onClick={this.handleClick}>{this.state.content[20]}</label></td>
                            <td><label id="21" onClick={this.handleClick}>{this.state.content[21]}</label></td>
                            <td><label id="22" onClick={this.handleClick}>{this.state.content[22]}</label></td>
                            <td><label id="23" onClick={this.handleClick}>{this.state.content[23]}</label></td>
                            <td><label id="24" onClick={this.handleClick}>{this.state.content[24]}</label></td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: "23px" }}> <b>SECTION 2</b> (To be completed by the Team Leader with help from the Facilitators)</p>

                <p style={{ fontSize: "23px", marginBottom: "0" }}> <b>SIPOC</b> (defines the scope and major elements of the process.)</p>
                <table className="draftcharter-input-box" style={{ padding: "0px", marginBottom: "5px", maxWidth: "800", minWidth: "800", marginTop: "0" }}>
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
                
                <p style={{ fontSize: "23px", marginBottom: "0" }}> <b>Team Members</b> (Include individuals identified in the SIPOC)</p>
                <table className="draftcharter-team-members" style={{ padding: "0px", marginBottom: "5px", maxWidth: "700px", minWidth: "700px", marginTop: "0px" }}>
                    <tbody>
                        <tr><td style={{ padding: "0px"}}><input type="text" placeholder="x" /></td></tr>  
                        <tr><td style={{ padding: "0px"}}><input type="text" placeholder="x" /></td></tr>  
                        <tr><td style={{ padding: "0px"}}><input type="text" placeholder="x" /></td></tr>  
                    </tbody>
                </table>

                <h4 style={{ marginBottom: "0px" }}>Approved By</h4>
                <table className="approval-table" style={{ padding: "0px", marginBottom: "5px", marginTop: "0px" }}>
                    <tbody>
                        <tr>
                            <td style={{ borderTop: "hidden", borderLeft: "hidden" }}></td>
                            <td>NAME/RANK</td>
                            <td>SIGNATURE</td>
                            <td>DATE</td>
                        </tr>
                        <tr>
                            <td>Process Owner:</td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                        </tr>
                        <tr>
                            <td>Champion</td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
        )*/