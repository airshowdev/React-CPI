import React, { Component } from 'react';
import '../css/uswds.css';

export class PreEventPlanningOverview extends Component {

    displayName = PreEventPlanningOverview.name

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
                <p>Pre-planning is the most important phase of leading a successful CPI event. <br/>  In this phase you begin to develop the problem statement, determine feasibility <br/> of the event and get buy-in from the Champion and Team Lead.  </p>
             </div>
            )
    }
}