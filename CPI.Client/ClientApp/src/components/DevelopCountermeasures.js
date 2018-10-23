import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Col, Grid, Row } from 'react-bootstrap';

export class DevelopCountermeasures extends Component {

    displayName = DevelopCountermeasures.name

    constructor(props, context) {
        super(props, context)
        this.state = {
            project: {}, loading: true, rootCauses: [], selectedRootCause: {}};
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false, rootCauses: data.RootCauses });
            });
    }

    render(project) {
        if (this.state.loading) {
            return (<div style={{ left: '50vw', top: '50vh', position: 'absolute' }}>Loading Data</div>);
        } else {
            return (
                <div className="paragraph">
                    <h1> PPSM Step 5 - Develop Countermeasures </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop countermeaures for each root cause using an appropriate CPI principle</h3>
                    </div>
                    <div className="flexbox">
                        {this.state.rootCauses.map((Cause, i) => 
                            (<div>
                                <label>RC{i + 1}:{Cause.Description}</label>
                                <table>
                                <tbody>
                                    {this.state.rootCauses[i].Countermeasures.map((Measure, j) =>
                                        (<tr>
                                            <td>CM{j + 1}</td>
                                            <td><input id={j} value={Measure} onChange={this.handleChange} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                                </div>
                            ))}
                    </div>
                    </div>
    )
}
}
}