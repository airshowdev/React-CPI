import React, { Component } from 'react';
<<<<<<< HEAD:CPI.Client/ClientApp/src/components/ProjectPages/AnalyzeData.js
import '../css/uswds.css';
=======
import './css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';

>>>>>>> Views-Cyriac:CPI.Client/ClientApp/src/components/AnalyzeData.js

export class AnalyzeData extends Component {

    displayName = AnalyzeData.name;

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, BarData: {}, loading: false };   
    }
	
    render() {
        return ( 
            <div>
                <h1> Analyze Data </h1>
          </div>
        )
    }    
}