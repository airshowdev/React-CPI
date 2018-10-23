import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, rootCauses: data.rootCauses });
            });
    }

    render(project) {
        return (
            <div className="paragraph">
                <h1> PPSM Step 5 - Develop Countermeasures </h1>
                <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                    <h3 style={{ marginTop: "10px" }}>Develop countermeaures for each root cause using an appropriate CPI principle</h3>
                </div>
                {this.state.rootCauses.map((Cause, i) =>(
                <div>
                        <div className="countermeasure-lists-div">
                            <ul> <b>{Cause}</b>{Cause.Countermeasures.map((cm, j) => (
                                <input value={cm} id={j} />))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}