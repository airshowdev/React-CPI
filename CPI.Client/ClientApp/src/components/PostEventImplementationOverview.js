import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class PostEventImplementationOverview extends Component {

    displayName = PostEventImplementationOverview.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> Overview </h1>
                    <p style={{ textAlign: "left", margin: "5px" }}>&emsp; &emsp;At this stage in the game, the team has put forth a great amount of effort to develop sound countermeasures that will eliminate root causes identified.  The purpose of the Post Event Implementation phase is to ensure the team clearly specifies what needs to done and by who so that their is no confusion.  In other words, this phase is about accountablity. </p>
                </div>
            </div>
        )
    }
}