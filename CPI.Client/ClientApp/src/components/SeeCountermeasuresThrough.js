import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import PropTypes from 'prop-types';

import DataHandler from './js/DataHandler';

import { Post } from '../REST';
import { NavButtons } from './NavButtons';


export class SeeCountermeasuresThrough extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    displayName = SeeCountermeasuresThrough.name;

    constructor(props, context) {
        super(props, context)
        this.state = { loading: true, rootCauses: [] };

        this.handleSave = this.handleSave.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    async componentDidMount() {

        let dHandler = new DataHandler();
        let response = await dHandler.getProject(this.props.match.params.id);

        if (response.successful) {
            this.setState({ rootCauses: response.data.RootCauses, loading: false });
        } else {
            alert('error pulling data');
            this.setState({ loading: false });
        }   

    }

    async handleSave() {
        this.setState({loading: true}) 
        let dHandler = new DataHandler();
        let sendData = {
            RootCauses: this.state.rootCauses
        }
        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);
        response.successful ? console.log('saved successfully', response) : alert('error saving data')
        this.setState({ loading: false });

    }

    handleUpdate(event) {
        let rcIndex = parseInt(event.target.id.split(',')[0]);
        let cmIndex = parseInt(event.target.id.split(',')[1]);
        let tempRootCauses = this.state.rootCauses;
        switch (event.target.name) {
            case "Description":
                tempRootCauses[rcIndex].Countermeasures[cmIndex].Description = event.target.value;
                break;
            case "ActionOfficer":
                tempRootCauses[rcIndex].Countermeasures[cmIndex].ActionOfficer = event.target.value;
                break;
            case "Date":
                tempRootCauses[rcIndex].Countermeasures[cmIndex].Date = event.target.value;
                break;
            case "Status":
                tempRootCauses[rcIndex].Countermeasures[cmIndex].Status = event.target.value;
                break;
            default:
                break;
        }
        this.setState({ rootCauses: tempRootCauses });
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>
        } else {
            return (
                <div className="usa-grid">
                    <div className="paragraph">
                        <h1> PPSM Step 6 - See Countermeasures Through </h1>
                        <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                            <h3 style={{ marginTop: "10px" }}>Develop an action plan to see countermeasures through</h3>
                        </div>
                        <div>
                            <table className="see-countermeasures-through-table">
                                <thead>
                                    <th style={{ minWidth: "400px" }}>Task</th>
                                    <th>Action Officer</th>
                                    <th >Date</th>
                                    <th>Status</th>
                                </thead>
                                <tbody>
                                    {this.state.rootCauses.map((el, i) => 
                                        el.Countermeasures.map((cm, j) =>
                                            (<tr>
                                                <td style={{ padding: "0px" }}><input type="text" name="Description" id={i+','+j} placeholder="x" onChange={this.handleUpdate} value={cm.Description} /></td>
                                                <td style={{ padding: "0px" }}><input type="text" name="ActionOfficer" id={i + ',' + j} placeholder="x" onChange={this.handleUpdate}value={cm.ActionOfficer} /></td>
                                                <td style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }}><input type="text" name="Date" id={i + ',' + j} placeholder="x" onChange={this.handleUpdate} value={cm.Date} /></td>
                                                <td style={{ padding: "0px" }}><input type="text" id={i + ',' + j} placeholder="x" name="Status" onChange={this.handleUpdate}value={cm.Status} /></td>
                                            </tr> )
                                        ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleSave}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )
        }

    }
}