import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/PreEventPlanningOverview.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/PreEventPlanningOverview.js

export class PreEventPlanningOverview extends Component {

    displayName = PreEventPlanningOverview.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
            <div className="paragraph">
                <h1> Pre Event Planning Overview </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/PreEventPlanningOverview.js
                <p>Pre-planning is the most important phase of leading a successful CPI event. <br/>  In this phase you begin to develop the problem statement, determine feasibility <br/> of the event and get buy-in from the Champion and Team Lead.  </p>
             </div>
=======
                    <p>Pre-planning is the most important phase of leading a successful CPI event. <br/>  In this phase you begin to develop the problem statement, determine feasibility <br/> of the event and get buy-in from the Champion and Team Lead.  </p>
            </div>
            </div>
>>>>>>> Views:CPI.Client/ClientApp/src/components/PreEventPlanningOverview.js
            )
    }
}