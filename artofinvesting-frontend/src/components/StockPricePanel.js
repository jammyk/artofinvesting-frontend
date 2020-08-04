import React, { Component } from 'react'
import { Typography } from 'antd'

const { Text } = Typography;
export default class StockPricePanel extends Component {
    // +$12.69 (+6.24%) Past Year
    render() {
        return (
            <div className="companyTitle" style={{ textAlign: 'left', paddingTop: 20 }}>
                <p style={{ marginBottom: '0', fontSize: 40 }}>
                    <Text>{this.props.companyName}</Text>
                </p>
                <p style={{ marginTop: '-0.3em', marginBottom: '0', fontSize: 40 }}>
                    <Text>{'$' + this.props.companyStockPrice}</Text>
                </p>
                <p style={{ marginBottom: '0.5em' }}>
                    <Text>{this.props.dollarChange + ' (' + this.props.percentChange + ') ' + this.props.timeFrame}</Text>
                </p>
            </div>
        )
    }
}
