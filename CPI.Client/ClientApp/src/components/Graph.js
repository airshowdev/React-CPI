import React, { Component } from 'react';
import './css/uswds.css';
import { BarChart } from './ProjectPages/BarChart.js';
import { PieChart, colorGenerator } from './ProjectPages/PieChart';
import { PieChartLegend } from './ProjectPages/PieChartLegend';

//4 classes/components/functions that are used in the graph class. The bars and lines are drawn using a mapped array. 
const XBarTextContainer = () => {
    return (
        <div className='xbar-text-content'>
            
        </div>
    )
}

const YBarTextContainer = () => {
    return (
        <div className='ybar-text-content'>
        </div>
    )
}

const Line = ({ top }) => {
    var topValue = (top * 1) + '%';
    var lineStyle = {
        top: topValue
    }

    return (
        <hr className='line' style={ lineStyle }
        />
    )
}

const Bar = ({ percent, index }) => {
    var ind = (index * 20) + 13.25 + '%';
    
    var barStyle = {
        height: percent + '%',
        left: ind
    }

    return (
        <span style={ barStyle } className='bar'  />
    )
}

const barChartData = {
    data: [
        { x: 'A', y: 10 },
        { x: 'B', y: 5 },
        { x: 'C', y: 4 },
        { x: 'D', y: 9 },
        { x: 'F', y: 1 },
        { x: 'E', y: 7 },
        { x: 'G', y: 6 }
    ],
    height: 600,
    width: 600,
}

let counter = 0;

const pieChartArray = [
    { angle: 1, label: 'stuff', color: colorGenerator[0] },
    { angle: 2, label: 'things', color: colorGenerator[1] },
    { angle: 2, label: 'more stuff', color: colorGenerator[2] },
    { angle: 3, label: 'stuff2', color: colorGenerator[3] },
    { angle: 1, label: 'tl', color: colorGenerator[4] }
];

const pieChartData = {
    data: pieChartArray,
    height: 400,
    width: 400,
    radius: 180,
    innerRadius: 140,
}

const pieChartLegend = {

    legendItems: [
        { title: 'One', color: pieChartData.data[0].color },
        { title: 'Two', color: pieChartData.data[1].color },
        { title: 'Three', color: pieChartData.data[2].color },
        { title: 'Four', color: pieChartData.data[3].color },
        { title: 'Five', color: pieChartData.data[4].color }
    ],
    height: 200,
    width: 100,
}


export class Graph extends Component {

    constructor() {
        super();

        this.state = {
            lineHeights: [10, 20, 30, 40, 50, 60, 70, 80, 90],
            barHeights: [25, 50, 35, 90],
            xBarTextContent: ['Paul Pierce', 'Michael Jordan', 'Lebron James', 'Kobe Bryant']
        }
    }

    
    render(props) {
        return (
            <div className='graph-wrapper'>
                <BarChart data={barChartData.data} height={barChartData.height} width={barChartData.width} />
                <div style={{width: "530px"}}>
                    <div style={{ display: "inline-block" }}>
                        <PieChart data={pieChartData.data} height={pieChartData.height} width={pieChartData.width} radius={pieChartData.radius} innerRadius={pieChartData.innerRadius} />
                    </div>
                    <div style={{ display: "inline-block", border: "solid 1px", backgroundColor: "lightGrey", float: "right", marginTop: "40px" }}>
                        <PieChartLegend legendItems={pieChartLegend.legendItems} height={pieChartLegend.height} width={pieChartLegend.width} />
                    </div>
                </div>

                <div className='graph'>
                    <YBarTextContainer></YBarTextContainer>

                    <div className='bars-and-bar-lines-container'>


                        {this.state.lineHeights.map((el, i) => (<Line top={el} />))
                        }
                    
                         
                        
                        {
                            this.state.barHeights.map((el, i) => ( <Bar percent={el} index={i} /> ))
                            
                        }

                    </div>
                    

                    <XBarTextContainer>
                        {/*Working on getting text to show up in the divs to the left and below. This is the X-axis text}
                        {/*this.state.xBarTextContent.map((el, i) => (*/}
                    </XBarTextContainer>

                </div>
            </div>
        )
    }
}




/*
 * 
 * 
 *                  
 *                  

 ********* This is all for creating a function that dynamically creates the lines on the graph instead of hard coding them


 * 
 * 
 ********* This method is supposed to create an array of Lines 
      renderLines() {
    return Array(10).fill(null).map((el, i) => (
        <Line
            left={i * 10}
            key={i}
        />
    ))
}
 * 
 * 
 * 
 *                      
 *                      
 *                         {/* <hr className='line' style={{ top: '10%' }} /> 
                        <hr className='line' style={{ top: '20%' }} />
                        <hr className='line' style={{ top: '30%' }} />
                        <hr className='line' style={{ top: '40%' }} />
                        <hr className='line' style={{ top: '50%' }} />
                        <hr className='line' style={{ top: '60%' }} />
                        <hr className='line' style={{ top: '70%' }} />
                        <hr className='line' style={{ top: '80%' }} />
                        <hr className='line' style={{ top: '90%' }} /> 

                    * Call renderLines() in the graph div to draw the lines 
   { this.renderLines() }


                Old code for Bars on graph
  {/* <Bar className='bar' percent={25} /> not showing up possibly because it can't pass the percent properly
{ /*<Bar percent={20} />
    <Bar percent={40} />
<Bar percent={60} />
    <Bar percent={80} /> 

{/*
<div className='bar' style={{ height: '80%', marginLeft: '15%' }} />  {/*Styling didn't work when 'div' was 'Bar'. }
<div className='bar' style={{ height: '40%', marginLeft: '35%' }} />
<div className='bar' style={{ height: '90%', marginLeft: '55%' }} />
<div className='bar' style={{ height: '20%', marginLeft: '75%' }} />
*/
