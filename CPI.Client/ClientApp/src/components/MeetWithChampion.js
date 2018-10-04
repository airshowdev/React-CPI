import React, { Component } from 'react';
import './css/uswds.css';

export class MeetWithChampion extends Component {

    displayName = MeetWithChampion.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> MeetWithChampion </h1>
            </div>
        )
    }
}