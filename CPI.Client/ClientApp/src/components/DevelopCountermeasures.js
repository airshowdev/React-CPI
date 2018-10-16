import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 5 - Develop Countermeasures </h1>
                <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                    <h3 style={{ marginTop: "10px" }}>Develop countermeaures for each root cause using an appropriate CPI principle</h3>
                </div>
                <div>
                    <div className="countermeasure-lists-div">
                        <ul> <b>Root Cause</b>
                            <li>Countermeasure #1</li>
                            <li>Countermeasure #2</li>
                        </ul>
                    </div>
                    <div className="countermeasure-lists-div">
                        <ul> <b>Root Cause</b>
                            <li>Countermeasure #1</li>
                            <li>Countermeasure #2</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="countermeasure-lists-div">
                        <ul> <b>Root Cause</b>
                            <li>Countermeasure #1</li>
                            <li>Countermeasure #2</li>
                        </ul>
                    </div>
                    <div className="countermeasure-lists-div">
                        <ul> <b>Root Cause</b>
                            <li>Countermeasure #1</li>
                            <li>Countermeasure #2</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}