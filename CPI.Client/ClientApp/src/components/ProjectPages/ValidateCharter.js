import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/ValidateCharter.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/ValidateCharter.js

export class ValidateCharter extends Component {

    displayName = ValidateCharter.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Finalize Charter </h1>
                <div className="image-alignment">
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>After completing the Gemba walk and seeing the process first hand, you may find that there are aspects of the original charter that need to be changed.  Use the lessons learned from the Gemba walk to refine and validate your team charter. 
                   <br/>Has the scope changed?
                   <br/>Have all stakeholders been identified?
                   <br/>Do you need to add additional team members?
                   <br/>Do you need additional data?
                </p>
            </div>
        )
    }
}