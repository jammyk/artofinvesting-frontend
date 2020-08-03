import React, { Component } from 'react'
import { ResponsiveContainer, XAxis, CartesianGrid, YAxis, Legend, Bar, BarChart } from 'recharts'
import { Tooltip } from 'antd'

export default class SharesGraph extends Component {
  render() {
    return (
        <ResponsiveContainer width={'100%'} height={280}>
            <BarChart data={this.props.data}>
                <XAxis dataKey={this.props.xAxis} />
                <YAxis hide={true} />
                <Tooltip />
                <Legend verticalAlign='bottom' align='right' />
                <CartesianGrid stroke={'white'} />
                <Bar dataKey={this.props.barKey} />
            </BarChart>
        </ResponsiveContainer>
    )
  }
}
