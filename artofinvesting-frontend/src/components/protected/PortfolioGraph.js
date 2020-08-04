import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'
import { WHITE } from '../../constants/colors'

export default class PortfolioGraph extends Component {
  render() {
    return (
        <ResponsiveContainer width={'100%'} height={280}>
            <LineChart data={this.props.data}>
                <CartesianGrid stroke={WHITE} />
                <XAxis dataKey='date' hide={true} />
                <YAxis hide={true}/>
                <Line dataKey="value" stroke={'green'} />
            </LineChart>
        </ResponsiveContainer>
    )
  }
}
