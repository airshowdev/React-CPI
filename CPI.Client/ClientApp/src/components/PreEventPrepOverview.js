import React, { Component } from 'react';
import './css/uswds.css';

export class PreEventPrepOverview extends Component {

    displayName = PreEventPrepOverview.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Overview </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <p> With Pre-Event Planning complete the Champion, Team Leader and Facilitator should have a general idea of the problem, the performance gap and target for success.  The goal of Pre-Event Preparation is to familiarize the remaining team members with this information by visiting the work center under study (Process or "Gemba" walk).     </p>
            </div>
        )
    }
}