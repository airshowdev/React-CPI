import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { Post } from "../REST";
import { NavButtons } from './NavButtons'
import DataHandler from './js/DataHandler';


export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = { loading: true, rootCauses: [], newCountermeasures: [] 
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    async componentDidMount() {
        let dHandler = new DataHandler();
        let response = await dHandler.getProject(this.props.match.params.id);

        if (response.successful) {
            let tempNewCountermeasures = [];
            response.data.RootCauses ? response.data.RootCauses.map(x => tempNewCountermeasures.push({ Description: "" })) : tempNewCountermeasures = [];
            this.setState({ loading: false, rootCauses: response.data.RootCauses ? response.data.RootCauses : [], newCountermeasures: tempNewCountermeasures });
        } else {
            alert("Error pulling data");
        }
    }

    async handleAdd(event) {
        
        var tempRootCauses = this.state.rootCauses;

        var tempNewCountermeasures = this.state.newCountermeasures;

        var indexToUpdate = parseInt(event.target.id);

        tempRootCauses[indexToUpdate].Countermeasures.push(tempNewCountermeasures[indexToUpdate]);
        tempNewCountermeasures[indexToUpdate] = { Description: "" };
        this.setState({ rootCauses: tempRootCauses, newCountermeasures: tempNewCountermeasures });
    }

    handleDelete(event) {
        var tempCauses = this.state.rootCauses;
        var cause = parseInt(event.target.id);
        var countermeasure = parseInt(event.target.name);
        tempCauses[cause].Countermeasures.splice(countermeasure, 1);
        this.setState({ rootCauses: tempCauses });
    }

    async handleSave() {
        let dHandler = new DataHandler();
        let sendData = {
            RootCauses: this.state.rootCauses
        }
        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);

        if (!response.successful) {
            alert('There was an error:  ' + response);
        } 

    }

     //if (this.state.newCountermeasures.length !== this.state.rootCauses.length) {
        //    var tempCountermeasures = [];
        //    for (var i = 0; i < this.state.rootCauses.length; i++) {
        //        tempCountermeasures.push({ Description: "" });
        //    }
        //    this.setState({ newCountermeasures: tempCountermeasures });
        //}

    handleChange(event) {
       
        var tempCauses = this.state.rootCauses;

        var tempNewCountermeasures = this.state.newCountermeasures;

        var changedID = parseInt(event.target.id);

        if (event.target.name === "new") {
            tempNewCountermeasures[changedID] = { Description: event.target.value };
            this.setState({ newCountermeasures: tempNewCountermeasures });
        } else {
            tempCauses[parseInt(event.target.id)].Countermeasures[parseInt(event.target.name)].Description = event.target.value;
            this.setState({ rootCauses: tempCauses });
        }
    }

    render() {
        if (this.state.loading) {
            return (<div style={{ left: '50vw', top: '50vh', position: 'absolute' }}>Loading Data</div>);
        } else {
            return (
                <div>
                    <NavButtons next="SeeCountermeasuresThrough" previous="DetermineRootCause" projectId={this.props.match.params.id} />
                <div className="paragraph">
                    <h1> PPSM Step 5 - Develop Countermeasures </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop countermeaures for each root cause using an appropriate CPI principle</h3>
                    </div>
                    <div className="flexbox">
                        {this.state.rootCauses.map((Cause, i) => (
                            <div style={{ minWidth: "300px", margin: "5vw" }}>
                                    <label>RC{i + 1}:{Cause.Description}</label>
                                    <table>
                                            <tbody>
                                                {Cause.Countermeasures.map((Measure, j) => (
                                                        <tr>
                                                <td>CM{j + 1}</td>
                                                <td><input id={i} name={j} value={Measure.Description} onChange={this.handleChange} /></td>
                                                <td><button id={i} name={j} onClick={this.handleDelete}>X</button></td>
                                                        </tr>
                                                            )
                                                        )
                                                }
                                        <tr>
                                            <td>CM{Cause.Countermeasures.length + 1}</td>
                                            <td><input id={i} placeholder="x" name="new" value={this.state.newCountermeasures[i] ? this.state.newCountermeasures[i].Description : ""} onChange={this.handleChange} /></td>
                                            <td><button style={{ float: "right" }} id={i} onClick={this.handleAdd}>+</button></td>
                                        </tr>
                                            </tbody>
                                    </table>
                                
                                </div>
                            )
                        )}
                    </div>

                    <button onClick={this.handleSave}>Save</button>
                    </div>
                    </div>
            );
        }
    }
}