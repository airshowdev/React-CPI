import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/ObtainSupplies.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import './css/HallMartino.css';
>>>>>>> Views:CPI.Client/ClientApp/src/components/ObtainSupplies.js

export class ObtainSupplies extends Component {

    displayName = ObtainSupplies.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> Obtain Supplies </h1>
                <div className="image-alignment">
                    <img src="./img/close.png" defaultValue="Place Holder" />
                </div>
                <p>You don’t want lack of supplies to be a show stopper for the team. Having the right<br /> supplies will help you to keep the momentem of the event going. Click the link below<br /> for a recommended supply list.</p>
                <button>Supply List</button>
            </div>
        )
    }
}