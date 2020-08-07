import React, { Component } from 'react'
import { Card } from 'antd'
import '../../stylesheets/FlippedAxisTable.css';
import { SmileOutlined } from '@ant-design/icons';


export default class ValuationMetricCard extends Component {
  render() {
    return (
      <div>
        <Card 
        title={this.props.isTabs ? '' : <div><SmileOutlined /> Valuation Metrics</div>} 
        bordered={false}>
          <table className="flippedTable">
            <tbody>
              <tr>
                <th>Price to Earnings</th>
                <th>Price to Free Cash Flow</th>
                <th>Price to Sales</th>
                <th>Enterprise Value to EBIT</th>
              </tr>
              <tr>
                <td>{this.props.data ? this.props.data.pe : '-'}</td>
                <td>{this.props.data ? this.props.data.pfcf : '-'}</td>
                <td>{this.props.data ? this.props.data.ps : '-'}</td>
                <td>{this.props.data ? this.props.data.evEbit : '-'}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    )
  }
}
