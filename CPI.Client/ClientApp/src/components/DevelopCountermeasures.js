import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { Post } from "../REST";

export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = {
            project: {}, loading: true, rootCauses: [], newCountermeasures: [] 
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, rootCauses: data.RootCauses, newCountermeasures: [] });
            });
    }

    handleAdd(event) {
        var tempRootCauses = this.state.rootCauses;
        var tempNewCountermeasures = this.state.newCountermeasures;
        var indexToUpdate = parseInt(event.target.id);

        tempRootCauses[indexToUpdate].Countermeasures.push(this.state.newCountermeasures[indexToUpdate]);
        tempNewCountermeasures[indexToUpdate] = "";
        this.setState({ rootCauses: tempRootCauses, newCountermeasures: tempNewCountermeasures });
    }

    handleDelete(event) {
        var tempCauses = this.state.rootCauses;
        var cause = parseInt(event.target.id);
        var countermeasure = parseInt(event.target.name);
        tempCauses[cause].Countermeasures.splice(countermeasure, 1);
        this.setState({ rootCauses: tempCauses });
    }

    handleSave() {
        var tempProj = this.state.project;
        tempProj.RootCauses = this.state.rootCauses;
        this.setState({ project: tempProj });
        Post(this.state.project, "Project", "UpdateProject");
    }

    handleChange(event) {
        var tempCauses = this.state.rootCauses;
        var tempNewCountermeasures = this.state.newCountermeasures;
        var changedID = parseInt(event.target.id);

        if (event.target.name === "new") {
            tempNewCountermeasures[changedID] = event.target.value;
            this.setState({ newCountermeasures: tempNewCountermeasures }); 
        } else {
            tempCauses[parseInt(event.target.id)].Countermeasures[parseInt(event.target.name)] = event.target.value;

            this.setState({ rootCauses: tempCauses });
        }
    }

    render() {
        if (this.state.loading) {
            return (<div style={{ left: '50vw', top: '50vh', position: 'absolute' }}>Loading Data</div>);
        } else {
            return (
                <div className="paragraph">
                    <h1> PPSM Step 5 - Develop Countermeasures </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop countermeaures for each root cause using an appropriate CPI principle</h3>
                    </div>
                    <div className="flexbox">
                        {/*STINES PLZ FIX*/this.state.rootCauses.map((Cause, i) => (
                                <div>
                                    <label>RC{i + 1}:{Cause.Description}</label>
                                    <table>
                                            <tbody>
                                                {Cause.Countermeasures.map((Measure, j) => (
                                                        <tr>
                                                            <td>CM{j + 1}</td>
                                                <td><input id={i} name={j} value={Measure} onChange={this.handleChange} /></td>
                                                <td><button id={i} name={j} onClick={this.handleDelete}>X</button></td>
                                                        </tr>
                                                            )
                                                        )
                                                }
                                        <tr>
                                            <td>CM{Cause.Countermeasures.length + 1}</td>
                                            <td><input id={i} placeholder="x" name="new" value={this.state.newCountermeasures[i]} onChange={this.handleChange} /></td>
                                            <td><button style={{ float: "right" }} id={i} onClick={this.handleAdd}>+</button></td>
                                        </tr>
                                            </tbody>
                                    </table>
                                
                                </div>
                            )
                        )}
                    </div>

                    <button onClick={this.handleSave}>Yeet</button>
                </div>
            );
        }
    }
}