import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';

export class ProjectInfo extends Component {
    

    constructor(props) {
        super(props);
        this.state = { project: {}, loading: true };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	componentDidMount() {
		console.log(this.props.match.params.id);
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
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
            case "Champion":
                stateProject.Champion.Name = event.target.value;
                break;
            case "Teamlead":
                stateProject.TeamLeads = event.target.value.split('\n');
                break;
            case "Mentor":
                stateProject.Name = event.target.value;
                break;
            default:
                break;
        }
        this.setState({ project: stateProject });
    }

    handleSubmit() {
        /*var jsonToSubmit = {
            id: project.id,
            changes: {
                Name: this.state.project.Name,
                Base: this.state.project.Base,
                Unit: this.state.project.Unit,
                Evaluators: this.state.project.Evaluators,
                DataCollection: this.state.project.DataCollection,
                ChampionName: this.state.project.Champion.Name,
                TeamLead: this.state.project.TeamLeads,
                Mentor: this.state.project.TeamLead
                }
            }
        }*/
        alert(JSON.stringify(this.state.project));
        Post(this.state.project, "Project", "UpdateProject");
    }

    
    render() {

        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <form id="projectInfo" onSubmit={this.handleSubmit} >
                    <div className="usa-grid" style={{ float: 'left', margin: 'auto' }} >
                        <div className="usa-width-one-half">
                            <label htmlFor="ID">ID</label>
                            <input id="ID" name="ID" type="text" value={this.state.project._id} />
                            <label htmlFor="Name">Name</label>
                            <input id="Name" name="Name" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Name} />
                            <label htmlFor="Base">Base</label>
                            <input id="Base" name="Base" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Base} />
                            <label htmlFor="Unit">Unit</label>
                            <input id="Unit" name="Unit" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Unit} />
                            <label htmlFor="Evaluators">Evaluators</label>
                            <textarea id="Evaluators" name="Evaluators" defaultValue={this.state.project.Evaluators.join('\n')} />
                        </div>
                        <div className="usa-width-one-half" style={{ float: 'right', margin: 'auto' }}>
                            <label htmlFor="Type">Type</label>
                            <input id="Type" name="Type" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.DataCollection.Type} />
                            <label htmlFor="Creator">Creator</label>
                            <input id="Creator" name="Creator" type="text" placeholder="Not Defined" onChange={this.handleUpdate}  value={this.state.project.Creator.Name} />
                            <label htmlFor="Champion">Champion</label>
                            <input id="Champion" name="Champion" type="text" placeholder="Not Defined" onChange={this.handleUpdate} value={this.state.project.Champion.Name} />
                            <label htmlFor="TeamLead">TeamLead</label>
                            <textarea id="TeamLead" name="TeamLead" type="text" placeholder="Not Defined" onChange={this.handleUpdate}  value={this.state.project.TeamLeads.join("\n")} />
                            <label htmlFor="Mentor">Mentor</label>
                            <input id="Mentor" name="Mentor" type="text" value={this.state.project.Mentor} />
                            <button id="Submit">Save Changes</button>
                        </div>
                    </div>
                </form>
            );
        }
    }
}