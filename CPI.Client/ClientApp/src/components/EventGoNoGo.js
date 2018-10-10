import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class EventGoNoGo extends Component {

    displayName = EventGoNoGo.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h1> Event Go/ No-Go </h1>
                <div className="image-alignment">
                    <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>A vector check at this stage in the process ensures the Champion agrees the team has a solid<br/> grasp of the Problem to be solved, Gap to be closed, Target to be met.</p>
            </div>
        )
    }
}