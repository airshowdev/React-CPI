﻿import { NavButtons } from "../NavButtons";
import React, { Component } from 'react';
import '../css/uswds.css';


export class NVADataCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Elements: [], newElementVA: 0.00, newElementNVA: 0.00, newElementName: "", newElementGoal: 0, loading: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNVAChange = this.handleNVAChange.bind(this);
        this.handleVAChange = this.handleVAChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        /*fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(data => {
                this.setState({ Elements: data.DataCollection.Elements || new [], loading: false });
            });*/
    }

    handleGoalChange(event) {
        this.setState({ newElementGoal: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ newElementName: event.target.value });
    }

    handleVAChange(event) {
        this.setState({newElementVA: event.target.value });
    }

    handleNVAChange(event) {
        this.setState({newElementNVA: event.target.value });
    }
    handleAdd() {
        var elements = this.state.Elements;
        elements.push({ VA: parseFloat(this.state.newElementVA), NVA: parseFloat(this.state.newElementNVA), Goal: parseInt(this.state.newElementGoal), Name: this.state.newElementName });
        this.setState({ Elements: elements, newElementName: "", newElementNVA: 0, newElementVA: 0 });
    }
    handleDelete(event) {
        var elements = this.state.Elements;
        var sorted = elements.filter(e => e.Name !== event.target.id);
        this.setState({ Elements: sorted});
    }

    NVAPercentage(nva, va) {
        var flNVA = parseFloat(nva);
        var flVA = parseFloat(va);
        let total = flNVA + flVA;
        return Math.round((flNVA * 100) / total);
    }
    NVAGoal(goal, nva, va) {
        return goal > this.NVAPercentage(nva, va);
    }

    render() {
        if (this.state.loading) {
            return (<span>Loading UwU</span>);
        } else {
            return (
                <div className="usa-grid">
                    <NavButtons previous="ProjectOverview" next="AnalyzeData" projectId={this.props.match.params.id}/>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Value Added</th>
                            <th scope="col">NVA</th>
                            <th scope="col">Percentage NVA</th>
                            <th scope="col">Percentage Goal</th>
                            <th scope="col">Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.Elements.map(x => (
                            <tr key={x.Name} >
                                <td>{x.Name}</td>
                                <td>{x.VA}</td>
                                <td>{x.NVA}</td>
                                <td>{x.NVA / (x.VA + x.NVA)}</td>
                                <td>{x.Goal}</td>
                                <td>{((x.NVA / (x.VA + x.NVA)) <= x.Goal) ? "Success" : "Fail"}</td>
                                <td><button id={x.Name} onClick={this.handleDelete}>Delete</button></td>
                                <td><button>Edit</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td><input type="text" id="Name" onChange={this.handleNameChange} value={this.state.newElementName} required aria-required /></td>
                            <td><input type="text" id="VA" onChange={this.handleVAChange} value={this.state.newElementVA} required aria-required /></td>
                            <td><input type="text" id="NVA" onChange={this.handleNVAChange} value={this.state.newElementNVA} required aria-required /></td>
                            <td>{(isNaN(this.state.newElementNVA) || isNaN(this.state.newElementVA)) ? "Enter valid numbers" : (this.NVAPercentage(this.state.newElementNVA, this.state.newElementVA))}</td>
                            <td><input type="text" id="Goal" onChange={this.handleGoalChange} value={this.state.newElementGoal} required aria-required /></td>
                            <td>{this.NVAGoal(this.state.newElementGoal, this.state.newElementNVA, this.state.newElementVA) ? "Success" : "Fail"}</td>
                                <td><input type="submit" value="Add" onClick={this.handleAdd}/></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            );
        }
    }

    
}