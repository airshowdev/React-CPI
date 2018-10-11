import React, { Component } from 'react';
import { Route } from 'react-router';
import './css/uswds.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { MenuHeader } from './MenuHeader';
import { SideNav } from './SideNav';

export class Layout extends Component {
    displayName = Layout.name
    constructor() {
        super();
    }
  render() {
<<<<<<< HEAD
	  return (
		<Grid>
			<Row>
				<Col>
					<MenuHeader />
				</Col>
			</Row>
			<Row>
                  <Col fluid style={{width: '15%'}}>
	    			  <Route path="/Project/:Page/" component={SideNav}/>
				</Col>
                  <Col fluid style={{width: '85%'}}>
					{this.props.children}
				</Col>
			</Row>
		</Grid>
=======
      return (
        <Grid>
        <Row>
        <Col>
            <MenuHeader />
        </Col>
        </Row>
        <Row>
            <Col style={{ float: 'left', width: '15%' }}>
                      <Route path="/Project/:Page" component={SideNav} />
                    </Col>
                  <Col style={{width: '85%', float: 'right'}}>
                    {this.props.children}
                </Col>
            </Row>
        </Grid>
>>>>>>> Views
    );
  }
}
