import React, { Component } from 'react';
import './css/uswds.css';
import REST, { Post } from '../REST';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { SideNav } from './SideNav';

export class Project extends Component {


    displayName = Project.name

    constructor(props) {
        super(props);
        this.state = { project: {} };
        this.handleClick = this.handleSubmit.bind(this);     
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ project: data });
            });
    }

    handleSubmit(event) {
        event.PreventDefault();
        const form = event.target;
        const data = new FormData(event);

        for (let name of data.keys()) {
            data.set(name, form.elements[name]);
        }

        REST.Post( data, "Project", "UpdateProject");
    }

    render() {
    //    let contents = <div>yahYEET</div>;
    //    if (this.props.match.params.Page !== null) {
    //        switch (this.props.match.params.Page) {
    //            case "ProjectOverview":
    //                contents = <ProjectOverview Page={this.props.match.params} id={this.props.match.params}/>;
    //                break;
    //            case "InitialDataCollection":
    //                contents = <ProjectOverview Page={this.props.match.params} id={this.props.match.params}/>;
    //                break;
    //            case "AnalyzeData":
    //                contents = <AnalyzeData Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "RequestMentor":
    //                contents = <RequestMentor Page={this.props.match.params} id={this.props.match.params}/>;
    //                break;
    //            case "MeetWithChampion":
    //                contents = <MeetWithChampion Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "MeetWithTeamLead":
    //                contents = <MeetWithTeamLead Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "DraftCharter":
    //                contents = <DraftCharter Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ProcessWalk":
    //                contents = <ProcessWalk Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "FinalizeCharter":
    //                contents = <FinalizeCharter Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ReviewKPI":
    //                contents = <ReviewKPI Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "IdentifyEventLocation":
    //                contents = <IdentifyEventLocation Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "DistributeEVNotification":
    //                contents = <DistributeEVNotification Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ScheduleInBriefOutBrief":
    //                contents = <ScheduleInBriefOutBrief Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "TeamProcessWalk":
    //                contents = <TeamProcessWalk Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "TeamKickOff":
    //                contents = <TeamKickOff Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ValidateDataCollection":
    //                contents = <ValidateDataCollection Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ObtainSupplies":
    //                contents = <ObtainSupplies Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "EventGoNoGo":
    //                contents = <EventGoNoGo Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "RoomSetUp":
    //                contents = <RoomSetUp Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ClarifyAndValidateProblem":
    //                contents = <ClarifyAndValidateProblem Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "IdentifyPerformanceGaps":
    //                contents = <IdentifyPerformanceGaps Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "SetPerformanceTarget":
    //                contents = <SetPerformanceTarget Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "DetermineRootCause":
    //                contents = <DetermineRootCause Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "DevelopCountermeasures":
    //                contents = <DevelopCountermeasures Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "SeeCountermeasuresThrough":
    //                contents = <SeeCountermeasuresThrough Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "ValidateResults":
    //                contents = <ValidateResults Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //            case "StandardizeSuccessfulProcess":
    //                contents = <StandardizeSuccessfulProcess Page={this.props.match.params} id={this.props.match.params} />;
    //                break;
    //        }
    //    }
    //    else
    //    {
    //        contents = Project.renderProject(this.state.project);
    //    }
       
        return (
            <div>
                <div className="usa-grid">
                    {/*contents*/}
                </div>
            </div>
        );
    }
}