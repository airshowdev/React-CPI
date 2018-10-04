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
//import { DetermineRootCause } from './components/DetermineRootCause';
//import { DevelopCountermeasures } from './components/DevelopCountermeasures';


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
            <Route path='/Project/ProjectOverview/' component={ProjectOverview} />
            <Route path='/Project/BaselineData/' component={BaselineData} />
			<Route path='/Project/AnalyzeData/' component={AnalyzeData} />
			<Route path='/Project/RequestAMentor/' component={RequestAMentor} />
			<Route path='/Project/PreEventPrepOverview/' component={PreEventPrepOverview} />
			<Route path='/Project/ProcessWalk/' component={ProcessWalk} />
			<Route path='/Project/PreEventPlanningOverview/' component={PreEventPlanningOverview} />
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
            <Route path='/Project/ProjectInfo/' component={ProjectInfo} />
            <Route path='/Project/SetImprovementTargets/' component={SetImprovementTargets} />
        </Layout>
    );
  }
}


//<Route path='/Project/DetermineRootCause/' from component={DetermineRootCause} />
//<Route path='/Project/DevelopCountermeasures/' from component={DevelopCountermeasures} />
