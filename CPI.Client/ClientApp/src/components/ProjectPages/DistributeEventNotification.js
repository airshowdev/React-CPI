import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';

export class DistributeEventNotification extends Component {

    displayName = DistributeEventNotification.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div>
                <NavButtons next="ScheduleInOutBrief" previous="IdentifyEventLocation" projectId={this.props.match.params.id} />
            <div className="paragraph">
                <h1> Distribute Event Notification </h1>
                <p>At this point, all the pieces of the puzzle are ready to be assembled.  It’s time to inform the<br /> participants about the CPI process and any additional important information.  Utilize the<br /> sample message in “CPI in a Box” tool to draft the message to notify participants of the<br /> meeting.</p>
                </div>
                </div>
        )
    }
}