import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class PostEventImplementationOverview extends Component {

    displayName = PostEventImplementationOverview.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> Post Event Implementation Overview </h1>
                    <p></p>
                </div>
            </div>
        )
    }
}