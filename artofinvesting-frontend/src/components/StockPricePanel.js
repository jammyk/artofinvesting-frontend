import React, { Component } from 'react'
import { Typography } from 'antd'

const { Text } = Typography;
export default class StockPricePanel extends Component {

    computePercentChangeString(percentChange) {
        return percentChange < 0 ? '' : '+' + Math.round((percentChange + Number.EPSILON) * 10000) / 100 + '%';
    }

    computeDollarChangeString(dollarChange) {
        return dollarChange < 0 ? '$' : '+$' + dollarChange;
    }

    // +$12.69 (+6.24%) Past Year
    render() {
        const dollarChangeStr = this.computeDollarChangeString(this.props.dollarChange); 
        const percentChangeStr = this.computePercentChangeString(this.props.percentChange);

        return (
            <div className="companyTitle" style={{ textAlign: 'left', paddingTop: 20 }}>
                <p style={{ marginBottom: '0', fontSize: 40 }}>
                    <Text>{this.props.companyName}</Text>
                </p>
                <p style={{ marginTop: '-0.3em', marginBottom: '0', fontSize: 40 }}>
                    <Text>{'$' + this.props.companyStockPrice}</Text>
                </p>
                <p style={{ marginBottom: '0.5em' }}>
                    <Text>
                        {dollarChangeStr + ' (' + percentChangeStr + ') ' + this.props.timeFrame}
                    </Text>
                </p>
            </div>
        )
    }
}
