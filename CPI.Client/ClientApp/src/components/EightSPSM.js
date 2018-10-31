import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { BarChart } from './ProjectPages/BarChart.js';

export class EightSPSM extends Component {

    displayName = EightSPSM.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> 8 Step Problem Solving Model </h1>
                </div>
                <div className="usa-grid">
                    <h2 style={{ textDecorationLine: "underline" }}> 1. Clarify & Validate the Problem </h2>
                    <table style={{border: "none", outline: "none"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <p>*input*</p>
                                </td>
                                <td>
                                    <p>*chart*</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}