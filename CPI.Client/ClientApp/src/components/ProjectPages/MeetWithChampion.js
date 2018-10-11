import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/MeetWithChampion.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/MeetWithChampion.js

export class MeetWithChampion extends Component {

    displayName = MeetWithChampion.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph" style={{ border: "hidden" }}>
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
                                <table style={{ margin: "auto", width: "auto", border: "hidden" }}>
                                    <tbody>
                                        <tr>
                                            <td>Wing/Directorate:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Unit:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Champion:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Process Owner:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Event Team Leader(s):</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>Facilitator(s)-in-Training:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>*Facilitator/Trainer:</td>
                                            <td style={{ padding: "0px" }}><input className="column-input-box" type="text" placeholder="no u" /></td>
                                        </tr>
                                        <tr>
                                            <td>CHAMPION GOAL:</td>
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