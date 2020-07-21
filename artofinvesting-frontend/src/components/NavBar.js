import React, { Component } from 'react'
import { Tabs, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../aoi_logo.png';
import SignInButton from './SignInButton';
import '../stylesheets/NavBar.css';

const { TabPane } = Tabs;


export default class NavBar extends Component {

    callBack = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Affix offsetTop={10}>
                    <Row align="middle" justify="start" type="flex" gutter={0}>
                        <Col span={2}>
                            <div className="navBar_logo">
                                <Link to="/"><img src={logo} className="AOI-logo" alt="logo" height={'75px'} /></Link>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className="navbar_tabs">
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab={<Link to="/">Screener</Link>} key="1"></TabPane>
                                    <TabPane tab={<Link to="/">Artists</Link>} key="2"></TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className="navbar_signin">
                            <SignInButton></SignInButton>
                            </div>
                        </Col>
                    </Row>
                </Affix>
            </div>
        )
    }
}
