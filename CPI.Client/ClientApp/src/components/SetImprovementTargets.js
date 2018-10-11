import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class SetImprovementTargets extends Component {

    displayName = SetImprovementTargets.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 3 - Set Improvement Targets </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <textarea className="centered-textarea" placeholder="Performance Gap:"></textarea>
                <table className = "centered-textarea">
                    <thead>
                        <tr>
                            <td>Baseline</td>
                            <td></td>
                            <td>Projected</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}