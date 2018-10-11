import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/ProcessWalk.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/ProcessWalk.js

export class ProcessWalk extends Component {

    displayName = ProcessWalk.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Initial Process Walk </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <p> The initial process walk (also referred to as *gemba) provides the Facilitator, Team Leader and Process Owner valuable insights into the process.  Use this time to familiarize yourselves with the workcenter under study including the employees and layout of the facility.  The initial walk may also indicate the types of tools you require for the team process walk.  Applicable tools include 5S, 7 wastes, and spaghetti chart (just to name a few).</p>
            </div>
        )
    }
}