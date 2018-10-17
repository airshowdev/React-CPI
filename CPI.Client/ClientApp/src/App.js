import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { CreateProject } from './components/CreateProject';
import { Projects } from './components/Projects';
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
import { ChampionResponse } from './components/ChampionResponse';
import { OnTimeDataCollection } from './components/ProjectPages/OnTimeDataCollection';
import { DataCollection } from './components/ProjectPages/DataCollection';


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
            <Route path="/Project/NVAData/:id" component={NVADataCollection} />
            <Route path="/Project/OnTimeData/:id" component={OnTimeDataCollection} />
			<Route exact path='/' component={Projects} />
            <Route exact path='/CreateProject' component={CreateProject} />
			<Route exact path='/Projects' component={Projects} />
			<Route path='/Project/DataCollection/:id' component={DataCollection}/>
			<Route path='/Project/RequestAMentor/:id' component={RequestAMentor} />
			<Route path='/Project/PreEventPrepOverview/:id' component={PreEventPrepOverview} />
			<Route path='/Project/ProcessWalk/:id' component={ProcessWalk} />
			<Route path='/Project/PreEventPlanningOverview/:id' component={PreEventPlanningOverview} />
			<Route path='/Project/Validatecharter/:id' component={ValidateCharter} />
			<Route path='/Project/ReviewKPI/:id' component={ReviewKPI} />
			<Route path='/Project/IdentifyEventLocation/:id' component={IdentifyEventLocation} />
			<Route path='/Project/DistributeEventNotification/:id' component={DistributeEventNotification} />
			<Route path='/Project/ScheduleInOutBrief/:id' component={ScheduleInOutBrief} />
			<Route path='/Project/TeamProcessWalk/:id' component={TeamProcessWalk} />
			<Route path='/Project/TeamKickOffAwarenessTraining/:id' component={TeamKickOffAwarenessTraining} />
			<Route path='/Project/ValidateDataCollection/:id' component={ValidateDataCollection} />
			<Route path='/Project/ObtainSupplies/:id' component={ObtainSupplies} />
			<Route path='/Project/EventGoNoGo/:id' from component={EventGoNoGo} />
			<Route path='/Project/RoomSetup/:id' from component={RoomSetup} />
			<Route path='/Project/ProjectOverview/:id' component={ProjectOverview}/>
            <Route path='/Project/ProjectInfo/:id' component={ProjectInfo} />
            <Route path='/Project/AnalyzeData/:id' component={AnalyzeData} />
			<Route path='/BaselineData:id' component={BaselineData} />
            <Route path='/StandardizeSuccessfulProject/:id' component={StandardizeSuccessfulProject} />
            <Route path='/PostEventFollowUp/:id' component={PostEventFollowUp} />
			<Route path='/Project/StandardizeSuccessfulProcess/:id' component={StandardizeSuccessfulProcess} />
			<Route path='/Project/PostEventFollowUpOverview/:id' component={PostEventFollowUpOverview} />
			<Route path='/Project/ChampionResponse/:id' component={ChampionResponse} />
			<Route path='/Project/ConfirmResults/:id' component={ConfirmResults} />
			<Route path='/Project/SeeCountermeasuresThrough/:id' component={SeeCountermeasuresThrough} />
			<Route path='/Project/PostEventImplementationOverview/:id' component={PostEventImplementationOverview} />
			<Route path='/Project/DevelopCountermeasures/:id' component={DevelopCountermeasures} />
			<Route path='/Project/DetermineRootCause/:id' component={DetermineRootCause} />
			<Route path='/Project/IdentifyPerformanceGaps/:id' component={IdentifyPerformanceGaps} />
			<Route path='/Project/SetImprovementTargets/:id' component={SetImprovementTargets} />
        </Layout>
    );
  }
}




