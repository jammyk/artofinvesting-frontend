import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line, Tooltip, Legend, LabelList } from 'recharts';

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
                <ResponsiveContainer width={"100%"} height={280}>
                    <ComposedChart data={this.props.data}>
                        <XAxis dataKey={this.props.xLabel} />
                        <YAxis hide={true} />
                        <Tooltip />
                        <Legend verticalAlign="bottom" align="right" />
                        <CartesianGrid stroke={colors.white} />
                        {this.props.leftBarKey &&
                            <Bar dataKey={this.props.leftBarKey} barSize={20} fill={colors.blue1}>
                                <LabelList dataKey={this.props.leftBarKey} position='top'   />
                            </Bar>}
                        {this.props.rightBarKey && <Bar dataKey={this.props.rightBarKey} barSize={20} fill={colors.blue3} />}
                        {this.props.lineKey && <Line dataKey={this.props.lineKey} stroke={colors.blue5} />}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default ComposedGraph;