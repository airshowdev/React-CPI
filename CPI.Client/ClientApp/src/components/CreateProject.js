import React, { Component } from 'react';
import './css/uswds.css';

export class CreateProject extends Component {
    displayName = CreateProject.name

    render() {
        return (
            <form className="usa-form">
            <fieldset>
                <legend>Create Project</legend>

                    <label htmlFor="ProjectName">Project Name</label>
                    <input id="ProjectName" name="ProjectName" type="text" required aria-required="true" />

                    <label htmlFor="options">Select Base</label>
                    <select name="options" id="options">
                        <option value>- Select -</option>
                        <option value="value1">Base A</option>
                        <option value="value2">Base B</option>
                        <option value="value3">Base C</option>
                    </select>
                    
            </fieldset>
            </form>
            );
    }

    /*fetch('placeholder/CreateProject', {
        method: 'POST',
        )*/
}