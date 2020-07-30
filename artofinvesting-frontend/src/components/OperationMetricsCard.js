import React, { Component } from 'react'
import { Card } from 'antd'
import '../stylesheets/FlippedAxisTable.css';

export default class OperationMetricsCard extends Component {
    render() {
        return (
            <div>
                <Card title={this.props.isTabs ? '' : 'Operational Metrics'} bordered={false}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Return on Invested Capital</th>
                                <th>Return on Equity</th>
                            </tr>
                            <tr>
                                <td>{this.props.data ? this.props.data.roic : '-'}</td>
                                <td>{this.props.data ? this.props.data.roe : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        )
    }
}
