import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class SeeCountermeasuresThrough extends Component {

    displayName = SeeCountermeasuresThrough.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 6 - See Countermeasures Through </h1>
                    <p></p>
                </div>
            </div>
        )
    }
}