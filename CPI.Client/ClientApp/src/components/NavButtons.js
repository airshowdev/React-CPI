import React, { Component } from "react";
import './css/uswds.css';
import PropTypes from 'prop-types';

export class NavButtons extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    displayName = NavButtons.name
    render() {
        return (
            <div className="button-nav">
                <div id="left">
                    <button onClick={() => this.context.router.history.push('/Project/' + this.props.previous + '/' + this.props.projectId)} className="usa-button">Previous</button>
				</div>
				<span id="center">{this.props.title}</span>

				<div id="right">
                    <button onClick={() => this.context.router.history.push('/Project/' + this.props.next + '/' + this.props.projectId)} className="usa-button">Next</button>
                </div>
            </div>
        );
    }
}