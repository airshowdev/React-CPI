import React, { Component } from 'react';
import './css/uswds.css';

export class RoomSetup extends Component {

    displayName = RoomSetup.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Room Setup </h1>
                <div className="image-alignment">
                    <img src="./img/close.png" defaultValue="Place Holder" />
                    <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>Setting up the room prior to the CPI event will help get the team off in the right direction.<br />  Doing this ahead of time can help ensure all necessary tools are in place and availible on the<br /> day of the event.  A properly set up room will also help with the flow and direction of your<br /> facilitation efforts.</p>
            </div>
        )
    }
}