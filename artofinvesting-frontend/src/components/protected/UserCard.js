import React, { Component } from 'react'
import { Card, Dropdown } from 'antd'
import PortfolioGraph from './PortfolioGraph'
import { UserOutlined, BarChartOutlined, FundProjectionScreenOutlined, MoreOutlined } from '@ant-design/icons';
import PortfolioTicker from './PortfolioTicker';
import { Link } from 'react-router-dom';
import UserCardMore from './UserCardMore';

export default class UserCard extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      userName: 'Test',
      portfolio: [
        {
          'month': 1,
          'value': 100
        },
        {
          'month': 2,
          'value': 95
        },
        {
          'month': 3,
          'value': 130
        }
      ]
    }
  }

  componentDidMount() {
    // todo axios call
  }

  render() {

    return (
      <Card
        title={this.state.userName}
        style={{ width: 300 }}
        actions={[
          <Link to='/profile'><UserOutlined key='user' /></Link>,
          <BarChartOutlined key='portfolio' />,
          <Link to='/watchlist'><FundProjectionScreenOutlined key='watchlist' /></Link>,
          <Dropdown overlay={<UserCardMore />}><MoreOutlined key='more' /></Dropdown>
        ]}
      >
        <PortfolioGraph data={this.state.portfolio} />
        <PortfolioTicker rateOfReturn={30} currentValue={130} />
      </Card>
    )
  }
}
