import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';
import querystring from 'query-string';

export class Project extends Component {
    static renderProject(project) {
        return (
            <div className="usa-grid">
                <div className="usa-width-one-half">
                    <label htmlFor="ID">ID</label>
                    <input id="ID" name="ID" type="text" value={project.id} />
                    <label htmlFor="Name">Name</label>
                    <input id="Name" name="Name" type="text" value={project.Name}/>
                    <label htmlFor="Base">Base</label>
                    <input id="Base" name="Base" type="text" value={project.Base}/>
                    <label htmlFor="Unit">Unit</label>
                    <input id="Unit" name="Unit" type="text" value={project.Unit}/>
                    <label htmlFor="Evaluators">Evaluators</label>
                    <textarea id="Evaluators" name="Evaluators" value={project.Evaluators.join('\n')} />
                </div>
                <div className="usa-width-one-half">
                    <label htmlFor="Template">Template</label>
                    <input id="Template" name="Template" type="text" />
                    <label htmlFor="Creator">Creator</label>
                    <input id="Creator" name="Creator" type="text" />
                    <label htmlFor="Champion">Champion</label>
                    <input id="Champion" name="Champion" type="text" />
                    <label htmlFor="TeamLead">TeamLead</label>
                    <input id="TeamLead" name="TeamLead" type="text" />
                    <label htmlFor="Mentor">Mentor</label>
                    <input id="Mentor" name="Mentor" type="text" />
                </div>
            </div>
        )
    }

    displayName = Project.name


    constructor(props) {
        super(props);
        this.state = { project: {}, loading: true };
    }

    componentDidMount() {
        const values = querystring.parse(this.props.location.search);
        const id = values.id;

       //const { id } = this.props.match.params;

        fetch('api/Project/GetProjectAsync/id?='+ id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
                console.log("WVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWVWV" + data.toString())
            });
    }



    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : Project.renderProject(this.state.project);

        return (
            <div>
                <h1>Pulling Project Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}