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
        const values = querystring.parse(this.props.location.search);
        const id = values.id;

        console.log(id);

        fetch('api/Project/GetProjectAsync?id=' + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="usa-width-one-fifth">
                    <h1>Pre-Event Planning Overview</h1>
                </div>
                <div className="usa-width-one-fifth">
                    <h1>Pre-Event Preperation Overview</h1>
                </div>
                <div className="usa-width-one-fifth">
                    <h1>Event Execution Overview</h1>
                </div>
                <div className="usa-width-one-fifth">
                    <h1>Post-Event Implementation Overview</h1>
                </div>
                <div className="usa-width-one-fifth">
                    <h1>Post-Event Follow Up Overview</h1>
                </div>
            </div>
        );
    }
    


}