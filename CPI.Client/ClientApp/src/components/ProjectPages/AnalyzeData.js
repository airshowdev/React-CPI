import React, { Component } from 'react';
import '../css/uswds.css';
import querystring from 'query-string';
import PropTypes from 'prop-types';
import { NavButtons } from '../NavButtons';
import { DataCollectionStatus } from '../DataCollectionStatus';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';
import { PieChartLegend } from './PieChartLegend';
import '../css/HallMartino.css';
import { loadingSpinner } from '../loadingSpinner';


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
        super(props, context);
        this.state = {Elements: [], championGoal: "", Type: "", loading: true, Standard: ""};   
    }

    componentDidMount() {
        fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, DataCollection: data.DataCollection, championGoal: data.Champion.Goal, Elements: data.DataCollection.Elements, Type: data.DataCollection.Type, Standard: data.DataCollection.Standard });
            });
    }

    //getBarLabels() {
    //    var out = [];
    //    this.state.project.DataCollection.Elements.map(x => out.push(x.Name));
    //    return out;
    //}

    getBarData(goal) {
        var out = [
            {  x: "Actual",
                y: 0 },
            {
                x: 'Goal',
                y: parseFloat(goal)
            }
        ];
        var totalNVA = 0;
        var totalVA = 0;
        switch (this.state.Type) {
            case "NVA":
                this.state.Elements.map(x => { totalNVA += x.NVA; totalVA += x.VA });
                out[0].y = this.calculateTotalNVA();
                break;
            case "OnTime":
                break;
        }
        out.push({ x: "Goal", y: parseFloat(goal) });
        

        return out;

        //return {
        //    height: parseInt(heightIn),
        //    width: parseInt(widthIn),
        //    data: out
        //};
    }

    getPieData(goal) {
        var out = [
            {
                angle: 0,
                lable: "Actual",
                color: 'rgb(18, 147, 154)'
            },
            {
                angle: parseFloat(goal),
                lable: "Goal",
                color: 'rgb(18, 147, 0)'
            }
        ];

        var totalNVA = 0;
        var totalVA = 0;
        switch (this.state.Type) {
            case "NVA":
                this.state.Elements.map(x => { totalNVA += x.NVA; totalVA += x.VA });
                out[0].angle = this.calculateTotalNVA();
                break;
            case "OnTime":
                break;
        }
        out.push({ angle: parseFloat(goal) });

        return out;
    }

    getLegendData() {
        var name = "Garcia";
        var type = "Absolute";

        var out = [
            {
                title: 'Actual',
                color: 'rgb(18, 147, 154)'
            },
            {
                title: 'Goal',
                color: 'rgb(18, 147, 0)'
            }
        ];

        return out;
    }

    calculateNVA(va, nva) {
        var fltVA = parseFloat(va);
        var fltNVA = parseFloat(nva);

        return parseFloat((fltNVA * 100) / (fltNVA + fltVA));
    }

    calculateTotalNVA() {
        var totalNVA = 0;
        var totalVA = 0;
        this.state.Elements.map(x => {
            totalVA += parseFloat(x.VA);
            totalNVA += parseFloat(x.NVA);
        });

        return this.calculateNVA(totalVA, totalNVA);
    }

    render() {
        if (this.state.loading) {
            return <loadingSpinner/>;
        } else {
            return (
                <div className="flexbox">
                    <NavButtons next="RequestMentor" previous="DataCollection" projectId={this.props.match.params.id} title="Analyze Data" />
                    <DataCollectionStatus {...this.state} />
                    <BarChart data={this.getBarData(this.state.championGoal)} height={400} width={400} />
                    <PieChart data={this.getPieData(this.state.championGoal)} height={400} width={400} radius={180} innerRadius={100} />
                    <PieChartLegend legendItems={this.getLegendData()} height={200} width={100}/>
                </div>
            )
        }
    }    
}