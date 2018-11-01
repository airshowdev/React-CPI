﻿import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';
import DataHandler from './js/DataHandler';



export class CreateProject extends Component {
    displayName = CreateProject.name

    constructor(props) {
        super(props);
        this.state = {
            creatorFirstName: "", creatorLastName: "", base: "", name: "", unit: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        var handler = new DataHandler();

        var data = {
            Creator: this.state.creatorFirstName + " " + this.state.creatorLastName,
            Base: this.state.base,
            Name: this.state.name,
            Unit: this.state.unit
        };

        handler.addProject(data);
    }

    render() {
        return (
            <div className="usa-form">
					<h2 style={{marginLeft: "0"}}>Create Project</h2>
                    <label htmlFor="ProjectName">Project Name</label>
                    <input id="ProjectName" type="text" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name}required aria-required="true"/>

                    <label htmlFor="CreatorFirst">First Name</label>
                    <input id="CreatorFirst" type="text" onChange={(event) => this.setState({ creatorFirstName: event.target.value })} required aria-required="true" />

                    <label htmlFor="CreatorLast">Last Name</label>
                    <input id="CreatorLast" onChange={(event) => this.setState({ creatorLastName: event.target.value })} type="text" required aria-required="true" />

                    <label htmlFor="options">Select Base</label>
                    <input id="Base" onChange={(event) => this.setState({ base: event.target.value })} required aria-required="true" />

                    <label htmlFor="Unit">Unit</label>
                    <input id="Unit" ref="Unit" type="text" onChange={(event) => this.setState({ unit: event.target.value })}required aria-required="true" />

                    <button type="submit" className="usa-button" onClick={this.handleSubmit}>Create Project</button>
            </div>
        );
    }
    
}