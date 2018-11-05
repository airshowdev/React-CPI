﻿import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Post } from '../REST';

export class DetermineRootCause extends Component {

    displayName = DetermineRootCause.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, rootCauses: [], tempCauseDescription: "", loading: true};
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, rootCauses: data.RootCauses });
            });
    }

    handleAdd() {
        if (this.state.tempCauseDescription !== "") {
            var tempCauses = this.state.rootCauses;
            tempCauses.push({ Description: this.state.tempCauseDescription });
            this.setState({ rootCauses: tempCauses, tempCauseDescription: "" });
        }
    }
    
    handleEdit(event) {

        var tempCauses = this.state.rootCauses;

        tempCauses[event.target.id].Description = event.target.value;

        this.setState({ rootCauses: tempCauses });
    }

    async handleSubmit() {
        if (this.state.tempCauseDescription !== "") {
            alert("Please add or clear the current entry");
        } else {
            var tempProject = this.state.project;
            tempProject.RootCauses = this.state.rootCauses;
            Post(this.state.project, "Project", "UpdateProject");
        }
    }

    handleDelete(event) {
        var tempCauses = this.state.rootCauses;
        tempCauses.splice(event.target.id, 1);
        this.setState({ rootCauses: tempCauses });
    }

    render(project) {
        if (this.state.loading) {
            return (<div style={{ left: '50vw', top: '50vh', position: 'absolute' }}>Loading Data</div>);
        } else {
            return (
                <div className="paragraph">
                    <h1> PPSM Step 4 - Determine Root Cause </h1>
                    <div style={{ textAlign: "left", margin: "20px", border: "solid 1px", width: "15vw", paddingLeft: "5px", backgroundColor: "rgba(0, 113, 188, 0.8)", color: "white" }}>
                        <b>4. Determine Root Cause</b>
                        <ul className="root-cause-list">
                            <li style={{ marginTop: "-10px" }}>5 Whys</li>
                            <li>Brainstorming</li>
                            <li>Pareto</li>
                            <li>Affinity</li>
                            <li>Fishbone</li>
                            <li>Control Charts</li>
                        </ul>
                    </div>
                    <div>
                        <table className="root-cause-table" >
                            <tbody>
                                {this.state.rootCauses.map((Cause, i) => (
                                    <tr>
                                        <td style={{ width: "14em" }}>Root Cause {i + 1}</td>
                                        <td style={{ padding: "0px" }}><input id={i} type="text" placeholder="x" onChange={this.handleEdit} value={Cause.Description} /></td>
                                        <td><button id={i} onClick={this.handleDelete}>Delete</button></td>
                                    </tr>))}
                                <tr>
                                    <td style={{ width: "14em" }}>Root Cause {this.state.rootCauses.length + 1}</td>
                                    <td style={{ padding: "0px" }}><input id="temp" type="text" placeholder="x" value={this.state.tempCauseDescription} onChange={(event) => this.setState({ tempCauseDescription: event.target.value })} /></td>
                                    <td><button onClick={this.handleAdd}>Add</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>

                        <button onClick={this.handleSubmit}>Save Changes</button>
                    </div>
                    <div>
                        <p>CHART HERE</p>
                    </div>
                </div>
            )
        }
    }
}