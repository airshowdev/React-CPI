import React, { Component } from 'react';
import './css/uswds.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { MenuHeader } from './MenuHeader';
import { SideNav } from './SideNav';
import { Route } from 'react-router';

export class Layout extends Component {
    displayName = Layout.name
    constructor() {
        super();
    }
  render() {
      return (
        <Grid>
        <Row>
        <Col>
            <MenuHeader />
        </Col>
        </Row>
            <Row>
                  <Col sm={3}>
                      <Route path="/Project/:Page/:id" Component={SideNav}/>
                    </Col>
                <Col sm={9} >
                    {this.props.children}
                </Col>
            </Row>
        </Grid>
    );
  }
}
