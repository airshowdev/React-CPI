import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';

     
export class CreateProject extends Component {
    displayName = CreateProject.name

    constructor(props) {
        super(props);
        this.state = {
            creatorFirstName: "", creatorLastName: "", base: "", name: "", unit: ""
        };
    }
    
    render() {
        return (
            <form className="usa-form">
            <fieldset>
                <legend>Create Project</legend>
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

                    <button className="usa-button" onClick={() => {
                        var data = {
                            Name: this.state.name,
                            Base: this.state.base,
                            Creator: this.state.creatorFirstName + " " + this.state.creatorLastName,
                            Unit: this.state.unit
                        };
                        Post(data, 'Project', 'CreateProject');}} value="Create Project">Create Project </button>
                    <label>{this.state.name + this.state.creatorFirstName + this.state.creatorLastName + this.state.base + this.state.unit}</label>
            </fieldset>
            </form>
        );
    }
    
}