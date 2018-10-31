import React, { Component } from 'react';
import './css/uswds.css';
import './css/projectnav.css';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

export class SideNav extends Component {
    displayName = SideNav.name

	static contextTypes = {
		router: PropTypes.object
	}

    constructor(props, context) {
		super(props, context)
		this.state = { selectedID: ""}
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(event) {
		if (event.target.id !== this.state.selectedID) {
			this.setState({ selectedID: event.target.id })
		} else {
			this.setState({ selectedID: "" })
		}
	}

    render() {        
        var navHeight = {
            height: '905px'
        };
		/*
		 Fix focus of parent <a>'s, add onClick event for each parent a that sets the className or style of itself and the others
		 */
        
		return (
			<div className="sidenav sticky" style={navHeight}>
                <ul className="usa-sidenav-list ">
					<li className={"project-nav " + (this.state.selectedID == "PreEventPlanning" ? "selected" : "")} tabIndex={1}>
						<a onClick={this.handleSelect} id="PreEventPlanning">Pre-Event Planning</a>
                        <ul className="usa-sidenav-sub_list ">
							<li>
								<LinkContainer to={"/Project/DataCollection/" + this.props.match.params.id} ><a> Initial Data Collection</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/AnalyzeData/" + this.props.match.params.id}><a>Analyze Data</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/RequestMentor/" + this.props.match.params.id}><a>Request Mentor</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/MeetWithChampion/" + this.props.match.params.id}><a>Meet With Champion</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/MeetwithTeamLeader/" + this.props.match.params.id}><a>Meet with Team Leader</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/DraftCharter/" + this.props.match.params.id}><a>Draft Charter</a></LinkContainer>
                            </li>
                        </ul>
                    </li>
					<li className={"project-nav " + (this.state.selectedID == "PreEventPreparation" ? "selected" : "")} tabIndex={2}>
						<a id="PreEventPreparation" onClick={this.handleSelect} >Pre-Event Preparation</a>
                        <ul className="usa-sidenav-sub_list">
							<li>
								<LinkContainer to={"/Project/ProcessWalk/" + this.props.match.params.id}><a>Process Walk</a></LinkContainer>
                            </li>
							<li>
								<LinkContainer to={"/Project/FinalizeCharter/" + this.props.match.params.id}><a>Finalize Charter</a></LinkContainer>
                            </li>
                            <li>
								<LinkContainer to={"/Project/ReviewKPI/" + this.props.match.params.id}><a>Review KPI</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/IdentifyEventLocation/" + this.props.match.params.id}><a>Identify Event Location</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/DistributeEventNotification/" + this.props.match.params.id}><a>Distribute Event Notification and Charter</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/ScheduleInOutBrief/" + this.props.match.params.id}><a>Schedule In Brief/Out Brief</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/TeamProcessWalk/" + this.props.match.params.id}><a>Team Process Walk</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/TeamKickOffAwarenessTraining/" + this.props.match.params.id}><a>Team Kick-Off and Awareness Training</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/ValidateDataCollection/" + this.props.match.params.id}><a>Validate Data Collection</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/ObtainSupplies/" + this.props.match.params.id}><a>Obtain Supplies</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/EventGoNoGO/" + this.props.match.params.id}><a>Event Go/No-Go</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/RoomSetUp/" + this.props.match.params.id}><a>Room Set-Up</a></LinkContainer>
                            </li>
                        </ul>
                    </li>
					<li className={"project-nav " + (this.state.selectedID == "EventExecution" ? "selected" : "")} tabIndex={3}>
						<a id="EventExecution" onClick={this.handleSelect}>Event Execution</a>    
                        <ul className="usa-sidenav-sub_list">
                            <li>
							<LinkContainer to={"/Project/ClarifyValidateProblem/" + this.props.match.params.id}><a>1. Clarify and Validate the Problem</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/IdentifyPerformanceGaps/" + this.props.match.params.id}><a>2. Identify Performance Gaps</a></LinkContainer>
                            </li>
							<li>
							<LinkContainer to={"/Project/SetImprovementTargets/" + this.props.match.params.id}><a>3. Set Improvement Targets</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/DetermineRootCause/" + this.props.match.params.id}><a>4. Determine Root Cause(s)</a></LinkContainer>
                            </li>
                            <li>
							<LinkContainer to={"/Project/DevelopCountermeasures/" + this.props.match.params.id}><a>5. Develop Countermeasures</a></LinkContainer>
                            </li>
                            </ul>
                    </li>
					<li className={"project-nav " + (this.state.selectedID == "PostEventImplementation" ? "selected" : "")} tabIndex={4}>
						<a id="PostEventImplementation" onClick={this.handleSelect} >Post-Event Implementation</a>
                        <ul className="usa-sidenav-sub_list">
                                <li>
							<LinkContainer to={"/Project/SeeCountermeasuresThrough/" + this.props.match.params.id}><a>6. See Countermeasures Through</a></LinkContainer>
                                </li>
                                <li>
							<LinkContainer to={"/Project/ConfirmResults/" + this.props.match.params.id}><a>7. Validate Results</a></LinkContainer>
                                </li>
                            </ul>
					</li>
					<li className={"project-nav " + (this.state.selectedID == "PostEventFollowUp" ? "selected" : "")} tabIndex={5}>
						<a id="PostEventFollowUp" onClick={this.handleSelect} >
                            Post-Event Follow Up
                        </a>
                        <ul className="usa-sidenav-sub_list">
							<li>
							<LinkContainer to={"/Project/StandardizeSuccessfulProcess/" + this.props.match.params.id}><a>8. Standardize Successful Process</a></LinkContainer>
                            </li>
                        </ul>
                    </li>
				</ul>
			</div>
        );
    }
}