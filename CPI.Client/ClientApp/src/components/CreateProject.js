import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';
import PropTypes from 'prop-types';
import DataHandler from './js/DataHandler';


export class CreateProject extends Component {
    displayName = CreateProject.name

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
		this.state = {
			creatorFirstName: "", creatorLastName: "", base: "", name: "", unit: "", loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async  handleSubmit() {

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


						<label htmlFor="CreatorLast">Last Name</label>
						<input id="CreatorLast" onChange={(event) => this.setState({ creatorLastName: event.target.value })} type="text" required aria-required="true" />

						<label htmlFor="options">Select Base</label>
						<input id="Base" onChange={(event) => this.setState({ base: event.target.value })} required aria-required="true" />
                
                    <button type="submit" className="usa-button" onClick={this.handleSubmit}>Create Project</button>
            </div>

        );
    }   

}