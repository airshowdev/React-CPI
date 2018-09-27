import React, { Component } from 'react';
import './css/uswds.css';


export class Projects extends Component {
    displayName = Projects.name

    constructor(props) {
        super(props);
        this.state = { project: [], loading: true };


        fetch('api/Project/AllProjectsAsync')
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }

    static renderProjectData(project) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map(project =>
                        <tr key={project.ID}>
                            <td>{project.ID}</td>
                            <td>{project.Name}</td>
                            <td>{project.Creator}</td>
                            <td>{project.Unit}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : Projects.renderProjectsTable(this.state.project);

        return (
            <div>
                <h1>Pulling Project Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}