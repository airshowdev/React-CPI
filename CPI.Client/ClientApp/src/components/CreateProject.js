import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';


function clickCreate() {
    var data = {
            Name: this.refs.Project.value,
            Creator: this.refs.CreatorFirst.value + " " + this.refs.CreatorLast.value,
            MajCom: "AFGSC",
            Base: this.refs.Base.value,
            Unit: this.refs.Unit.value,
            Date: 0 
    };
        Post(data, 'Project', 'CreateProject');
    }
export class CreateProject extends Component {
    displayName = CreateProject.name

    render() {
        return (
            <form className="usa-form" >
            <fieldset>
                <legend>Create Project</legend>

                    <label htmlFor="ProjectName">Project Name</label>
                    <input id="ProjectName" ref="ProjectName" name="ProjectName" type="text" required aria-required="true" />

                    <label htmlFor="CreatorFirst">First Name</label>
                    <input id="CreatorFirst" ref="CreatorFirst" name="CreatorFirst" type="text" required aria-required="true" />

                    <label htmlFor="CreatorLast">Last Name</label>
                    <input id="CreatorLast" ref="CreatorLast" name="CreatorLast" type="text" required aria-required="true" />

                    <label htmlFor="options">Select Base</label>
                    <select ref="Base "name="options" id="options">
                        <option value>- Select -</option>
                        <option value="value1">Base A</option>
                        <option value="value2">Base B</option>
                        <option value="value3">Base C</option>
                    </select>

                    <label htmlFor="Unit">Unit</label>
                    <input id="Unit" ref="Unit" name="Unit" type="text" required aria-required="true" />

                    <button className="usa-button" onClick={clickCreate}>Create Project</button>
            </fieldset>
            </form>
            );
    }
}