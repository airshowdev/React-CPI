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

import { MeetingChampionPpt } from './components/MeetingChampionPpt'; //Added by Cyriac 11 Oct 2018 for viewing the Meeting Champion PowerPoint
import { EventCharter } from './components/EventCharter'; //Added by Cyriac 15 Oct 2018 for viewing the Event Charter


//adding in more routes to test pages
import { MeetWithChampion } from './components/ProjectPages/MeetWithChampion';
import { MeetWithTeamLead } from './components/ProjectPages/MeetWithTeamLead';
import { DraftCharter } from './components/ProjectPages/DraftCharter';

export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props)
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
			<Route path='/Project/RequestMentor/:id' component={RequestAMentor} />
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
			<Route path='/Project/MeetingChampionPpt/:id' component={MeetingChampionPpt} /> {/*Added by Cyriac 11 Oct 2018 for viewing the Meeting Champion PowerPoint*/}
			<Route path='/Project/EventCharter/:id' component={EventCharter} /> {/*Added by Cyriac 15 Oct 2018 for viewing the Event Charter*/}
			{/* adding in more routes to test pages */}
			<Route path='/Project/MeetWithChampion/:id' component={MeetWithChampion} />
			<Route path='/Project/MeetWithTeamLeader/:id' component={MeetWithTeamLead} />
			<Route path='/Project/DraftCharter/:id' component={DraftCharter} />

			{/* adding in more routes to test */}
			<Route path='/Project/ClarifyValidateProblem/:id' component={ClarifyValidateProblem} />
			<Route path='/Project/EventExecutionOverview/:id' component={EventExecutionOverview} /
        </Layout>
    );
  }
}