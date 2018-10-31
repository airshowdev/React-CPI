import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { NavButtons } from './NavButtons';
import { Post } from '../REST';

export class StandardizeSuccessfulProcess extends Component {
    
    displayName = StandardizeSuccessfulProcess.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true, Processes: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    componentDidMount() {
        fetch("api/Project/GetProjectAsync?id=" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, Processes: data.SSProcesses });
            });
    }

    handleChange(event) {
        var tempProcesses = this.state.Processes;
        var id = parseInt(event.target.id);
        var value = event.target.value;
      
        switch (event.target.name) {
            case "Item":
                tempProcesses[id].Item = value;
                break;
            case "POC":
                tempProcesses[id].POC = value;
                break;
            case "Date":
                tempProcesses[id].Date = value;
                break;
            case "Status":
                tempProcesses[id].Status = value;
                break;
        }

        this.setState({ Processes: tempProcesses });
    }

    handleSave() {
        var tempProject = this.state.project;

        tempProject.SSProcesses = this.state.Processes;

        this.setState({ project: tempProject });
        Post(this.state.project, "Project", "UpdateProject");
    }

    render(project) {
        return (
            <div>
                <NavButtons previous="ConfirmResults" projectId={this.props.match.params.id} />
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 8 - Standardize Successful Process </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop an action plan to see countermeasures through</h3>
                    </div>
                    <div style={{ textAlign: "left", margin: "5px" }}>
                        <p>&emsp; &emsp;There are many strategies for solidifying the new processSome Break old process to eliminate possibility of returning to old way of doing business, if possible Develop and sustain performance measures. Implement standard work, where possible Set up future revisit dates to check if improvements have held Put “C” in CPI by revisiting “Parking Lot” for potential next round of CPI Take on scientific method of inquiry mentality demonstrated by repeated experimentation Facilitate replication of success</p>
                    </div>
                    <div>
                        <table className="standardize-process-table">
                            <thead>
                                <th style={{ minWidth: "400px" }}>Task</th>
                                <th>POC</th>
                                <th >Date</th>
                                <th>Status</th>
                            </thead>
                                <tbody>
                                    {this.state.Processes.map((x, i) => 
                                        (<tr>
                                            <td style={{ padding: "0px" }}><input id={i} name="Item" type="text" placeholder="x" value={x.Item} onChange={this.handleChange} /></td>
                                            <td style={{ padding: "0px" }}><input id={i} name="POC" type="text" placeholder="x" value={x.POC} onChange={this.handleChange} /></td>
                                            <td style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }}><input id={i} name="Date" type="text" placeholder="x" value={x.Date} onChange={this.handleChange} /></td>
                                            <td style={{ padding: "0px" }}><input id={i} name="Status" type="text" placeholder="x" value={x.Status} onChange={this.handleChange} /></td>
                                        </tr>)
                                    )}
                            </tbody>
                            </table>
                            <button onClick={this.handleSave}>Save</button>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}