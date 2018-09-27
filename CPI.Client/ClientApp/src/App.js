import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { MenuHeader } from './components/MenuHeader';
import { CreateProject } from './components/CreateProject';
import { Projects } from './components/Projects';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/CreateProject' component={CreateProject} />
            <Route exact path='/Projects' component={Projects} />
      </Layout>
    );
  }
}
