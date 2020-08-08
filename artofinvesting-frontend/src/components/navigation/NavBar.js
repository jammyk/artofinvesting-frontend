import React, { Component } from 'react'
import { Row, Col, Affix, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../images/aoi_logo.png';
import LoginButton from '../LoginButton';
import '../../stylesheets/NavBar.css';
const { Text } = Typography;

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: 'navbar-affix-default',
        }
    }

    callBack = (affixed) => {
        console.log('tab Change');
    }

    render() {
        return (
            <Affix onChange={this.callBack}>
                {/* affix offset creates gap, white block used to fill gap & act as offset */}
                <div style={{ height: 10, backgroundColor: 'white' }} />
                <Row align="middle" justify="start" type="flex" gutter={0} style={{ backgroundColor: 'white ' }}>
                    <Col span={2} offset={3} order={1}>
                        <div className="navBar-logo">
                            <Link to="/"><img src={logo} className="AOI-logo" alt="logo" height={'75px'} /></Link>
                        </div>
                    </Col>
                    <Col span={5} offset={10} order={2}>
                        <Menu mode="horizontal" style={{ width: 185}}>
                            <Menu.Item><Link to="/screeners"><Text>Screeners</Text></Link></Menu.Item>
                            <Menu.Item><Link to="/artists">Artists</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={3} order={3} pull={1}>
                        <div className="navbar-signin">
                            <LoginButton />
                        </div>
                    </Col>
                </Row>
            </Affix>
        )
    }
}
