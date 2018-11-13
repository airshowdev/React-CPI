import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';

export class IdentifyEventLocation extends Component {

    displayName = IdentifyEventLocation.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div>
                <NavButtons next="DistributeEventNotification" previous="ReviewKPI" projectId={this.props.match.params.id} />
            <div className="paragraph">
                <h1> Identify Event Location </h1>
                <div className="image-alignment">
                </div>
                <p>Selecting an appropriate CPI event location is critical to the success of the team.  Select a location that has the following characteristics: 
                   <br />- Readily available to all team members
                   <br />- Has plenty of wall space
                   <br />- Available for the duration of the event
                   <br />- A safe environment where participants feel free to contribute to discussions without retribution
                </p>
                </div>
                </div>
        )
    }
}