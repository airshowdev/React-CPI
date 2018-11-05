import { NavButtons } from "../NavButtons";
import React, { Component } from 'react';
import '../css/uswds.css';
import { DataCollectionStatus } from '../DataCollectionStatus';
import DataHandler from "../js/DataHandler";

export class NVADataCollection extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            Elements: [],
            newElementVA: "",
            newElementNVA: "",
            newElementName: "",
            newElementGoal: 0,
            loading: true
        };
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }

    async componentDidMount() {
        var dHandler = new DataHandler();

        let data = await dHandler.getProject(this.props.match.params.id);

        this.setState({ Elements: data.Elements, Standard: data.Standard, loading: false });
    }

    handleAdd() {

        if (this.state.newElementName && this.state.newElementNVA && !isNaN(this.state.newElementNVA) && !isNaN(this.state.newElementVA) && !isNaN(this.state.newElementGoal) && this.state.newElementVA) {
            let elements = this.state.Elements;
            elements.push({ VA: parseFloat(this.state.newElementVA), NVA: parseFloat(this.state.newElementNVA), Type: "NVA", Goal: parseInt(this.state.newElementGoal), Name: this.state.newElementName });
            this.setState({ Elements: elements, newElementName: "", newElementNVA: "", newElementVA: "" });
        } else {
            alert("Valid entries required to add data");
        }
    }

    handleDelete(event) {
        var elements = this.state.Elements;
        elements.splice(event.target.id, 1);
        this.setState({ Elements: elements });
    }

    handleEdit(event) {
        if (this.state.newElementName || this.state.newElementNVA || this.state.newElementVA) {
            alert("Please ensure the current entries are empty. Please add or clear current entry");
        } else {
            var elements = this.state.Elements;
            var spliced = elements.splice(event.target.id, 1);
            var selected = spliced[0];
            this.setState({ newElementGoal: selected.Goal, newElementName: selected.Name, newElementNVA: selected.NVA, newElementVA: selected.VA, Elements: elements });
        }
    }

    handleClear() {
        this.setState({ newElementVA: "", newElementNVA: "", newElementName: "", newElementGoal: "" });
    }

    async handleSave() {
        let dHandler = new DataHandler();
        let elements = this.state.Elements;

        elements.forEach((x) => { x.Actual = (this.NVAPercentage(x.NVA, x.VA)) });
        
        let postData = {
            Elements: elements
        }

        dHandler.modifyProject(postData, this.props.match.params.id);
    }

    NVAPercentage(nva, va) {
        var flNVA = parseFloat(nva);
        var flVA = parseFloat(va);
        let total = flNVA + flVA;
        return Math.round((flNVA * 100) / total);
    }

    
    NVAGoal(goal, nva, va) {
        return goal >= this.NVAPercentage(nva, va);
    }

    calculateAverageGoal() {
        var total = 0;
        for (var item in this.state.Elements) {
            total += parseFloat(item.Goal);
        }
        return total / this.state.Elements.length;
    }

    calculateUnsat() {
        var unsats = 0;
        this.state.Elements.forEach(
            (x) => { (!(parseFloat(x.NVA) / (parseFloat(x.VA) + parseFloat(x.NVA)) > x.Goal) ? unsats++ : unsats) });
       
        return unsats;
    }

    render() {
        if (this.state.loading) {
            return (<span>Loading Data</span>);
        } else {
            return (
                <div className="usa-grid">
                    <NavButtons previous="ProjectOverview" title="NVA Data Collection" next="AnalyzeData" projectId={this.props.match.params.id} />
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
                            {(this.state.Elements.length > 0) ? this.state.Elements.map((x, i) =>
                                (<tr key={i} >
                                    <td>{x.Name}</td>
                                    <td>{x.VA}</td>
                                    <td>{x.NVA}</td>
                                    <td>{(this.NVAPercentage(x.NVA, x.VA))}</td>
                                    <td>{x.Goal}</td>
                                    <td>{this.NVAGoal(x.Goal, x.NVA, x.VA) ? "Success" : "Fail"}</td>
                                    <td><button id={i} onClick={this.handleDelete}>Delete</button></td>
                                    <td><button id={i} onClick={this.handleEdit}>Edit</button></td>
                                </tr>
                                )) : <div/>}
                            <tr>
                                <td><input type="text" id="Name" onChange={(event) => this.setState({ newElementName: event.target.value })} value={this.state.newElementName} required aria-required /></td>
                                <td><input type="text" id="VA" onChange={(event) => this.setState({ newElementVA: event.target.value })} value={this.state.newElementVA} required aria-required /></td>
                                <td><input type="text" id="NVA" onChange={(event) => this.setState({ newElementNVA: event.target.value })} value={this.state.newElementNVA} required aria-required /></td>
                                <td>{(isNaN(this.state.newElementNVA) || isNaN(this.state.newElementVA)) || (!this.state.newElementNVA) ? "Enter valid numbers" : (this.NVAPercentage(this.state.newElementNVA, this.state.newElementVA))}</td>
                                <td><input type="text" id="Goal" onChange={(event) => this.setState({ newElementGoal: event.target.value })} value={this.state.newElementGoal} required aria-required /></td>
                            <td>{this.NVAGoal(this.state.newElementGoal, this.state.newElementNVA, this.state.newElementVA) ? "Success" : "Fail"}</td>
                            <td><input type="submit" value="Add" onClick={this.handleAdd} /></td>
                            <td><input type="submit" value="Clear" onClick={this.handleClear}/></td>
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