import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, XAxis, CartesianGrid, YAxis, Legend, Line } from 'recharts'
import { Tooltip } from 'antd'

export default class MetricGraph extends Component {
  render() {
    return (
        <ResponsiveContainer width={'100%'} height={280}>
            <LineChart data={this.props.data}>
                <XAxis dataKey={this.props.xAxis} />
                <YAxis hide={true} />
                <Tooltip />
                <Legend verticalAlign='bottom' align='right' />
                <CartesianGrid stroke={'white'} />
                {this.props.lineOne && <Line dataKey={this.props.lineOne} />}
                {this.props.lineTwo && <Line dataKey={this.props.lineTwo} />}
                {this.props.lineThree && <Line dataKey={this.props.lineThree} />}
            </LineChart>
        </ResponsiveContainer>
    )
  }
}
