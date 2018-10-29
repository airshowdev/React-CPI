import React, { Component } from 'react';
import { Route } from 'react-router';
import './css/uswds.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { MenuHeader } from './MenuHeader';
import { SideNav } from './SideNav';

export class Layout extends Component {
    displayName = Layout.name

  render() {
      return (
        <Grid>
        <Row>
        <Col>
            <MenuHeader />
        </Col>
        </Row>
			  <Row style={{paddingTop: "30px"}}>
            <Col style={{ float: 'left', width: '15%' }}>
                      <Route path="/Project/:Page/:id" component={SideNav} />
                  </Col>
                  <Col style={{width: '85%', float: 'right'}}>
                    {this.props.children}
                </Col>
            </Row>
        </Grid>
    );
  }
}
