import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';

export class ReviewKPI extends Component {

    displayName = ReviewKPI.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className ="paragraph">
                <h1> Review KPI </h1>
                    <p>A successful CPI event that results in good, meaningful change depends on good data.  The right Key Peformance Indicator(s) will allow us to assess the state our current process and will be able to tell us how much we have improved post CPI event.  Take this time to look at the information collected to assess the current state of this process.  Is it accurate?  Does it make sense?  Work with subject matter experts as required to ensure that you are starting off on the right foot with this CPI Event.</p>
            </div>
        )
    }
}