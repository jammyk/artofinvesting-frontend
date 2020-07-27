import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line, Tooltip, Legend } from 'recharts';

const colors =
{
    "white": "#f5f5f5",
    // color scheme
    "blue1": "#003f5c",
    "blue2": "#58508d",
    "blue3": "#bc5090",
    "blue4": "#ff6361",
    "blue5": "#ffa600"
}

class ComposedGraph extends Component {
    render() {
        return (
            <div>
                <ComposedChart width={730} height={250} data={this.props.data}>
                    <XAxis dataKey={this.props.xLabel} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" />
                    <CartesianGrid stroke={colors.white} />
                    {this.props.barKey && <Bar dataKey={this.props.barKey} barSize={20} fill={colors.blue2} />}
                    {this.props.stackedUpperBarKey && <Bar dataKey={this.props.stackedLowerBarKey} barSize={20} stackId="a" fill={colors.blue1} />}
                    {this.props.stackedLowerBarKey && <Bar dataKey={this.props.stackedUpperBarKey} barSize={20} stackId="a" fill={colors.blue3} />}
                    {this.props.lineKey && <Line dataKey={this.props.lineKey} stroke={colors.blue5} />}
                </ComposedChart>
            </div>
        );
    }
}

export default ComposedGraph;