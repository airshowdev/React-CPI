﻿import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class DetermineRootCause extends Component {

    displayName = DetermineRootCause.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 4 - Determine Root Cause </h1>
                <p></p>
            </div>
        )
    }
}