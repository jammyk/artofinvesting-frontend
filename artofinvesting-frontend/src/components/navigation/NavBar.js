import React, { Component } from 'react'
import { Tabs, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../images/aoi_logo.png';
import LoginButton from '../LoginButton';
import '../../stylesheets/NavBar.css';
const { TabPane } = Tabs;


export default class NavBar extends Component {

    callBack = (key) => {
        console.log(key);
    }

    render() {
        return (
            <Affix>
                {/* affix offset creates gap, white block used to fill gap & act as offset */}
                <div style={{ height: 10, backgroundColor: 'white' }} />
                <Row align="middle" justify="start" type="flex" gutter={0} style={{ backgroundColor: 'white' }}>
                    <Col span={2}>
                        <div className="navBar_logo">
                            <Link to="/"><img src={logo} className="AOI-logo" alt="logo" height={'75px'} /></Link>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="navbar_tabs">
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab={<Link to="/screeners">Screener</Link>} key="1"></TabPane>
                                <TabPane tab={<Link to="/">Artists</Link>} key="2"></TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className="navbar_signin">
                            <LoginButton />
                        </div>
                    </Col>
                </Row>
            </Affix>
        )
    }
}
