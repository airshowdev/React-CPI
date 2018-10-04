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
        </Layout>
    );
  }
}
