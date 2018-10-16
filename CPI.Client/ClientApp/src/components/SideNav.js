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
                    <li className="project-nav" tabIndex={1}>
						<a href={"/Project/PreEventPlanningOverview/" + this.props.match.params.id}>Pre-Event Planning</a>
                        <ul className="usa-sidenav-sub_list ">
							<li>
                                <a>Initial Data Collection</a>
                            </li>
							<li>
								<LinkContainer to={"/Project/AnalyzeData" + this.props.match.params.id}>
									<a>Analyze Data</a>
								</LinkContainer>
                            </li>
                            <li>
								<a href={"/Project/RequestMentor" + this.props.match.params.id}>Request Mentor</a>
                            </li>
                            <li>
								<a href={"/Project/MeetWithChampion" + this.props.match.params.id}>Meet With Champion</a>
                            </li>
                            <li>
								<a href={"/Project/MeetwithTeamLeader" + this.props.match.params.id}>Meet with Team Leader</a>
                            </li>
                            <li>
								<a href={"/Project/DraftCharter" + this.props.match.params.id}>Draft Charter</a>
                            </li>
                        </ul>
                    </li>
                    <li className="project-nav" tabIndex={2}>
                        <a>Pre-Event Preparation</a>
                        <ul className="usa-sidenav-sub_list">
                            <li>
								<a href={"/Project/Process" + this.props.match.params.id}>Process Walk</a>
                            </li>
                            <li>
								<a href={"/Project/FinalizeCharter" + this.props.match.params.id}>Finalize Charter</a>
                            </li>
                            <li>
								<a href={"/Project/ReviewKPI" + this.props.match.params.id}>Review KPI</a>
                            </li>
                            <li>
								<a href={"/Project/IdentifyEventLocation" + this.props.match.params.id}>Identify Event Location</a>
                            </li>
                            <li>
								<a href={"/Project/DistributeEventNotification" + this.props.match.params.id}>Distribute Event Notification and Charter</a>
                            </li>
                            <li>
								<a href={"/Project/ScheduleInOutBrief" + this.props.match.params.id}>Schedule In Brief/Out Brief</a>
                            </li>
                            <li>
								<a href={"/Project/TeamProcessWalk" + this.props.match.params.id}>Team Process Walk</a>
                            </li>
                            <li>
								<a href={"/Project/TeamKickOffAwarenessTraining" + this.props.match.params.id}>Team Kick-Off and Awareness Training</a>
                            </li>
                            <li>
								<a href={"/Project/ValidateDataCollection" + this.props.match.params.id}>Validate Data Collection</a>
                            </li>
                            <li>
								<a href={"/Project/ObtainSupplies" + this.props.match.params.id}>Obtain Supplies</a>
                            </li>
                            <li>
								<a href={"/Project/EventGoNoGO" + this.props.match.params.id}>Event Go/No-Go</a>
                            </li>
                            <li>
								<a href={"/Project/RoomSetUp" + this.props.match.params.id}>Room Set-Up</a>
                            </li>
                        </ul>
                    </li>
                    <li className="project-nav" tabIndex={3}>
                        <a >Event Execution</a>    
                        <ul className="usa-sidenav-sub_list">
                            <li>
								<a href={"/Project/ClairfyValidateProblem" + this.props.match.params.id}>1. Clarify and Validate the Problem</a>
                            </li>
                            <li>
								<a href={"/Project/IdentifyPerformanceGaps" + this.props.match.params.id}>2. Identify Performance Gaps</a>
                            </li>
                            <li>
								<a href={"/Project/SetImprovementTargets" + this.props.match.params.id}>3. Set Improvement Targets</a>
                            </li>
                            <li>
								<a href={"/Project/DetermineRootCauses" + this.props.match.params.id}>4. Determine Root Cause(s)</a>
                            </li>
                            <li>
								<a href={"/Project/DevelopeCountermeasures" + this.props.match.params.id}>5. Develope Countermeasures</a>
                            </li>
                            </ul>
                    </li>
                    <li className="project-nav" tabIndex={4}>
                        <a >Post-Event Implementation</a>
                        <ul className="usa-sidenav-sub_list">
                                <li>
									<a href={"/Project/SeeCountermeasuresThrough" + this.props.match.params.id}>6. See Countermeasures Through</a>
                                </li>
                                <li>
								<a href={"/Project/ValidateResults" + this.props.match.params.id}> 7. Validate Results</a>
                                </li>
                            </ul>
                    </li>
                    <li className="project-nav" tabIndex={5}>
                        <a >
                            Post-Event Follow Up
                        </a>
                        <ul className="usa-sidenav-sub_list">
                            <li>
								<a href={"/Project/StandardizeSuccessfulProcess" + this.props.match.params.id}>8. Standardize Successful Process</a>
                            </li>
                        </ul>
                    </li>
				</ul>
			</div>
        );
    }
}