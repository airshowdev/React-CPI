import React, { Component } from 'react';
import './css/uswds.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { MenuHeader } from './MenuHeader';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <Grid fluid>
        <Row>
            <Col>
                <MenuHeader/>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
            {this.props.children}
            </Col>
        </Row>

      </Grid>
    );
  }
}
