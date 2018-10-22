import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';
import { LinkContainer } from 'react-router-bootstrap';

export class ProjectOverview extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    displayName = ProjectOverview.name

    constructor(props, context) {
        super(props, context);
        this.state = { project: {}, loading: true };
    }

	componentDidMount() {
		fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data, loading: false });
            });
    }

    render() {
        return (
            <div>
                <NavButtons next="DataCollection" previous="ProjectInfo" projectId={this.props.match.params.id} title="Project Overview" />
            <table style={{width: '85%'}}>
                <thead>
                    <th>Pre-Event Planning</th>
                    <th>Pre-Event Preparation</th>
                    <th>Pre-Event Preparation</th>
                    <th>Event Execution</th>
                    <th>Post-Event-Implementation</th>
                    <th>Post-Event Follow Up</th>
                    </thead>
                <tbody>
                    <td>
                        <LinkContainer to={"/Project/DataCollection/" + this.props.match.params.id} ><p>Initiate Data Collection</p></LinkContainer>
                        <LinkContainer to={"/Project/AnalyzeData/" + this.props.match.params.id}><p>Event Go/No Go Decision</p></LinkContainer>
                        <LinkContainer to={"/Project/RequestMentor/" + this.props.match.params.id}><p>Request Mentor</p></LinkContainer>
                        <LinkContainer to={"/Project/MeetWithChampion/" + this.props.match.params.id}><p>Meet With Champion</p></LinkContainer>
                        <LinkContainer to={"/Project/MeetwithTeamLeader/" + this.props.match.params.id}><p>Meet with Team Leader</p></LinkContainer>
                        <LinkContainer to={"/Project/DraftCharter/" + this.props.match.params.id}><p>Draft Charter</p></LinkContainer>
                    </td>
                    <td>
                    <LinkContainer to={"/Project/Process/" + this.props.match.params.id}><p>Process Walk</p></LinkContainer>
                    <LinkContainer to={"/Project/FinalizeCharter/" + this.props.match.params.id}><p>Finalize Charter</p></LinkContainer>
                    <LinkContainer to={"/Project/ReviewKPI/" + this.props.match.params.id}><p>Review KPI</p></LinkContainer>
                    <LinkContainer to={"/Project/IdentifyEventLocation/" + this.props.match.params.id}><p>Identify Event Location</p></LinkContainer>
                    <LinkContainer to={"/Project/DistributeEventNotification/" + this.props.match.params.id}><p>Distribute Event Notification and Charter</p></LinkContainer>
                    <LinkContainer to={"/Project/ScheduleInOutBrief/" + this.props.match.params.id}><p>Schedule In/Brief Out Brief</p></LinkContainer>
                        </td>
                        <td>
                        <LinkContainer to={"/Project/TeamProcessWalk/" + this.props.match.params.id}><p>Team Process Walk</p></LinkContainer>
                        <LinkContainer to={"/Project/TeamKickOffAwarenessTraining/" + this.props.match.params.id}><p>Team Kick-Off and Awareness Training</p></LinkContainer>
                        <LinkContainer to={"/Project/ValidateDataCollection/" + this.props.match.params.id}><p>Validate Data Collection</p></LinkContainer>
                        <LinkContainer to={"/Project/ObtainSupplies/" + this.props.match.params.id}><p>Obtain Supplies</p></LinkContainer>
                        <LinkContainer to={"/Project/EventGoNoGO/" + this.props.match.params.id}><p>Event Go/No-Go</p></LinkContainer>
                        <LinkContainer to={"/Project/RoomSetUp/" + this.props.match.params.id}><p>Room Set-Up</p></LinkContainer>
                    </td>
                    <td>
                <LinkContainer to={"/Project/ClairfyValidateProblem/" + this.props.match.params.id}><p>Clarify and Validate the Problem</p></LinkContainer>
                <LinkContainer to={"/Project/IdentifyPerformanceGaps/" + this.props.match.params.id}><p>Identify Performance Gaps</p></LinkContainer>
                <LinkContainer to={"/Project/SetImprovementTargets/" + this.props.match.params.id}><p>Set Improvement Target</p></LinkContainer>
                <LinkContainer to={"/Project/DetermineRootCauses/" + this.props.match.params.id}><p>Determine Root Cause(s)</p></LinkContainer>
                <LinkContainer to={"/Project/DevelopeCountermeasures/" + this.props.match.params.id}><p>Develop Countermeasures</p></LinkContainer>
                    </td>
                    <td>
                    <LinkContainer to={"/Project/SeeCountermeasuresThrough/" + this.props.match.params.id}><p>See Countermeasures Through</p></LinkContainer>
                    <LinkContainer to={"/Project/ValidateResults/" + this.props.match.params.id}><p>Validate Results</p></LinkContainer>
                    </td>

                    <td>
                        <LinkContainer to={"/Project/StandardizeSuccessfulProcess/" + this.props.match.params.id}><p>Standardize Successful Process</p></LinkContainer>
                    </td>
                </tbody>
                </table>
            </div>
        );
    }
}