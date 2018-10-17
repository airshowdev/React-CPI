import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class SetImprovementTargets extends Component {

    displayName = SetImprovementTargets.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render() {
        return (
            <div className="paragraph">
                <h1> PPSM Step 3 - Set Improvement Targets </h1>
                <textarea className="set-improvement-text-area" placeholder="Performance Gap:"></textarea>
                <table className = "centered-textarea">
                    <tbody>
                        <tr>
                            <td style={{ border: "hidden" }}></td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden" }}>Baseline</td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}>Projected</td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr>
                        <tr>
                            <td style={{ borderLeft: "hidden", borderBottom: "hidden" }}>TIME FRAME</td>
                            <td></td>
                            <td style={{backgroundColor: "rgba(0, 113, 188, 0.5)"}}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr>
                        <tr>
                            <td style={{ borderLeft: "hidden", borderBottom: "hidden" }}>% On Time</td>
                            <td></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}