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
import DataHandler from '../js/DataHandler';


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
        this.state = {
            Elements: [], Champion: {} , loading: true, Standard: ""};   
    }

    async componentDidMount() {
        var dHandler = new DataHandler();
        let data = await dHandler.getProject(this.props.match.params.id);
        let type = data.Elements ? data.Elements[0].Type : "";
        let standard = this.calculateAverageGoal(data.Elements);
        
        this.setState({
            loading: false, Elements: data.Elements, Champion: data.Champion, Type: type, Standard: standard
        });
            
    }

    //getBarLabels() {
    //    var out = [];
    //    this.state.project.DataCollection.Elements.map(x => out.push(x.Name));
    //    return out;
    //}

    calculateAverageGoal(Elements) {

        let type = Elements ? Elements[0].Type : 0;

        switch (type) {
            case "NVA":
                var total = 0;
                Elements.map(x => total += parseFloat(x.Goal));
                console.log("total is ", total);
                return Math.round(total/Elements.length);
            case "OnTime":
                return this.state.Standard;
            default:
                return 0;
        }
    }


    getBarData() {
        let out = [];
        switch (this.state.Type) {
            case "NVA":
                out = [
                    {
                        x: "NVA Percentage",
                        y: parseFloat(this.calculateTotalNVAPercentage()),
                        color: '#00477e'
                    },
                    {
                        x: 'Goal',
                        y: parseFloat(this.state.Champion.Goal),
                        color: '#e06000'
                    }
                ]
                break;
            case "OnTime":
               out = [
                    {
                        x: "Actual",
                       y: this.calculateOnTimePercentage(),
                       color: '#00477e'
                    },
                    {
                        x: 'Goal',
                        y: parseFloat(this.state.Champion.Goal),
                        color: '#e06000'
                    }
                ]
                break;
        }
        
        return out;

        //return {
        //    height: parseInt(heightIn),
        //    width: parseInt(widthIn),
        //    data: out
        //};
    }

    getPieData() {
        var out = [];
        
        switch (this.state.Type) {
            case "NVA":
                out =[
                    {
                        angle: parseFloat(this.calculateTotalNVAPercentage()),
                        lable: "NVA Percentage",
                        color: '#00477e'
                    },
                    {
                        angle: parseFloat(100 - this.calculateTotalNVAPercentage()),
                        lable: "Goal",
                        color: '#e06000'
                    }
                ]
                break;
            case "OnTime":
                out = [
                    {
                        angle: parseFloat(this.calculateOnTimePercentage()),
                        lable: "Actual",
                        color: '#00477e'
                    },
                    {
                        angle: parseFloat(this.calculateLatePercentage()),
                        lable: "Goal",
                        color: '#e06000'
                    }
                ]

                break;
        }

        return out;
    }

    getLegendData() {
        var name = "Garcia";
        var type = "Absolute";
        var data = this.getPieData();
        var out = [];

        switch (this.state.Type) {
            case "NVA":
                out = [
                    {
                        title: 'NVA Percentage',
                        color: data[0].color
                    },
                    {
                        title: 'Goal',
                        color: data[1].color
                    }
                ]
                break;
            case "OnTime":
                out = [
                    {
                        title: 'Actual',
                        color: data[0].color
                    },
                    {
                        title: 'Goal',
                        color: data[1].color
                    }
                ]
                break;
        }
        return out;
    }

    calculateOnTimePercentage() {
        let out = 0;
        this.state.Elements.map(x => x.Goal >= x.actual ? out++ : out = out)
        return out;
    }

    calculateLatePercentage() {
        return 100 - this.calculateOnTimePercentage();
    }

    calculateNVA(va, nva) {
        var fltVA = parseFloat(va);
        var fltNVA = parseFloat(nva);

        return parseFloat((fltNVA * 100) / (fltNVA + fltVA));
    }

    calculateTotalNVAPercentage() {
        var totalNVA = 0;
        var totalVA = 0;
        this.state.Elements.map(x => {
            totalVA += parseFloat(x.VA);
            totalNVA += parseFloat(x.NVA);
        });

        return this.calculateNVA(totalVA, totalNVA);
    }

    calculateTotalVAAmount() {
        let out = 0;
        this.state.Elements.map(x => out += x.VA);
        return out;
    }
    calculateTotalNVAAmount() {
        let out = 0;
        this.state.Elements.map(x => out += x.VA);
        return out;
    }

    render() {
        if (this.state.loading) {
            return <loadingSpinner/>;
        } else {
            return (
                <div className="flexbox">
                    <NavButtons next="RequestMentor" previous="DataCollection" projectId={this.props.match.params.id} title="Analyze Data" />
                    <DataCollectionStatus {...this.state} />

                    <BarChart data={this.getBarData(this.state.Champion.Goal)} height={400} width={400} />
                    <PieChart data={this.getPieData()} height={400} width={400} radius={180} innerRadius={140} />

                    <PieChartLegend legendItems={this.getLegendData()} height={200} width={100}/>
                </div>
            )
        }
    }    
}