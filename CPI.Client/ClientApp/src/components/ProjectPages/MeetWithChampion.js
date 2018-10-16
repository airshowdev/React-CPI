import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class MeetWithChampion extends Component {

    displayName = MeetWithChampion.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph" style={{ border: "hidden", minWidth: "687px" }}>
                <h1> Meet With Champion </h1>
                <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <tbody>
                        <tr>
                            <td><b>Activity</b></td>
                            <td><b>Inputs From Activity</b></td>
                        </tr>
                        <tr>
                            <td>
                                <p><u>Meet with Champion</u><br />Obtain "Buy-In"</p>
                                <div>
                                    <button>Click to Open Directions</button>
                                </div>
                                <div>
                                    <button>Meeting With <br />Champion</button>
                                </div>
                            </td>
                            <td style={{ padding: "0px" }}>
                                <table className="column-input-box">
                                    <tbody>
                                        <tr>
                                            <td>Wing/Directorate:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>Unit:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>Champion:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>Process Owner:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>Event Team Leader(s):</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>Facilitator(s)-in-Training:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>*Facilitator/Trainer:</td>
                                            <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                        </tr>
                                        <tr>
                                            <td>CHAMPION GOAL:</td>
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