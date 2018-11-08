import React, { Component } from 'react';
import '../css/uswds.css';
import '../css/style.css';
import { VerticalBarSeries, XYPlot, HorizontalGridLines, XAxis, YAxis, VerticalBarSeriescanvas, LabelSeries, } from 'react-vis';

export class BarChart extends Component {

    render(props) {
        
        return (
            <div className="App">
                <XYPlot height={this.props.height} width={this.props.width} xType={'ordinal'} colorType='literal'>
                    <HorizontalGridLines />
                    <labelSeries />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={this.props.data} />
                </XYPlot>
            </div>
        );
    }
}

