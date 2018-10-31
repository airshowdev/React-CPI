import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';

export class TeamKickOffAwarenessTraining extends Component {

    displayName = TeamKickOffAwarenessTraining.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div>
                <NavButtons next="ValidateDataCollection" previous="TeamProcessWalk" projectId={this.props.match.params.id} />
            <div className="paragraph">
                <h1> Team Kick Off and Awareness Training </h1>
                <p>At this point, you have succeeded in getting “buy in” from the Champion and the Team Lead.<br /> Additionally, you have generated a list of subject matter experts (SMEs).  In this step, your<br /> objective is to obtain buy in from the team by explaining the entire scope of the CPI event. This<br /> includes familiarizing the team with the entire process, the process walk, and the data review.<br /> In addition, you will provide a crash course (tailored) training on CPI and tools to prepare the<br /> team for their upcoming root cause analysis and countermeasure development.</p>
                </div>
                </div>
        )
    }
}