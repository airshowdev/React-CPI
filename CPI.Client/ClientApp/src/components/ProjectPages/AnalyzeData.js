import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/AnalyzeData.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/AnalyzeData.js

>>>>>>> Views-Cyriac:CPI.Client/ClientApp/src/components/AnalyzeData.js
=======
import { Bar } from 'react-chartjs-2';
import './css/HallMartino.css';

>>>>>>> Views:CPI.Client/ClientApp/src/components/AnalyzeData.js

export class AnalyzeData extends Component {

    displayName = AnalyzeData.name;

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, BarData: {}, loading: false };   
    }
	
    render() {
        return (
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
        )
    }    
}