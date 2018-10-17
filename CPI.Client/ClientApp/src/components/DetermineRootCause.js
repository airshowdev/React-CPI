import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class DetermineRootCause extends Component {

    displayName = DetermineRootCause.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 4 - Determine Root Cause </h1>
                <div style={{ textAlign: "left", margin: "20px", border: "solid 1px", width: "15vw", paddingLeft: "5px", backgroundColor: "rgba(0, 113, 188, 0.8)", color: "white" }}>
                    <b>4. Determine Root Cause</b>
                    <ul className="root-cause-list">
                        <li style={{ marginTop: "-10px" }}>5 Whys</li>
                        <li>Brainstorming</li>
                        <li>Pareto</li>
                        <li>Affinity</li>
                        <li>Fishbone</li>
                        <li>Control Charts</li>
                    </ul>
                </div>
                <div>
                    <table className="root-cause-table">
                        <tbody>
                            <tr>
                                <td style={{ width:"14em"}}>Root Cause 1</td>
                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>CHART HERE</p>
                </div>
            </div>
        )
    }
}