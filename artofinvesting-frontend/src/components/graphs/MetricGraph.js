import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, XAxis, CartesianGrid, YAxis, Legend, Line } from 'recharts'
import { Tooltip } from 'antd'
import { WHITE, BLUE1, BLUE3, BLUE5 } from '../../constants/colors'

export default class MetricGraph extends Component {
  render() {
    return (
        <ResponsiveContainer width={'100%'} height={280}>
            <LineChart data={this.props.data}>
                <XAxis dataKey={this.props.xAxis} />
                <YAxis hide={true} />
                <Tooltip />
                <Legend verticalAlign='bottom' align='right' />
                <CartesianGrid stroke={WHITE} />
                {this.props.lineOne && <Line dataKey={this.props.lineOne} stroke={BLUE1}/>}
                {this.props.lineTwo && <Line dataKey={this.props.lineTwo} stroke={BLUE3}/>}
                {this.props.lineThree && <Line dataKey={this.props.lineThree} stroke={BLUE5}/>}
            </LineChart>
        </ResponsiveContainer>
    )
  }
}
