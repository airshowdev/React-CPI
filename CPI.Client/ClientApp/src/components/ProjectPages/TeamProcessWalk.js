import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class TeamProcessWalk extends Component {

    displayName = TeamProcessWalk.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Team Process Walk </h1>
                <div className="image-alignment">
                    <img src="./img/close.png" defaultValue="Place Holder" />
                    <img src="./img/close.png" defaultValue="Place Holder" />
                    <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>The team process walk provides all the members of the team the opportunity to observe the<br /> process in action. Prior to the walk, the facilitator should provide the team members with a<br /> pre-brief on ROE and what to expect. Ask the team to actively listen and take notes, but to<br /> refrain from problem solving.  Ask questions, first “what”, then “why”.<br /><br />TIP: Walking the process in reverse order (last step to first step) is helpful when building a<br /> Value Stream Map because it helps the team focus on how value is built into the process.</p>
            </div>
        )
    }
}