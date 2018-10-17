﻿import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class ProcessWalk extends Component {

    displayName = ProcessWalk.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Initial Process Walk </h1>
                <p> The initial process walk (also referred to as *gemba) provides the Facilitator, Team Leader and Process Owner valuable insights into the process.  Use this time to familiarize yourselves with the workcenter under study including the employees and layout of the facility.  The initial walk may also indicate the types of tools you require for the team process walk.  Applicable tools include 5S, 7 wastes, and spaghetti chart (just to name a few).</p>
            </div>
        )
    }
}