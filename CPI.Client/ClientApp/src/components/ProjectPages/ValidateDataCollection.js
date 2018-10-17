import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class ValidateDataCollection extends Component {

    displayName = ValidateDataCollection.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render() {
        return (
            <div className="paragraph">
                <h1> Validate Data Collection </h1>
                <p>A successful event relies on accurate data. Faulty data may point the team in the wrong<br /> direction it will be difficult to get “buy-in” from the team if they do not believe the data being<br /> used in the event. During this portion of the Kick-off, present data to Subject Matter Experts<br /> (SMEs) and allow them to provide feedback. If the data is not accurate or additional<br /> information needs to be gathered, now is the time!</p>
            </div>
        );
    }
}