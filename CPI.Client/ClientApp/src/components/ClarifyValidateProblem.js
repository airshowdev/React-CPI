import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Post } from '../REST';

export class ClarifyValidateProblem extends Component {

    displayName = ClarifyValidateProblem.name

    constructor(props, context) {
        super(props, context)
        this.state = { problemStatement: {}, loading: true };

        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, problemStatement: data.ProblemStatement, loading: false });
            });
    }

    handleSave() {
        var tempProj = this.state.project;
        tempProj.ProblemStatement = this.state.problemStatement;
        Post(this.state.project, "Project", "UpdateProject");
    }

    render() {
        if (this.state.loading) {
            return <span>Loading</span>;
        } else {
            return (
                <div className="paragraph">
                    <h1> PPSM Step 1 - Clarify and Validate the Problem </h1>
                    <p>Using the information below, create a problem statement<br />What is the Process and Issue?<br />What organization owns the process?<br />What organizations are affected by the process?<br />What is happening in the process?<br />What should be happening in the process?<br />What is the critical to (x) factor? (time, cost, quality, variation)</p>
                    <div className="text-area-align">
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <textarea value={this.state.problemStatement} onChange={(event) => { this.setState({ problemStatement: event.target.value }) }}>Problem Statement:</textarea>
                        </div>
                        <div style={{ border: "solid 1px", padding: "3px", float: "right", marginTop: "10px", marginRight: "25px" }} >
                            <p>Example:  From 1 Jan 2015 to 1 Jan 2016, 77 of 250 775th<br /> Mission Support Group  EPRs returned to MPS after<br /> suspense. VOC is 250 of 250 EPRs turned in to MPS NLT<br /> suspense date.</p>
                        </div>
                    </div>
                    <button onClick={this.handleSave}>Save</button>
                </div>
            )
        }
    }
}