import React, { Component } from 'react'
import { Popover, Button } from 'antd'
import UserCard from './UserCard.js';

export default class UserButton extends Component {
  render() {
    return (
      <div>
        <Popover content={<UserCard />} trigger='click'>
            <Button>John Smith</Button>
        </Popover>
      </div>
    )
  }
}
