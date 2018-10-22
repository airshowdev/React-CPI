import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons.js'
import '../css/HallMartino.css';


export class AnalyzeData extends Component {

    displayName = AnalyzeData.name;

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, BarData: {}, loading: false };   
    }
	
    render() {
        return (
            <div>
                <NavButtons next="RequestMentor" previous="DataCollection" projectId={this.props.match.params.id} title="Analyze Data" />
                <div className="paragraph">
                <h1> Analyze Data </h1>
                <div className="one-half-left">
                    <p>Total Reports: 55</p>
                    <p>Total Late Reports: 3 </p>
                    <p>Total On-Time: 52  </p>
                </div>
                <div className="one-half-right">
                    <p>% On Time: 95%</p>
                    <p>Goal: 100%</p>
                    <p>Gap: 5%</p>
                    <p>Champion Goal: 90%</p>
                    <p>Revised Gap: -5%</p>
                </div>
                <h2>RECOMMENDATION</h2>
                    <input readOnly className="center-input" type="text" placeholder="CPI NOT RECOMMENDED" style={{ textAlign: "center", backgroundColor: "#60ea20" }} />
                    </div>
            </div>
        )
    }    
}