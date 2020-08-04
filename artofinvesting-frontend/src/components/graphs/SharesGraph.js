import React, { Component } from 'react'
import { ResponsiveContainer, XAxis, CartesianGrid, YAxis, Legend, Bar, BarChart, LabelList } from 'recharts'
import { Tooltip } from 'antd'
import { BLUE1 } from '../../constants/colors'

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
                <Bar dataKey={this.props.barKey} fill={BLUE1} barSize={50}>
                <LabelList dataKey={this.props.barKey} position='top'/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
  }
}
