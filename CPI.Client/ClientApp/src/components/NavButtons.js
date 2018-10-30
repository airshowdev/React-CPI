import React, { Component } from "react";
import './css/uswds.css';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

export class NavButtons extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    displayName = NavButtons.name
    render() {
		return (
			<Grid>
				<Col style={{float: 'left'}}>
					<button onClick={() => this.context.router.history.push('/Project/' + this.props.previous + '/' + this.props.projectId)} className="usa-button">Previous</button>
				</Col>
				<Col style={{ float: "right" }}>
					<button onClick={() => this.context.router.history.push('/Project/' + this.props.next + '/' + this.props.projectId)} className="usa-button">Next</button>
				</Col>
			</Grid>
        );
    }
}