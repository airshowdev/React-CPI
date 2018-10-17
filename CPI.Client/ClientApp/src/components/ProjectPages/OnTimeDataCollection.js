﻿import { NavButtons } from "../NavButtons";
import React, { Component } from 'react';
import '../css/uswds.css';
import { Post } from '../../REST';
import { DataCollectionStatus } from '../DataCollectionStatus';


export class OnTimeDataCollection extends Component {
    displayName = OnTimeDataCollection.name

    constructor(props) {
        super(props);

        this.state = {
			Elements: [], championGoal: "", Standard: "", Type: "", newElementActual: "", newElementGoal: "", loading: true
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleSave = this.handleSave.bind(this);

        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleActualChange = this.handleActualChange.bind(this);
        this.formatDateActual = this.formatDateActual.bind(this);
        this.formatDateGoal = this.formatDateGoal.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
			.then(data => {
				this.setState({ Elements: data.DataCollection.Elements, loading: false, championGoal: data.Champion.Goal, Type: data.DataCollection.Type, Standard: data.DataCollection.Standard });
            });
    }


    handleEdit(event) {
        if (this.state.newElementGoal || this.state.newElementActual) {
            alert("Please ensure the current entries are empty. Please add or clear current entry.");
        } else {
            var elements = this.state.Elements;
            var spliced = elements.splice(event.target.id, 1);
            var selected = spliced[0];
            this.setState({ newElementGoal: selected.Goal, newElementActual: selected.Actual });
        }
    }
    handleDelete(event) {
        var elements = this.state.Elements;
        elements.splice(event.target.id, 1);
        this.setState({ Elements: elements });
    }
    handleAdd() {
        var elements = this.state.Elements;
        if (this.isDate(this.state.newElementGoal) && this.isDate(this.state.newElementActual)) {
			elements.push({ Goal: this.state.newElementGoal, Actual: this.state.newElementActual });
			this.setState({ Elements: elements });
        } else {
            alert("New element dates are not formatted correctly");
        }
    }
	handleClear() {
		this.setState({ newElementGoal: "", newElementActual: "" });
    }
    
    handleSave() {
        var type = "OnTime";
        var elements = this.state.Elements;
        var postData = {
            _id: this.props.match.params.id,
            Type: type,
            Elements: elements
        };
        alert(JSON.stringify(postData));

        Post(postData, "Project", "UpdateDataCollection");
    }

    metGoal(goal, actual) {
		return Date.parse(goal) >= Date.parse(actual);
    }

    isDate(date) {
        console.log(Date.parse(date));
        return !isNaN(Date.parse(date));
    }

	formatDateActual(event) {
        if (!event.target.value) {
			return;
        } else if (this.isDate(event.target.value)) {
            this.setState({ newElementActual: event.target.value});
        } else {
            alert("Please Enter a valid date for the new element's \"Actual\" value ");
        }
    }

	formatDateGoal(event) {
        if (!event.target.value) {
			return;
        } else if (this.isDate(event.target.value)){
            this.setState({ newElementGoal: event.target.value });
        } else {
            alert("Please Enter a valid date for the new element's \"Goal\" value ");
        }
    }
    handleActualChange(event) {
        this.setState({ newElementActual: event.target.value });
    }
    handleGoalChange(event) {
        this.setState({ newElementGoal: event.target.value });
	}

    render() {
        if (this.state.loading) {
            return (<span>Loading Data</span>);
        } else {
            return (
                <div className="usa-grid">
                    <NavButtons previous="ProjectOverview" title="On-Time Data Collection" next="AnalyzeData" projectId={this.props.match.params.id} />
                    <DataCollectionStatus {...this.state} />
                    <label>*All dates should be formatted as DD-MM-YYYY</label>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Goal Date</th>
                                <th scope="col">Date Recieved</th>
                                <th scope="col">Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.state.Elements.length > 0) ? this.state.Elements.map((x, i) =>
								(<tr key={i} >
									<td>{x.Goal}</td>
									<td>{x.Actual}</td>
									<td>{this.metGoal(x.Goal, x.Actual) ? "On Time" : "Late"}</td>
                                    <td><button id={i} onClick={this.handleDelete}>Delete</button></td>
                                    <td><button id={i} onClick={this.handleEdit}>Edit</button></td>
                                </tr>
                                )) : <div />}
                            <tr>
                                <td className="usa-grid">
                                    <input className="usa-width-one-third" style={{ minWidth: '120px' }} type="text" id="GoalDay" onBlur={this.formatDateGoal}onChange={this.handleGoalChange} value={this.state.newElementGoal} />
                                </td>
                                <td className="usa-grid">
                                    <input className="usa-width-one-third" style={{ minWidth: '120px' }} type="text" onBlur={this.formatDateActual} id="ActualYear" onChange={this.handleActualChange} value={this.state.newElementActual} /></td>
                                <td>{/*this.state.newElementActual.isAfter(this.state.newElementGoal) ? "Fail" : "Success"*/}</td>
                                <td><input type="submit" value="Add" onClick={this.handleAdd} /></td>
                                <td><input type="submit" value="Clear" onClick={this.handleClear} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ float: 'right' }}>
                        <button onClick={this.handleSave}>Save Data</button>
                    </div>
                </div>
            );
        }
    }  
}