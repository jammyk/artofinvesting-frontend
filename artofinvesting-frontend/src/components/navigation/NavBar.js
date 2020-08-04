import React, { Component } from 'react'
import { Tabs, Row, Col, Affix, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../images/aoi_logo.png';
import LoginButton from '../LoginButton';
import '../../stylesheets/NavBar.css';
const { TabPane } = Tabs;


export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: 'navbar-affix-default'
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
                <Row align="middle" justify="start" type="flex" gutter={0} style={{ backgroundColor: 'transparent ' }}>
                    <Col span={2}>
                        <div className="navBar-logo">
                            <Link to="/"><img src={logo} className="AOI-logo" alt="logo" height={'75px'} /></Link>
                        </div>
                    </Col>
                    <Col span={18}>
                        <Link to="/screeners"><Button>Screeners</Button></Link>
                        <Link to="/"><Button>Artists</Button></Link>
                    </Col>
                    <Col span={3}>
                        <div className="navbar-signin">
                            <LoginButton />
                        </div>
                    </Col>
                </Row>
            </Affix>
        )
    }
}
