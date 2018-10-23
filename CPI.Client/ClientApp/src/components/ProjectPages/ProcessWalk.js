import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons';

export class ProcessWalk extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    displayName = ProcessWalk.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div>
                <NavButtons next="FinalizeCharter" previous="DraftCharter" projectId={this.props.match.params.projectId} />
            <div className="paragraph">
                <h1> Initial Process Walk </h1>
                <p> The initial process walk (also referred to as *gemba) provides the Facilitator, Team Leader and Process Owner valuable insights into the process.  Use this time to familiarize yourselves with the workcenter under study including the employees and layout of the facility.  The initial walk may also indicate the types of tools you require for the team process walk.  Applicable tools include 5S, 7 wastes, and spaghetti chart (just to name a few).</p>
                </div>
                </div>
        )
    }
}