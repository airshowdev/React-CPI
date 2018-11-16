import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

import { Col, Row, Grid } from 'react-bootstrap';
import { NavButtons } from './NavButtons';
import DataHandler from './js/DataHandler';


export class ClarifyValidateProblem extends Component {

    displayName = ClarifyValidateProblem.name

    constructor(props, context) {
        super(props, context)

        this.state = { problemStatement: "", loading: true };


        this.handleSave = this.handleSave.bind(this);
    }

    async componentDidMount() {
        var dHandler = new DataHandler();
        let response = await dHandler.getProject(this.props.match.params.id);
        if (response.successful) {
			this.setState({ problemStatement: response.data.ProblemStatement || "", loading: false })
        } else {
            alert('error pulling data');
            this.setState({ loading: false });
        }
    }


    async handleSave() {

        this.setState({ loading: true });
        let dHandler = new DataHandler();
        let sendData = {
            ProblemStatement: this.state.problemStatement
        }
        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);


        if (!response.successful) {
            alert("There was an error saving changes. Please try again or contact a system administrator");
        }
        this.setState({ loading: false });

    }

    render() {
        if (this.state.loading) {
            return (<span>Loading...</span>)
        } else {
            return (
                <Grid>
                        <NavButtons next="IdentifyPerformanceGaps" previous="RoomSetup" projectId={this.props.match.params.id} />
                    <Col>
                        <div className="paragraph">
                            <h1> PPSM Step 1 - Clarify and Validate the Problem </h1>
                            <p>Using the information below, create a problem statement<br />What is the Process and Issue?<br />What organization owns the process?<br />What organizations are affected by the process?<br />What is happening in the process?<br />What should be happening in the process?<br />What is the critical to (x) factor? (time, cost, quality, variation)</p>
                            <div className="text-area-align">
                                <div style={{ width: "50%", display: "inline-block" }}>
                                    <textarea value={this.state.problemStatement} onChange={(event) => this.setState({ problemStatement: event.target.value })} placeholder="Problem Statement" />
                                </div>
                                <div style={{ border: "solid 1px", padding: "3px", float: "right", marginTop: "10px", marginRight: "25px" }} >
                                    <p>Example:  From 1 Jan 2015 to 1 Jan 2016, 77 of 250 775th<br /> Mission Support Group  EPRs returned to MPS after<br /> suspense. VOC is 250 of 250 EPRs turned in to MPS NLT<br /> suspense date.</p>
                                </div>
                            </div>
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                    </Col>
                </Grid>
            )
        }
    }
    
}