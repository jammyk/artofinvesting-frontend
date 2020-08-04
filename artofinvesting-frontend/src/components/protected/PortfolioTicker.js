import React, { Component } from 'react'
import { Typography } from 'antd'
const { Text } = Typography;

export default class PortfolioTicker extends Component {
    render() {
        return (
            <Text
                style={{ color: this.props.rateOfReturn >= 0 ? 'green' : 'red' }}>
                {this.props.currentValue + ' (' + this.props.rateOfReturn + '%)'}
            </Text>
        )
    }
}
