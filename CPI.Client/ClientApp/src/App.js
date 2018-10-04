import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { MenuHeader } from './components/MenuHeader';
import { CreateProject } from './components/CreateProject';
import { Projects } from './components/Projects';
import { Project } from './components/Project';
import { ProjectOverview } from './components/ProjectOverview';
import { withRouter } from 'react-router';

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
            <Route path="/Project/:id/:Page" component={Project} />
            <Route path='/ProjectOverview' component={ProjectOverview} />
            <Route path='/BaselineData' component={BaselineData} />
            <Route path='/AnalyzeData' component={AnalyzeData} />
            <Route path='/RequestAMentor' component={RequestAMentor} />
            <Route path='/PreEventPrepOverview' component={PreEventPrepOverview} />
            <Route path='/ProcessWalk' component={ProcessWalk} />
            <Route path='/PreEventPlanningOverview' component={PreEventPlanningOverview} />
            <Route path='/Validatecharter' from component={ValidateCharter} />
            <Route path='/ReviewKPI' from component={ReviewKPI} />
            <Route path='/IdentifyEventLocation' from component={IdentifyEventLocation} />
            <Route path='/DistributeEventNotification' from component={DistributeEventNotification} />
            <Route path='/ScheduleInOutBrief' from component={ScheduleInOutBrief} />
            <Route path='/TeamProcessWalk' from component={TeamProcessWalk} />
            <Route path='/TeamKickOffAwarenessTraining' from component={TeamKickOffAwarenessTraining} />
            <Route path='/ValidateDataCollection' from component={ValidateDataCollection} />
            <Route path='/ObtainSupplies' from component={ObtainSupplies} />
            <Route path='/EventGoNoGo' from component={EventGoNoGo} />
            <Route path='/RoomSetup' from component={RoomSetup} />
        </Layout>
    );
  }
}
