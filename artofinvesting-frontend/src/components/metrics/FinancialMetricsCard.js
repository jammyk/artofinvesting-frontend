import React, { Component } from 'react'
import { Card } from 'antd'
import '../../stylesheets/FlippedAxisTable.css';
import '../../stylesheets/CardPanel.css';
import { NumberOutlined } from '@ant-design/icons';

export default class FinancialMetricsCard extends Component {
    render() {
        return (
            <div>
                <Card 
                title={this.props.isTabs ? '' : <div><NumberOutlined /> Financial Metrics</div>} 
                bordered={false}
                >
                    <table>
                        <tbody>
                            <tr>
                                <th>Cash per Share</th>
                                <th>10 year Equity Growth</th>
                                <th>10 year Sales Growth</th>
                                <th>10 year EPS Growth</th>
                                <th>10 year Share Growth</th>
                                <th>10 year FCF growth</th>
                            </tr>
                            <tr>
                                <td>{this.props.data ? this.props.data.cashPerShare : '-'}</td>
                                <td>{this.props.data ? this.props.data.equityGrowth : '-'}</td>
                                <td>{this.props.data ? this.props.data.salesGrowth : '-'}</td>
                                <td>{this.props.data ? this.props.data.epsGrowth : '-'}</td>
                                <td>{this.props.data ? this.props.data.shareGrowth : '-'}</td>
                                <td>{this.props.data ? this.props.data.fcfGrowth : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        )
    }
}
