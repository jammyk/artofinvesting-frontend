import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line, Tooltip, Legend, LabelList } from 'recharts';
import { WHITE, BLUE1, BLUE3, BLUE5 } from '../../constants/colors';

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
                        <CartesianGrid stroke={WHITE} />
                        {this.props.leftBarKey &&
                            <Bar dataKey={this.props.leftBarKey} barSize={20} fill={BLUE1}>
                                <LabelList dataKey={this.props.leftBarKey} position='top'   />
                            </Bar>}
                        {this.props.rightBarKey && <Bar dataKey={this.props.rightBarKey} barSize={20} fill={BLUE3} />}
                        {this.props.lineKey && <Line dataKey={this.props.lineKey} stroke={BLUE5} />}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default ComposedGraph;