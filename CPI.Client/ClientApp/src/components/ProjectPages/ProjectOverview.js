import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons'

export class ProjectOverview extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    displayName = ProjectOverview.name

    constructor(props, context) {
        super(props, context);
        this.state = { project: {}, loading: true };
    }

	componentDidMount() {
		fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }

    render() {
		return (
			<div>
				<NavButtons next="DataCollection" previous="ProjectInfo" projectId={this.props.match.params.id}/>
            <div className="usa-grid">
                <div className="grid-with-border">
                    <h1 className="usa-heading">Pre-Event Planning Overview</h1>
                        <h2>T-3 Weeks</h2>
                            <button className="usa-button">Initiate Data Collection</button>
                            <button className="usa-button">Event Go/No Go Decision</button>
                            <button className="usa-button">Request Mentor</button>
                            <button className="usa-button">Meet With Champion</button>
                            <button className="usa-button">Meet with Team Leader</button>
                            <button className="usa-button">Draft Charter</button>
                </div>
                <div className="grid-with-border">
                    <div className="grid-with-border">
                    <h1>Pre-Event Preperation Overview</h1>                    
                    <h2>T-2 Weeks</h2>
                            <button className="usa-button">Process Walk</button>
                            <button className="usa-button">Finalize Charter</button>
                            <button className="usa-button">Review KPI</button>
                            <button className="usa-button">Identify Event Location</button>
                            <button className="usa-button">Distribute Event Notification and Charter</button>
                            <button className="usa-button">Schedule In/Brief Out Brief</button>
                        </div>
                        <h2>T-1 Weeks</h2>
                            <button className="usa-button">Team Process Walk</button>
                            <button className="usa-button">Team Kick-Off and Awareness Training</button>
                            <button className="usa-button">Validate Data Collection</button>
                            <button className="usa-button">Obtain Supplies</button>
                            <button className="usa-button">Event Go/No-Go</button>
                            <button className="usa-button">Room Set-Up</button>
                </div>
                <div className="grid-with-border">
                    <h1 className="usa-heading">Event Execution Overview</h1>
                        <h2>T-0 Weeks</h2>
                            <button className="usa-button">Clarify and Validate the Problem</button>
                            <button className="usa-button">Identify Performance Gaps</button>
                            <button className="usa-button">Set Improvement Target</button>
                            <button className="usa-button">Determine Root Cause(s)</button>
                            <button className="usa-button">Develop Countermeasures</button>
                </div>
                <div className="grid-with-border">
                    <h1 className="usa-heading">Post-Event Implementation Overview</h1>
                        <h2>T+90 Days</h2>
                            <button className="usa-button">See Countermeasures Through</button>
                            <button className="usa-button">Validate Results</button>
                </div>
                <div className="grid-with-border">
                    <h1 className="usa-heading">Post-Event Follow Up Overview</h1>
                        <h2>T+120 Days</h2>
                            <button className="usa-button">Standardize Successful Process</button>
                </div>
				</div>
				</div>
        );
    }
}