import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';

export class BaselineData extends Component {

    displayName = BaselineData.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true };

       
    }

   /* componentDidMount() {
        fetch('api/Project/DataCollection')
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    } */

    render(project) {
        return (
            <div>
                <h1> Collect Baseline Data </h1>

            
                <table>
                    <tbody>
                        <tr>
                            <td scope="row">Instructions</td>
                            <td>Parameters</td>
                            <td>Data Summary</td>
                        </tr>
                        <tr>
                            <td scope="row">Contact your Military Personnel Section to determine the following:<br /><br />
                                1. Date EPR Due to MPS (Static date for each grade)<br /> 2. Date each member's EPR was submitted to MPS (First round only)<br /><br />

                                Enter data in the yellow highlighted fields.  The program  calculates "days after" and "status". This <br />
                                information is used to identify your unit's ability to meet the VOC requirement of 100% of EPRs<br /> submitted to MPS on time.
                            </td>
                            <td>
                                <tr>
                                    <td>% On Time Goal</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Threshold</td>
                                    <td>70%</td>
                                </tr>
                                <tr>
                                    <td>Chamption Goal</td>
                                    <td>90%</td>
                                </tr>
                            </td>
                            <td>
                                
                                    <td>
                                        <table className="usa-table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>Total Reports</td>
                                                    <td>55</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Late Reports</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>Total On-Time</td>
                                                    <td>52</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table className="usa-table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>% On Time</td>
                                                    <td>95%</td>
                                                </tr>
                                                <tr>
                                                    <td>Goal</td>
                                                    <td>100%</td>
                                                </tr>
                                                <tr>
                                                    <td>Gap</td>
                                                    <td>5%</td>
                                                </tr>
                                                <tr>
                                                    <td>Champion Goal</td>
                                                    <td>90%</td>
                                                </tr>
                                                <tr>
                                                    <td>Revised Gap</td>
                                                    <td>-5%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>                               
                            </td>
                        </tr>

                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Due Date</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Days after C/O</th>
                            <th scope="col">Status</th>                      
                        </tr>
                    </thead>
                     <tbody>
                        {/*  {project.map(project => (
                            <tr key={project.ID} onClick={() => this.context.router.history.push('/Project?id=' + project.ID)}>
                                <th scope="row">{project.ID}</th>
                                <td>{project.Name}</td>
                                <td>{project.Creator}</td>
                                <td>{project.Unit}</td>
                            </tr>
                            <tr>
                            </tr>
                        ))}*/}
                        {/*<tr>
                            <td style={{ padding: "0px" }}><input type="text" placeholder="no u" style={{ margin: "auto", width: "auto" }} /></td>
                            <td style={{padding: "0px"}}><input type="text" placeholder="no u" style={{ margin: "auto", width: "auto" }}/></td>
                            <td>Date</td>
                            <td>Date</td>
                        </tr> */}
                    </tbody>
                </table>              
            </div>
        )
    }
}