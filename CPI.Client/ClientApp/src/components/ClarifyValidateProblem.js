import React, { Component } from 'react';
import './css/uswds.css';

export class ClarifyValidateProblem extends Component {

    displayName = ClarifyValidateProblem.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 1 - Clarify and Validate the Problem </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <p>Using the information below, create a problem statement<br />What is the Process and Issue?<br />What organization owns the process?<br />What organizations are affected by the process?<br />What is happening in the process?<br />What should be happening in the process?<br />What is the critical to (x) factor? (time, cost, quality, variation)</p>
                <div>
                    <div className="horizontal-div-left" >
                        <textarea>Problem Statement:</textarea>
                    </div>
                    <div className="horizontal-div-right">
                        <p>Example:  From 1 Jan 2015 to 1 Jan 2016, 77 of 250 775th<br /> Mission Support Group  EPRs returned to MPS after<br /> suspense. VOC is 250 of 250 EPRs turned in to MPS NLT<br /> suspense date.</p>
                    </div>
                </div>
            </div>
        )
    }
}