import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { NavButtons } from './NavButtons';

export class ConfirmResults extends Component {

    displayName = ConfirmResults.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div>
                <NavButtons next="StandardizeSuccessfulProcess" previous="SeeCounterMeasuresThrough" projectId={this.props.match.params.id} />
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 7 - Validate Results </h1>
                    <p></p>
                </div>
                </div>
                </div>
        )
    }
}