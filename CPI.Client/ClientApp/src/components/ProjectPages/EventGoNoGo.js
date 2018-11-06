import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';

export class EventGoNoGo extends Component {

    displayName = EventGoNoGo.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render() {
        return (
            <div>
                <NavButtons next="RoomSetup" previous="ObtainSupplies" projectId={this.props.match.params.id} />
            <div className="paragraph">
                <h1> Event Go/ No-Go </h1>
                <p>A vector check at this stage in the process ensures the Champion agrees the team has a solid<br/> grasp of the Problem to be solved, Gap to be closed, Target to be met.</p>
                </div>
                </div>
        )
    }
}