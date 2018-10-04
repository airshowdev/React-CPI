import React, { Component } from 'react';
import './css/uswds.css';
import REST, { Post } from '../REST';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { ProjectOverview } from './ProjectOverview';
import { SideNav } from './SideNav';

export class Project extends Component {

    static renderSideNav(project) {
        return <SideNav />;
    }

    static renderProject(project) {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="usa-grid">
                    <div className="usa-width-one-half">
                        <label htmlFor="ID">ID</label>
                        <input id="ID" name="ID" type="text" value={project.id}/>
                        <label htmlFor="Name">Name</label>
                        <input id="Name" name="Name" type="text" value={project.Name} />
                        <label htmlFor="Base">Base</label>
                        <input id="Base" name="Base" type="text" value={project.Base} />
                        <label htmlFor="Unit">Unit</label>
                        <input id="Unit" name="Unit" type="text" value={project.Unit} />
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
                        <button id="Submit">Save Changes</button>
                    </div>
                </div>
            </form>
        );
    }

    displayName = Project.name

    constructor(props) {
        super(props);
        this.state = { project: {} };
        this.handleClick = this.handleSubmit.bind(this);     
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data });
            });
    }

    handleSubmit(event) {
        event.PreventDefault();
        const form = event.target;
        const data = new FormData(event);

        for (let name of data.keys()) {
            data.set(name, form.elements[name]);
        }

        REST.Post( data, "Project", "UpdateProject");
    }

    render() {
        let contents = <div>yahYEET</div>;
        if (this.props.match.params.Page !== null) {
            switch (this.props.match.params.Page) {
                case "ProjectOverview":
                    contents = <div />/*<ProjectOverview Page={this.props.match.params} id={this.props.match.params}/>*/;
                    break;
                case "InitialDataCollection":
                    contents = <div />;
                    break;
            }
        }
        else
        {
            contents = Project.renderProject(this.state.project);
        }
       
        return (
            <div>
                <div className="usa-grid">
                    {contents}
                </div>
            </div>
        );
    }
}