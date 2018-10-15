import { NavButtons } from "../NavButtons";
import React, { Component } from 'react';
import '../css/uswds.css';
import { Post } from '../../REST';
import { DataCollectionStatus } from '../DataCollectionStatus';
import 'moment-timezone';

var moment = require('moment');
var dateFormat = "DD-MM-YYYY";

export class OnTimeDataCollection extends Component {
    displayName = OnTimeDataCollection.name

    constructor(props) {
        super(props);

        this.state = {
            Elements: [], championGoal: "", Type: "", newElementGoalDay: "", newElementGoalMonth: "", newElementGoalYear: "", newElementActualDay: "", newElementActualMonth: "", newElementActualYear: "", loading: false
        };

        this.handleGoalDayChange = this.handleGoalDayChange.bind(this);
        this.handleGoalMonthChange = this.handleGoalMonthChange.bind(this);
        this.handleGoalYearChange = this.handleGoalYearChange.bind(this);

        this.handleActualDayChange = this.handleActualDayChange.bind(this);
        this.handleActualMonthChange = this.handleActualMonthChange.bind(this);
        this.handleActualYearChange = this.handleActualYearChange.bind(this);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {/*
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ Elements: data.DataCollection.Elements, loading: false, championGoal: data.Champion.Goal, Type: data.DataCollection.Type });
            });*/
    }

    handleGoalDayChange(event) {
        this.setState({ newElementGoalDay: event.target.value });
    }
    handleGoalMonthChange(event) {
        this.setState({ newElementGoalMonth: event.target.value });
    }
    handleGoalYearChange(event) {
        this.setState({ newElementGoalYear: event.target.value });
    }

    handleActualDayChange(event) {
        this.setState({ newElementActualDay: event.target.value });
    }
    handleActualMonthChange(event) {
        this.setState({ newElementActualMonth: event.target.value });
    }
    handleActualYearChange(event) {
        this.setState({ newElementActualYear: event.target.value });
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
        elements.push({ Goal: this.state.newElementGoal, Actual: this.state.newElementActual });
        this.setState({ Elements: elements, newElementActual: "", newElementGoal: "" });
    }
    handleClear() {

    }
    
    handleSave() {
        var type = "OnTime";
        var elements = this.state.Elements;
        elements.forEach((x) => { x.Actual = this.NVAPercentage(x.NVA, x.VA) });
        var postData = {
            _id: this.props.match.params.id,
            Type: type,
            Elements: elements
        };
        alert(JSON.stringify(postData));

        Post(postData, "Project", "UpdateDataCollection");
    }

    render() {
        if (this.state.loading) {
            return (<span>Loading Data</span>);
        } else {
            return (
                <div className="usa-grid">
                    <NavButtons previous="ProjectOverview" title="On-Time Data Collection" next="AnalyzeData" projectId={this.props.match.params.id} />
                    <DataCollectionStatus {...this.state} />
                    <label>*All dates should be formatted as DD-MM-YYYY e.g. {moment().format("DD-MM-YYYY")}</label>
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
                                    <td>{x.newElementGoalDay}/{x.newElementGoalMonth}/{x.newElementGoalYear}</td>
                                    <td>{x.newElementActualDay}/{x.newElementActualMonth}/{x.newElementActualYear}</td>
                                    <td></td>
                                    <td><button id={i} onClick={this.handleDelete}>Delete</button></td>
                                    <td><button id={i} onClick={this.handleEdit}>Edit</button></td>
                                </tr>
                                )) : <div />}
                            <tr>
                                <td className="usa-grid">
                                    <input className="usa-width-one-third" style={{ maxWidth: '60px' }} type="text" id="GoalDay" onChange={this.handleGoalDayChange} value={this.state.newElementGoalDay} />
                                    <input className="usa-width-one-third" style={{ maxWidth: '60px' }} type="text" id="GoalMonth" onChange={this.handleGoalMonthChange} value={this.state.newElementGoalMonth} />
                                    <input className="usa-width-one-third" style={{ maxWidth: '80px' }} type="text" id="GoalYear" onChange={this.handleGoalYearChange} value={this.state.newElementGoalYear} /></td>
                                <td className="usa-grid">
                                    <input className="usa-width-one-third" style={{ maxWidth: '60px' }} type="text" id="ActualDay" onChange={this.handleActualDayChange} value={this.state.newElementActualDay} />
                                    <input className="usa-width-one-third" style={{ maxWidth: '60px' }} type="text" id="ActualMonth" onChange={this.handleActualMonthChange} value={this.state.newElementActualMonth} />
                                    <input className="usa-width-one-third" style={{ maxWidth: '80px' }} type="text" id="ActualYear" onChange={this.handleActualYearChange} value={this.state.newElementActualYear} /></td>
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