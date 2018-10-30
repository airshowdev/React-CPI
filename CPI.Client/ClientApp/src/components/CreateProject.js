import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';
import PropTypes from 'prop-types';

     
export class CreateProject extends Component {
    displayName = CreateProject.name

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            creatorFirstName: "", creatorLastName: "", base: "", name: "", unit: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async  handleSubmit() {

        var data = {
            Creator: this.state.creatorFirstName + " " + this.state.creatorLastName,
            Base: this.state.base,
            Name: this.state.name,
            Unit: this.state.unit
        };

        this.setState({ loading: true }); 

        let httpResponse = await Post(data, 'Project', 'CreateProject');


        if (httpResponse.status == 200) {
        this.context.router.history.push("/Project/ProjectInfo/" + httpResponse.body);
        } else {
            alert(JSON.stringify(httpResponse.InternalException));
        }
    }

    render() {
        return (
            <fieldset>
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

                    <input type="submit" className="usa-button" value="Create Project" onClick={this.handleSubmit} />

            </fieldset>

       
        );
    }   
}