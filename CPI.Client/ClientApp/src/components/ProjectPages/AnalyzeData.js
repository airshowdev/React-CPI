import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons.js'
import '../css/HallMartino.css';


/*
 height: num
 width: num
 data:[
  {x: label, y: num },
 ]
 */

export class AnalyzeData extends Component {

    displayName = AnalyzeData.name;

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, BarData: {}, loading: true };   
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, championGoal: data.Champion.Goal, Type: data.DataCollection.Type });
            });
    }

    getBarLabels() {
        var out = [];
        this.state.project.DataCollection.Elements.map(x => out.push(x.Name));
    }

    getBarData(goal, heightIn, widthIn) {
        var out = [];

        switch (this.state.project.DataCollection.Type) {
            case "NVA":
                this.state.project.DataCollection.map(x => out.push(this.calculateNVA(x.VA, x.NVA)));
                break;
            case "OnTime":
                break;
        }

        out.push({ x: "Goal", y: parseFloat(goal) });

        return {
            height: parseInt(heightIn),
            width: parseInt(widthIn),
            data: out
        };
    }

    calculateNVA(va, nva) {
        var fltVA = parseFloat(va);
        var fltNVA = parseFloat(nva);

        return (fltNVA * 100) / (fltNVA + fltVA);
    }

    calculateTotalNVA(elements) {
        var totalNVA = 0;
        var totalVA = 0;
        this.state.project.DataCollection.Elements.map(x => {
            totalVA += parseFloat(x.VA);
            totalNVA += parseFloat(x.NVA);
        });

        return this.calculateNVA(totalVA, totalNVA);
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