import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Post } from '../REST';

import DataHandler from './js/DataHandler';

import { NavButtons } from './NavButtons';
import { Col, Grid, Row } from 'react-bootstrap';


export class IdentifyPerformanceGaps extends Component {

    displayName = IdentifyPerformanceGaps.name

    constructor(props, context) {
        super(props, context)
        this.state = {loading: true, PerformanceGap: "" };
        this.handleSave = this.handleSave.bind(this);
    }

    async componentDidMount() {
        let dHandler = new DataHandler();
        let response = await dHandler.getProject(this.props.match.params.id);
        if (response.successful) {
            this.setState({ loading: false, PerformanceGap: response.data.IdentifyPerformanceGap || ""});
        } else {
            alert('error pulling data');
            this.setState({ loading: false });
        }
            
    }


    async handleSave() {
        
        let dHandler = new DataHandler();

        let sendData = { IdentifyPerformanceGap: this.state.PerformanceGap };
        let response = await dHandler.modifyProject(sendData, this.props.match.params.id);


        if (!response.successful) {
            alert("There was an error saving changes. Please try again or contact a system administrator");
            this.setState({ loading: false });
        } else {
            this.setState({ loading: false });
        }

    }

    render() {
        if (this.state.loading) {
            return (<span>Loading</span>)
        } else {
            return (
                <Grid>
                        <NavButtons next="SetImprovementTargets" previous="ClarifyValidateProblem" projectId={this.props.match.params.id} />
                    <Col>
                        <div className="paragraph">
                            <h1> PPSM Step 2 - Identify Performance Gaps </h1>
                            <div><h3>Chart goes here</h3></div>
                            <p>Identify the performance Gaps in the current process by comparing current performance to the process goal</p>
                            <div className="paragraph" style={{ border: "none" }}>
                                <textarea onChange={(event) => this.setState({ PerformanceGap: event.target.value })} value={this.state.PerformanceGap} placeholder="Performance Gap" className="performance-gap-text-area" />
                            </div>
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                    </Col>
                </Grid>
            )
        }
    }
}