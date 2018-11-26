﻿import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/HallMartino.css';
import { NavButtons } from '../NavButtons';
import { LinkContainer } from 'react-router-bootstrap';

import DataHandler from '../js/DataHandler';
import { Col, Grid, Row } from 'react-bootstrap';

export class ProjectOverview extends Component {

    displayName = ProjectOverview.name

    constructor(props, context) {
        super(props, context);
        this.state = { project: {}, loading: true };
    }

    async componentDidMount() {
        var dHandler = new DataHandler();
        let data = dHandler.getProject(this.props.match.params.id);
		this.setState({ project: data || {}, loading: false });
    }

    checkDataCollection() {
        return this.state.project.DataCollection.Elements.length > 0;
    }

    checkChampMeeting() {
        return (this.state.project.Champion.Name) &&
            (this.state.project.WingDirectorate) &&
            (this.state.project.ProcessOwner) &&
            (this.state.project.TeamLeads.length > 0) &&
            (this.state.project.Facilitators.length > 0) &&
            (this.state.project.Mentor) &&
            (this.state.project.Champion.Goal);
    }

    checkTeamLead() {
        if (this.state.project.TeamLead.MembersIdentified.length > 0) {
            return true;
        }
        else if (this.state.project.TeamLead.DateRange.Begin && this.state.project.TeamLead.DateRange.End) {
            return true;
        }
        else {
            for (var row in this.state.project.TeamLeadMeeting.SipocRows) {
                if (row.Supplier || row.Input || row.Process || row.Output || row.Customer) {
                    return true;
                }
            }
        }
        return false;
            
    }

    checkCharter() {
        return (this.state.project.DraftCharter.TeamLeadSig && this.state.project.DraftCharter.ChampSig);
    }

    checkClarifyAndValidate(){
        return (this.state.project.ProblemStatement);
    }

    checkPerformanceGaps(){
        return (this.state.project.IdentifyPerformanceGap);
    }

    checkSetImpTargets(){
        return (this.state.project.ImprovementTarget);
    }

    checkRootCauses() {
        return (this.state.project.RootCause.length > 0);
    }

    render() {
		return (
			<Grid>
                <Col style={{ paddingBottom: 15 }}>
                    <NavButtons next="DataCollection" previous="ProjectInfo" projectId={this.props.match.params.id} title="Project Overview" />
				</Col>
				<Col>
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
                    <LinkContainer to={"/Project/ProcessWalk/" + this.props.match.params.id}><p>Process Walk</p></LinkContainer>
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
                <LinkContainer to={"/Project/ClarifyValidateProblem/" + this.props.match.params.id}><p>Clarify and Validate the Problem</p></LinkContainer>
                <LinkContainer to={"/Project/IdentifyPerformanceGaps/" + this.props.match.params.id}><p>Identify Performance Gaps</p></LinkContainer>
                <LinkContainer to={"/Project/SetImprovementTargets/" + this.props.match.params.id}><p>Set Improvement Target</p></LinkContainer>
                <LinkContainer to={"/Project/DetermineRootCause/" + this.props.match.params.id}><p>Determine Root Cause(s)</p></LinkContainer>
                <LinkContainer to={"/Project/DevelopCountermeasures/" + this.props.match.params.id}><p>Develop Countermeasures</p></LinkContainer>
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
				</Col>
			</Grid>
        );
    }
}