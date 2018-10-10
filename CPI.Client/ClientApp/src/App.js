import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { MenuHeader } from './components/MenuHeader';
import { CreateProject } from './components/CreateProject';
import { Projects } from './components/Projects';
import { Project } from './components/Project';
import { ProjectOverview } from './components/ProjectOverview';
import { withRouter } from 'react-router';
import { ProjectInfo } from './components/ProjectInfo';
import { AnalyzeData } from './components/AnalyzeData';

import { PreEventPlanningOverview } from './components/PreEventPlanningOverview';
import { BaselineData } from './components/BaselineData';
import { RequestAMentor } from './components/RequestAMentor';
import { PreEventPrepOverview } from './components/PreEventPrepOverview';
import { ProcessWalk } from './components/ProcessWalk';
import { ValidateCharter } from './components/ValidateCharter';
import { ReviewKPI } from './components/ReviewKPI';
import { IdentifyEventLocation } from './components/IdentifyEventLocation';
import { DistributeEventNotification } from './components/DistributeEventNotification';
import { ScheduleInOutBrief } from './components/ScheduleInOutBrief';
import { TeamProcessWalk } from './components/TeamProcessWalk';
import { TeamKickOffAwarenessTraining } from './components/TeamKickOffAwarenessTraining';
import { ValidateDataCollection } from './components/ValidateDataCollection';
import { ObtainSupplies } from './components/ObtainSupplies';
import { EventGoNoGo } from './components/EventGoNoGo';
import { RoomSetup } from './components/RoomSetup';
import { EventExecutionOverview } from './components/EventExecutionOverview';
import { ClarifyValidateProblem } from './components/ClarifyValidateProblem';
import { IdentifyPerformanceGaps } from './components/IdentifyPerformanceGaps';
import { SetImprovementTargets } from './components/SetImprovementTargets';
import { DetermineRootCause } from './components/DetermineRootCause';
import { DevelopCountermeasures } from './components/DevelopCountermeasures';
import { PostEventImplementationOverview } from './components/PostEventImplementationOverview';
import { SeeCountermeasuresThrough } from './components/SeeCountermeasuresThrough';
import { ConfirmResults } from './components/ConfirmResults';
import { StandardizeSuccessfulProcess } from './components/StandardizeSuccessfulProcess';
import { PostEventFollowUpOverview } from './components/PostEventFollowUpOverview';
import { MeetWithChampion } from './components/MeetWithChampion';
import { ChampionResponse } from './components/ChampionResponse';


export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props)

       //this.setCurrentProject = this.setCurrentProject.bind(this);

        //this.state.currentProject = "";
    }

    setCurrentProject() {
        /*is.setState({
            currentProject: ""
        });*/
    }

  render() {
    return (
        <Layout>
            <Route exact path='/CreateProject' component={CreateProject} />
            <Route exact path='/Projects' component={Projects} />

            <Route path="/Project/:id" component={Project} />
            <Route path='/Project/ProjectOverview/' component={ProjectOverview}/>
            <Route path='/Project/BaselineData/' component={BaselineData} />
			<Route path='/Project/AnalyzeData/' component={AnalyzeData} />
			<Route path='/Project/RequestAMentor/' component={RequestAMentor} />
			<Route path='/Project/PreEventPrepOverview/' component={PreEventPrepOverview} />
			<Route path='/Project/ProcessWalk/' component={ProcessWalk} />
			<Route path='/Project/PreEventPlanningOverview/' component={PreEventPlanningOverview} />
			<Route path='/Project/Validatecharter/' component={ValidateCharter} />
			<Route path='/Project/ReviewKPI/' component={ReviewKPI} />
			<Route path='/Project/IdentifyEventLocation/' component={IdentifyEventLocation} />
			<Route path='/Project/DistributeEventNotification/' component={DistributeEventNotification} />
			<Route path='/Project/ScheduleInOutBrief/' component={ScheduleInOutBrief} />
			<Route path='/Project/TeamProcessWalk/' component={TeamProcessWalk} />
			<Route path='/Project/TeamKickOffAwarenessTraining/' component={TeamKickOffAwarenessTraining} />
			<Route path='/Project/ValidateDataCollection/' component={ValidateDataCollection} />
			<Route path='/Project/ObtainSupplies/' component={ObtainSupplies} />
			<Route path='/Project/EventGoNoGo/' component={EventGoNoGo} />
			<Route path='/Project/RoomSetup/' component={RoomSetup} />
            <Route path='/Project/ProjectInfo/' component={ProjectInfo} />
            <Route path='/Project/SetImprovementTargets/' component={SetImprovementTargets} />
            <Route path='/Project/IdentifyPerformanceGaps/' component={IdentifyPerformanceGaps} />
            <Route path='/Project/DetermineRootCause/' component={DetermineRootCause} />
            <Route path='/Project/DevelopCountermeasures/' component={DevelopCountermeasures} />
            <Route path='/Project/PostEventImplementationOverview/' component={PostEventImplementationOverview} />
            <Route path='/Project/SeeCountermeasuresThrough/' component={SeeCountermeasuresThrough} />
            <Route path='/Project/ConfirmResults/' component={ConfirmResults} />
            <Route path='/Project/StandardizeSuccessfulProcess/' component={StandardizeSuccessfulProcess} />
            <Route path='/Project/PostEventFollowUpOverview/' component={PostEventFollowUpOverview} />
            <Route path='/Project/MeetWithChampion/' component={MeetWithChampion} />
            <Route path='/Project/ChampionResponse/' component={ChampionResponse} />
        </Layout>
    );
  }
}




