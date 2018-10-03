import React, { Component } from 'react';
import './css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';

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
        fetch('api/Project/GetProjectAsync?id=' + this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="usa-width-one-sixth">
                    <h1 className="usa-heading">Pre-Event Planning Overview</h1>
                </div>
                <div className="usa-width-one-sixth">
                    <h1 className="usa-heading">Pre-Event Preperation Overview</h1>
                </div>
                <div className="usa-width-one-sixth">
                    <h1 className="usa-heading">Event Execution Overview</h1>
                </div>
                <div className="usa-width-one-sixth">
                    <h1 className="usa-heading">Post-Event Implementation Overview</h1>
                </div>
                <div className="usa-width-one-sixth">
                    <h1 className="usa-heading">Post-Event Follow Up Overview</h1>
                </div>
            </div>
        );
    }
}