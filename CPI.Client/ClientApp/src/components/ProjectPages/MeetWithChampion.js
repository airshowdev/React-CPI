import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { Post } from '../../REST';

export class MeetWithChampion extends Component {

    displayName = MeetWithChampion.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, /*WingDirectorate: "", Unit: "", Champion: "", ProcessOwner: "", TeamLeads: [], Facilitators: [], Facilitator: "", CahmpionGoal: "", */loading: true };

        this.handleSave = this.handleSave.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, /*WingDirectorate: data.WingDirectorate, Unit: data.Unit, Champion: data.Champion.Name, ProcessOwner: data.ProcessOwner, TeamLeads: data.TeamLeads, Facilitators: data.Facilitators, Facilitator: data.Facilitator, CahmpionGoal: data.Champion.Goal,*/ loading: false });
            });
    }

    handleSave() {
        alert(JSON.stringify(this.state.project));
        Post(this.state.project, "Project", "UpdateProject");
        alert("changes saved");
    }

    handleUpdate(event) {
        var stateProject = this.state.project;
        switch (event.target.id) {
            case "WingDirectorate":
                stateProject.WingDirectorate = event.target.value;
                break;
            case "Unit":
                stateProject.Unit = event.target.value;
                break;
            case "ChampionName":
                stateProject.Champion.Name = event.target.value;
                break;
            case "ProcessOwner":
                stateProject.ProcessOwner = event.target.value;
                break;
            case "TeamLeads":
                stateProject.TeamLeads = event.target.value.split('\n');
                break;
            case "Facilitators":
                stateProject.Facilitators = event.target.value.split('\n');
                break;
            case "Facilitator":
                stateProject.Facilitator = event.target.value;
                break;
            case "ChampionGoal":
                stateProject.Champion.Goal = event.target.value;
                break;
            default:
                break;
        }
        this.setState({ project: stateProject });
    }


    render(project) {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <div className="paragraph" style={{ border: "hidden", minWidth: "687px" }}>
                    <h1> Meet With Champion </h1>
                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <tbody>
                            <tr>
                                <td><b>Activity</b></td>
                                <td><b>Inputs From Activity</b></td>
                            </tr>
                            <tr>
                                <td>
                                    <p><u>Meet with Champion</u><br />Obtain "Buy-In"</p>
                                    <div>
                                        <button>Click to Open Directions</button>
                                    </div>
                                    <div>
                                        <button>Meeting With <br />Champion</button>
                                    </div>
                                </td>
                                <td style={{ padding: "0px" }}>
                                    <table className="column-input-box">
                                        <tbody>
                                            <tr>
                                                <td>Wing/Directorate:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="WingDirectorate" value={this.state.project.WingDirectorate} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>Unit:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="Unit" value={this.state.project.Unit} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>Champion:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="ChampionName" value={this.state.project.Champion ? this.state.project.Champion.Name : ""} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>Process Owner:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="ProcessOwner" value={this.state.project.ProcessOwner} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>Event Team Leader(s):</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="TeamLeads" value={this.state.project.TeamLeads ? this.state.project.TeamLeads.map(TeamLead => TeamLead + "\n") : ""} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>Facilitator(s)-in-Training:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="Facilitators" value={this.state.project.Evaluators ? this.state.project.Evaluators.map(Evaluator => Evaluator + "\n") : ""} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>*Facilitator/Trainer:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="Facilitator" value={this.state.project.Facilitator} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr>
                                                <td>CHAMPION GOAL:</td>
                                                <td style={{ padding: "0px" }}><input type="text" placeholder="x" id="ChampionGoal" value={this.state.project.Champion ? this.state.project.Champion.Goal : ""} onChange={this.handleUpdate} /></td>
                                            </tr>
                                            <tr style={{ border: 'none' }}><td></td><td><button className="usa-button" style={{ float: 'right' }} onClick={this.handleSave}>Save</button></td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            );
        }
    }
}