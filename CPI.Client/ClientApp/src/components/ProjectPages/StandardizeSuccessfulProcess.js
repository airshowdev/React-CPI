import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class StandardizeSuccessfulProcess extends Component {

    displayName = StandardizeSuccessfulProcess.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 8 - Standardize Successful Process </h1>
                    <p></p>
                </div>
            </div>
        )
    }
}