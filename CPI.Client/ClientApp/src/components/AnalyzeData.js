import React, { Component } from 'react';
import './css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2'

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