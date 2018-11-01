import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons';
import DataHandler from '../js/DataHandler';

export class MeetWithChampion extends Component {

    displayName = MeetWithChampion.name;

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context)
        this.state = {
            WingDirectorate: "",
            Unit: "",
            Champion: {},
            ProcessOwner: "",
            TeamLeads: [],
            Facilitators: [],
            Facilitator: "",
            loading: true
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        var dHandler = new DataHandler();
        let data = await dHandler.getProject(this.props.match.params.id);
        this.setState({ project: data,  loading: false });
            
    }

    handleSave() {
        this.setState({ loading: true });
        let dHandler = new DataHandler();
       
        var sendData = {
            WingDirectorate: this.state.WingDirectorate,
            Unit: this.state.Unit,
            Champion: this.state.Champion,
            ProcessOwner: this.state.ProcessOwner,
            TeamLeads: this.state.TeamLeads,
            Facilitators: this.state.Facilitators,
            Facilitator: this.state.Facilitator,
        }
        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);
        if (response.status !== 200) {
            alert("There was an error saving changes. Please try again or contact a system administrator")
        } else {
            this.setState({ loading: false });
        }
    }

    handleUpdate(event) {
        var tempChampion = this.state.Champion;
        switch (event.target.id) {
            case "WingDirectorate":
                this.setState({ WingDirectorate: event.target.value })
                break;
            case "Unit":
                this.setState({ Unit: event.target.value });
                break;
            case "ChampionName":
                tempChampion.Name = event.target.value;
                this.setState({ Champion: tempChampion });
                break;
            case "ProcessOwner":
                this.setState({ ProcessOwner: event.target.value });
                break;
            case "TeamLeads":
                this.setState({ TeamLeads: event.target.value.split('\n') });
                break;
            case "Facilitators":
                this.setState({ Facilitators: event.target.value.split('\n') });
                break;
            case "Facilitator":
                this.setState({ Facilitator: event.target.value });
                break;
            case "ChampionGoal":
                tempChampion.Goal = event.target.value;
                this.setState({ Champion: tempChampion });
                break;
            default:
                break;
        }
    }


    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <div>
                    <NavButtons next="MeetWithTeamLeader" previous="RequestMentor" title="Meet With Champion" projectId={this.props.match.params.id} />
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
                    </div>
            );
        }
    }
}