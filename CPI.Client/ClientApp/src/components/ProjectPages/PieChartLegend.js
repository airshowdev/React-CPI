import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/style.css';
import { DiscreteColorLegend } from 'react-vis';

export class PieChartLegend extends Component {

    render(props) {
        return (
            <div className="App">
                <DiscreteColorLegend height={this.props.height} width={this.props.width} items={this.props.legendItems} />
            </div>
        );
    }
}