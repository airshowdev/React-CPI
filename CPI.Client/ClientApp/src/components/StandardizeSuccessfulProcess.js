import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class StandardizeSuccessfulProcess extends Component {

    displayName = StandardizeSuccessfulProcess.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 8 - Standardize Successful Process </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop an action plan to see countermeasures through</h3>
                    </div>
                    <div style={{ textAlign: "left", margin: "5px" }}>
                        <p>&emsp; &emsp;There are many strategies for solidifying the new processSome Break old process to eliminate possibility of returning to old way of doing business, if possible Develop and sustain performance measures. Implement standard work, where possible Set up future revisit dates to check if improvements have held Put “C” in CPI by revisiting “Parking Lot” for potential next round of CPI Take on scientific method of inquiry mentality demonstrated by repeated experimentation Facilitate replication of success</p>
                    </div>
                    <div>
                        <table className="standardize-process-table">
                            <thead>
                                <th style={{ minWidth: "400px" }}>Task</th>
                                <th>Action Officer</th>
                                <th >Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}