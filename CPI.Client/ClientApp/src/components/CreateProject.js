import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';

     
export class CreateProject extends Component {
    displayName = CreateProject.name

    constructor(props) {
        super(props);
		this.state = {
			creatorFirstName: "", creatorLastName: "", base: "", name: "", unit: "", loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        var data = {
            Creator: this.state.creatorFirstName + " " + this.state.creatorLastName,
            Base: this.state.base,
            Name: this.state.name,
            Unit: this.state.unit
        };

		var response = Post(data, 'Project', 'CreateProject');
		this.context.router.history.push("/Project/ProjectInfo" + response.Body);
    }

	render() {
		if (this.state.loading) {
			return <span> loading... </span>
		} else {
			return (

				<form className="usa-form" onSubmit={this.handleSubmit}>
					<fieldset>
						<h2 style={{ marginLeft: "0" }}>Create Project</h2>
						<label htmlFor="ProjectName">Project Name</label>
						<input id="ProjectName" type="text" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} required aria-required="true" />

						<label htmlFor="CreatorFirst">First Name</label>
						<input id="CreatorFirst" type="text" onChange={(event) => this.setState({ creatorFirstName: event.target.value })} required aria-required="true" />

						<label htmlFor="CreatorLast">Last Name</label>
						<input id="CreatorLast" onChange={(event) => this.setState({ creatorLastName: event.target.value })} type="text" required aria-required="true" />

						<label htmlFor="options">Select Base</label>
						<input id="Base" onChange={(event) => this.setState({ base: event.target.value })} required aria-required="true" />

						<label htmlFor="Unit">Unit</label>
						<input id="Unit" ref="Unit" type="text" onChange={(event) => this.setState({ unit: event.target.value })} required aria-required="true" />

						<input type="submit" className="usa-button" value="Create Project" />
					</fieldset>
				</form>
			);
		}
    }
    
}