import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class MeetWithTeamLead extends Component {

    displayName = MeetWithTeamLead.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph" style={{ border: "hidden", float: "none" }}>
                <h1> Meet With Team Lead </h1>
                <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <tbody>
                        <tr>
                            <td><b>Activity</b></td>
                            <td><b>Inputs From Activity</b></td>
                        </tr>
                        <tr>
                            <td>
                                <p><u>Schedule Meeting with Team</u><br />At this point in the process you have already met with the Champion 
                                    in order to get support for the event and to identify who will be the Team Lead.<br /> <br />
                                    The next step in the process will be to work with the team lead in order to get additional information required to complete the event charter.
                                </p>
                                <div>
                                    <button>Click to Open Directions</button>
                                </div>
                                <div>
                                    <p>Add additional Team Members Selected</p>
                                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                                        <tbody>
                                            <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td></tr>
                                            <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td></tr>
                                            <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <p>Type in Proposed Event Date <br />(example: 12-20 July 2018) </p>
                                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                                        <tbody>
                                            <tr><td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td style={{ padding: "0px" }}>
                                <table className="teamlead-table" style={{ margin: "auto", width: "auto", border: "hidden" }}>
                                    <tbody>
                                        <tr>
                                            <td>Wing/Directorate:</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Wing/Directorate:</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Unit:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Champion:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Process Owner:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Event Team Leader(s):</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Facilitator(s)-in-Training:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>*Facilitator/Trainer:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>CHAMPION GOAL:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
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