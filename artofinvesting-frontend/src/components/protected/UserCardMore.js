import React, { Component } from 'react'
import { Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { message } from 'antd';
import { signOut } from '../../helpers/authentication';
import { withRouter } from 'react-router-dom';
const { Item } = Menu;

class UserCardMore extends Component {

    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        signOut();
        message.success('successfully logged out');
        this.props.history.push('/')
        window.location.reload(true);
    }

  render() {
    return (
        <Menu>
            <Item onClick={this.signOut}>
                <LogoutOutlined title='log out'/>Sign out
            </Item>
        </Menu>
    )
  }
}

export default withRouter(UserCardMore);
