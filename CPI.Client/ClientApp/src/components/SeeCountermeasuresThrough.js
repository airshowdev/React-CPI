import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import PropTypes from 'prop-types';
import DataHandler from './js/DataHandler';

export class SeeCountermeasuresThrough extends Component {

    displayName = SeeCountermeasuresThrough.name;

    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true, rootCauses: [] };
    }

    async componentDidMount() {
        let dHandler = new DataHandler();
        let data = await dHandler.getProject(this.props.match.params.id);
        this.setState({ project: data, loading: false });
    }

    render() {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 6 - See Countermeasures Through </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop an action plan to see countermeasures through</h3>
                    </div>
                    <div>
                        <table className="see-countermeasures-through-table">
                            <thead>
                                <th style={{ minWidth: "400px" }}>Task</th>
                                <th>Action Officer</th>
                                <th >Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }}><input type="text" placeholder="x" /></td>
                                    <td style={{ padding: "0px" }}><input type="text" placeholder="x" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}