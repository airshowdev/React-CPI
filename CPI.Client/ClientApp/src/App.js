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
            <Route path='/Project/ProjectInfo/:id' component={ProjectInfo} />
            <Route path='/Project/AnalyzeData/' component={AnalyzeData} />
        </Layout>
    );
  }
}
