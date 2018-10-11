import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { CreateProject } from './components/CreateProject';
import { Projects } from './components/Projects';
import { Project } from './components/Project';
import { ProjectInfo } from './components/ProjectInfo';
import { ProjectOverview } from './components/ProjectPages/ProjectOverview';
import { PreEventPlanningOverview } from './components/ProjectPages/PreEventPlanningOverview';
import { BaselineData } from './components/ProjectPages/BaselineData';
import { AnalyzeData } from './components/ProjectPages/AnalyzeData';
import { RequestAMentor } from './components/ProjectPages/RequestAMentor';
import { PreEventPrepOverview } from './components/ProjectPages/PreEventPrepOverview';
import { ProcessWalk } from './components/ProjectPages/ProcessWalk';
import { ValidateCharter } from './components/ProjectPages/ValidateCharter';
import { ReviewKPI } from './components/ProjectPages/ReviewKPI';
import { IdentifyEventLocation } from './components/ProjectPages/IdentifyEventLocation';
import { DistributeEventNotification } from './components/ProjectPages/DistributeEventNotification';
import { ScheduleInOutBrief } from './components/ProjectPages/ScheduleInOutBrief';
import { TeamProcessWalk } from './components/ProjectPages/TeamProcessWalk';
import { TeamKickOffAwarenessTraining } from './components/ProjectPages/TeamKickOffAwarenessTraining';
import { ValidateDataCollection } from './components/ProjectPages/ValidateDataCollection';
import { ObtainSupplies } from './components/ProjectPages/ObtainSupplies';
import { EventGoNoGo } from './components/ProjectPages/EventGoNoGo';
import { RoomSetup } from './components/ProjectPages/RoomSetup';
import { NVADataCollection } from './components/ProjectPages/NVADataCollection';
import { StandardizeSuccessfulProject } from './components/StandardizeSuccessfulProject';
import { PostEventFollowUp } from './components/PostEventFollowUp';
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
            <Route path="/NVAData/:id" component={NVADataCollection} />
			<Route exact path='/' component={Projects} />
            <Route exact path='/CreateProject' component={CreateProject} />
            <Route exact path='/Projects' component={Projects} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path='/Project/ProjectOverview/' component={ProjectOverview} />
			<Route path='/Project/BaselineData/' component={BaselineData} />
			<Route path='/Project/AnalyzeData/:id' component={AnalyzeData} />
=======

            <Route path="/Project/:id" component={Project} />
            <Route path='/Project/ProjectOverview/' component={ProjectOverview}/>
            <Route path='/Project/BaselineData/' component={BaselineData} />
			<Route path='/Project/AnalyzeData/' component={AnalyzeData} />
>>>>>>> Views
			<Route path='/Project/RequestAMentor/' component={RequestAMentor} />
			<Route path='/Project/PreEventPrepOverview/' component={PreEventPrepOverview} />
			<Route path='/Project/ProcessWalk/' component={ProcessWalk} />
			<Route path='/Project/PreEventPlanningOverview/' component={PreEventPlanningOverview} />
<<<<<<< HEAD
			<Route path='/Project/Validatecharter/' from component={ValidateCharter} />
			<Route path='/Project/ReviewKPI/' from component={ReviewKPI} />
			<Route path='/Project/IdentifyEventLocation/' from component={IdentifyEventLocation} />
			<Route path='/Project/DistributeEventNotification/' from component={DistributeEventNotification} />
			<Route path='/Project/ScheduleInOutBrief/' from component={ScheduleInOutBrief} />
			<Route path='/Project/TeamProcessWalk/' from component={TeamProcessWalk} />
			<Route path='/Project/TeamKickOffAwarenessTraining/' from component={TeamKickOffAwarenessTraining} />
			<Route path='/Project/ValidateDataCollection/' from component={ValidateDataCollection} />
			<Route path='/Project/ObtainSupplies/' from component={ObtainSupplies} />
			<Route path='/Project/EventGoNoGo/' from component={EventGoNoGo} />
			<Route path='/Project/RoomSetup/' from component={RoomSetup} />
			<Route path='/Project/ProjectOverview/' component={ProjectOverview}/>
            <Route path='/Project/ProjectInfo/:id' component={ProjectInfo} />
            <Route path='/Project/AnalyzeData/' component={AnalyzeData} />
=======
            <Route path="/Project/:id/:Page" component={Project} />
            <Route path='/ProjectOverview' component={ProjectOverview} />
            <Route path='/BaselineData' component={BaselineData} />
            <Route path='/AnalyzeData' component={AnalyzeData} />
            <Route path='/RequestAMentor' component={RequestAMentor} />
            <Route path='/StandardizeSuccessfulProject' component={StandardizeSuccessfulProject} />
            <Route path='/PostEventFollowUp' component={PostEventFollowUp} />
>>>>>>> Views-Cyriac
=======
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
>>>>>>> Views
        </Layout>
    );
  }
}




