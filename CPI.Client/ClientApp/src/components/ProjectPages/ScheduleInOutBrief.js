import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/ScheduleInOutBrief.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/ScheduleInOutBrief.js

export class ScheduleInOutBrief extends Component {

    displayName = ScheduleInOutBrief.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Schedule In Brief / Out Brief </h1>
                <div className="image-alignment">
                    <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>Understanding what success looks like from the Champions perspective and clearly conveying<br /> that to the team is extremely important in having an effective CPI event.  What better way to<br /> accomplish this then by having the Champion address the team directly? In addition to getting<br /> everyone on the same page, having the Champion address the team lets everyone know that<br /> the work they are about to do is important.  Done correctly, a good In Brief will set a positive<br /> tone for the team.  At the end of the event it is important to get the Champion's blessing on<br /> any action items that are purposed.  Leadership is busy so it's important to schedule as far in<br /> advance as possible to ensure they are there for the In Brief and Out Brief.</p>
            </div>
        )
    }
}