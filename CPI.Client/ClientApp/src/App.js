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
            <Route path="/Project/ProjectOverview/:id" component={ProjectOverview} />
            <Route path="/Project/ProjectInfo/:id" component={ProjectInfo} />
            <Route path="/Project/AnalyzeData/:id" component={AnalyzeData} />
        </Layout>
    );
  }
}
