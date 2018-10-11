import React, { Component } from 'react';
import './css/uswds.css';

export class EventExecutionOverview extends Component {

    displayName = EventExecutionOverview.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Event Execution Overview </h1>
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <img src="./img/close.png" defaultValue="Place Holder" />
                <p>Event Execution is where all of the hard work you've put in finally pays off. Pre event<br /> planning and Pre Event Preparation have set the stage for the team to focus their<br /> energy on solving a specific problem.  The goal of this section is to guide SMEs on the<br /> team to identify root causes that are causing the gap in performance. Although this CPI<br /> in a box has been replicated at another locations, the root causes are not always the<br /> same.  Once root causes have been identified, you will guide the team to come up with<br /> countermeasures that elimate the root causes identified.</p>
                <button class="usa=button">Event Cards</button>
            </div>
        )
    }
}