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
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Project ID</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Creator Name</th>
                                <th scope="col">Associated Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {project.map(project =>(
                            <tr key={project.ID} onClick={() => this.context.router.history.push('/Project/ProjectInfo/' + project.ID)}>
                                <th scope="row">{project.ID}</th>
                                <td>{project.Name}</td>
                                <td>{project.Creator}</td>
                                <td>{project.Unit}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
            </form>
        );
    }
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderProjectsTable(this.state.project);

        return (
            <div>
                <h1>Existing Projects</h1>
                <p></p>
                {contents}
            </div>
        );
    }
}
