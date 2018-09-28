import React, { Component } from 'react';
import './css/uswds.css';
import { withRouter } from "react-router-dom";
import  PropTypes  from 'prop-types';





export class Projects extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    }
    displayName = Projects.name

    constructor(props, context) {
        super(props, context);
        this.state = { project: [], loading: true };
        fetch('api/Project/AllProjectsAsync')
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }
    renderProjectsTable(project) {
        return (
            <form className="usa-forms">
                {project.map(project =>
                    <button ref="button" onClick={() => this.context.router.history.push('/Project/?id=' + project.ID)}>{project.ID}    {project.Name}    {project.Creator}    {project.Unit}</button>
                )}
            </form>
        );
    }
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderProjectsTable(this.state.project);

        return (
            <div>
                <h1>Pulling Project Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
