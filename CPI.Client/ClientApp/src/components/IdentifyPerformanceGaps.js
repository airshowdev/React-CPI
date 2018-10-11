import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class IdentifyPerformanceGaps extends Component {

    displayName = IdentifyPerformanceGaps.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 2 - Identify Performance Gaps </h1>
                <div><h3>Chart goes here</h3></div>
                <p>Identify the performance Gaps in the current process by comparing current performance to the process goal</p>
                <div className="horizontal-div-left" >
                        <textarea>Performance Gap:</textarea>   
                </div>
            </div>
        )
    }
}