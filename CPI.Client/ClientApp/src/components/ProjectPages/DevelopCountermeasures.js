import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 5 - Develop Countermeasures </h1>
                <p></p>
            </div>
        )
    }
}