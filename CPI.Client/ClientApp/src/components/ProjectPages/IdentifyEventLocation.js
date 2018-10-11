import React, { Component } from 'react';
import '../css/uswds.css';

export class IdentifyEventLocation extends Component {

    displayName = IdentifyEventLocation.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Identify Event Location </h1>
                <div className="image-alignment">
                <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>Selecting an appropriate CPI event location is critical to the success of the team.  Select a location that has the following characteristics: 
                   <br />- Readily available to all team members
                   <br />- Has plenty of wall space
                   <br />- Available for the duration of the event
                   <br />- A safe environment where participants feel free to contribute to discussions without retribution
                </p>
            </div>
        )
    }
}