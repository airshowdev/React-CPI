import React, { Component } from 'react';
import './css/uswds.css';
import { Post } from '../REST';


function clickCreate() {
        var data = {
            json: {
                Creator: "Gabriel Stines",
                MajCom: "AFGSC",
                Base: "Offutt",
                Template: "NVA",
                Champion: "Garcia",
                Mentor: "SSgt Munjas",
                TeamLead: "A1C Hall",
                Evaluators: ["Mr. Zachary"],
                Unit: "595 SCS",
                Date: 0
            }
    };
        Post(data, 'Project', 'CreateProject');
    }
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

                    <button className="usa-button" onClick={clickCreate()}>Create Project</button>
            </fieldset>
            </form>
            );
    }
    //fetch('http://localhost:50285/Projects/CreateProject', {
    //    method: 'POST',
    //    headers: {
    //        'Accept': 'application/json',
    //        'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({
    //        firstParam
    //    })
    //    )
}