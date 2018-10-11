import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/RequestAMentor.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/RequestAMentor.js

export class RequestAMentor extends Component {

    displayName = RequestAMentor.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Request a Mentor </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <p>The assumption is that you have recently completed Green Belt Academics and are looking for an event to hone your newly aquired skills. If the results of the intial review of data collected in the previous step points to continuing with this event, now is a good time to reach out to find a mentor to help walk you through this process.  A mentor can look through the data with you and answer any questions you have about how to proceed.  A good place to start is contacting your GB Academics Instructor.  Another good place to find a mentor is your local Manpower and Organization office. If you are still having difficulty locating a mentor, use the AF CPI Portal to find a Black Belt practioner. </p>
                <button class="usa=button">AF CPI PORTAL LINK</button>
            </div>


        )
    }
}