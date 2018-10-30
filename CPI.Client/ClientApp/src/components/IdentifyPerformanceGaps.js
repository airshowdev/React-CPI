import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Post } from '../REST';

export class IdentifyPerformanceGaps extends Component {

    displayName = IdentifyPerformanceGaps.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true, PerformanceGap: "" };
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, PerformanceGap: data.IdentifyPerformanceGap });
            });
    }

    handleSave() {
        var tempProject = this.state.project;
		tempProject.IdentifyPerformanceGap = this.state.PerformanceGap;
		
        Post(tempProject, "Project", "UpdateProject");
        this.setState({ project: tempProject });
    }

    render() {
        return (
            <div className="paragraph">
                <h1> PPSM Step 2 - Identify Performance Gaps </h1>
                <div><h3>Chart goes here</h3></div>
                <p>Identify the performance Gaps in the current process by comparing current performance to the process goal</p>
                <div className="paragraph" style={{ border: "none" }}>
                    <textarea onChange={(event) => this.setState({ PerformanceGap: event.target.value })} value={this.state.PerformanceGap} placeholder="Performance Gap" className="performance-gap-text-area"></textarea>   
                </div>
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}