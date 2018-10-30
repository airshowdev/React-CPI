import React, { Component } from 'react';
import './css/uswds.css';
import { NavButtons } from './NavButtons';
import DataHandler from './js/DataHandler';

export class ProjectInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { project: {}, loading: true, dataHandler: new DataHandler() };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Post = this.Post.bind(this);
    }

    componentDidMount() {
        //let newProject = {};
        //console.log(this.props.match.params.id);
        //newProject = await this.state.dataHandler.getProjectInfo(this.props.match.params.id, this)

        //console.log(newProject);
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
			.then(data =>  {
					this.setState({ project: data, loading: false });
				} 
            );
    }


    handleUpdate(event) {
        var stateProject = this.state.project;
        switch (event.target.id) {
            case "Name":
                stateProject.Name = event.target.value;
                break;
            case "Base":
                stateProject.Base = event.target.value;
                break;
			case "Unit":
                stateProject.Unit = event.target.value;
				break;
            case "Evaluators":
                stateProject.Evaluators = event.target.value.split('\n');
                break;
            case "Type":
                stateProject.DataCollection.Type = event.target.value;
                break;
			case "Creator":
				stateProject.Creator = event.target.value;
                break;
            default:
                break;
        }
        this.setState({ project: stateProject });
    }

    async Post(data, controller, action) {
        return fetch('api/' + controller + '/' + action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(Response =>
            alert(JSON.stringify(Response.body.json()))
        );
    }

    handleSubmit() {
        this.Post(this.state.project, "Project", "UpdateProject").then(data => console.log(JSON.stringify(data))).catch(error => console.log(error));
        
    }

    
    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
			return (
				<div>
					<NavButtons next="ProjectOverview" previous="ProjectInfo" projectId={this.props.match.params.id} />
                <div id="projectInfo" >
                    <div className="usa-grid" style={{ float: 'left', margin: 'auto' }} >
                        <div className="usa-width-one-half">
                            <label htmlFor="ID">ID</label>
                            <input id="ID" name="ID" type="text" defaultValue={this.state.project._id} />
                            <label htmlFor="Name">Name</label>
                            <input id="Name" name="Name" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Name} />
                            <label htmlFor="Base">Base</label>
                            <input id="Base" name="Base" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Base} />
                            <label htmlFor="Unit">Unit</label>
                            <input id="Unit" name="Unit" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Unit} />
								{/*<label htmlFor="Type">Type</label>
							<input id="Type" name="Type" type="text" placeholder="Not Defined" value={this.state.project.DataCollection.Type || ""} /> */}
                        </div>
                        <div className="usa-width-one-half" style={{ float: 'right', margin: 'auto' }}>
								
							<label htmlFor="Creator">Creator</label>
							<input id="Creator" name="Creator" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Creator} />
                            <label htmlFor="Evaluators">Evaluators</label>
								<textarea id="Evaluators" name="Evaluators" onChange={this.handleUpdate} value={this.state.project.Evaluators.join('\n')} />
                          {/*  <label htmlFor="Champion">Champion</label>
                            <input id="Champion" name="Champion" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Champion.Name} />
                            <label htmlFor="TeamLead">TeamLead</label>
                            <textarea id="TeamLead" name="TeamLead" type="text" placeholder="Not Defined" onChange={this.handleUpdate}  value={this.state.project.TeamLeads.join("\n")} />
								<label htmlFor="Mentor">Mentor</label>
								<input id="Mentor" name="Mentor" type="text" onChange={this.handleUpdate} value={this.state.project.Mentor} /> */}
                                <button id="Submit" onClick={this.handleSubmit}>Save Changes</button>
                        </div>
                        </div>
						</div>
				</div>
            );
        }
    }
}