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
import { AnalyzeData } from './components/AnalyzeData';
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
            <Route path='/Project/ProjectOverview/:id' component={ProjectOverview} />
			<Route path='/Project/BaselineData/:id' component={BaselineData} />
			<Route path='/Project/AnalyzeData/:id' component={AnalyzeData} />
			<Route path='/Project/RequestAMentor/:id' component={RequestAMentor} />
			<Route path='/Project/PreEventPrepOverview/:id' component={PreEventPrepOverview} />
			<Route path='/Project/ProcessWalk/:id' component={ProcessWalk} />
			<Route path='/Project/PreEventPlanningOverview/:id' component={PreEventPlanningOverview} />
			<Route path='/Project/Validatecharter/:id' from component={ValidateCharter} />
			<Route path='/Project/ReviewKPI/:id' from component={ReviewKPI} />
			<Route path='/Project/IdentifyEventLocation/:id' from component={IdentifyEventLocation} />
			<Route path='/Project/DistributeEventNotification/:id' from component={DistributeEventNotification} />
			<Route path='/Project/ScheduleInOutBrief/:id' from component={ScheduleInOutBrief} />
			<Route path='/Project/TeamProcessWalk/:id' from component={TeamProcessWalk} />
			<Route path='/Project/TeamKickOffAwarenessTraining/:id' from component={TeamKickOffAwarenessTraining} />
			<Route path='/Project/ValidateDataCollection/:id' from component={ValidateDataCollection} />
			<Route path='/Project/ObtainSupplies/:id' from component={ObtainSupplies} />
			<Route path='/Project/EventGoNoGo/:id' from component={EventGoNoGo} />
			<Route path='/Project/RoomSetup/:id' from component={RoomSetup} />
			<Route path='/Project/ProjectOverview/:id' component={ProjectOverview}/>
            <Route path='/Project/ProjectInfo/:id' component={ProjectInfo} />
            <Route path="/Project/AnalyzeData/:id" component={AnalyzeData} />
        </Layout>
    );
  }
}


//<Route path='/DetermineRootCause' from component={DetermineRootCause} />
//<Route path='/DevelopCountermeasures' from component={DevelopCountermeasures} />
