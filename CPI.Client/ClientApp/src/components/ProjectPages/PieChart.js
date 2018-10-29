import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/style.css';
import { RadialChart, Hint, DiscreteColorLegend } from 'react-vis';

export const colorGenerator = [
    '#00477e',
    '#a6001a',
    '#ee9600',
    '#004d33',
    '#e06000',
    '#ffab00',
];

export class PieChart extends Component {
    render(props) {

        return (
            <div className="App">
                <RadialChart height={this.props.height} width={this.props.width} data={this.props.data} radius={this.props.radius} innerRadius={this.props.innerRadius} colorType='literal' />
                
            </div>
        );
    }
}