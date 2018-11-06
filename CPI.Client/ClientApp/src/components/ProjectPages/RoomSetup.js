import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';

export class RoomSetup extends Component {

    displayName = RoomSetup.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render() {
        return (
            <div>
                <NavButtons next="ClarifyValidateProblem" previous="EventGoNoGo" projectId={this.props.match.params.id} />
            <div className="paragraph">
                <h1> Room Setup </h1>
                <p>Setting up the room prior to the CPI event will help get the team off in the right direction.<br />  Doing this ahead of time can help ensure all necessary tools are in place and availible on the<br /> day of the event.  A properly set up room will also help with the flow and direction of your<br /> facilitation efforts.</p>
                </div>
                </div>
        )
    }
}