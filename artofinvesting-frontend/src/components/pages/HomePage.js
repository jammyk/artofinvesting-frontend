import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../images/aoi_logo.png';
import CompanySearchBar from '../CompanySearchBar';
import LoginButton from '../LoginButton';
import '../../stylesheets/HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Row style={{ "paddingTop": "20px" }} type="flex" justify="end" align="bottom">
                    <Col pull={1}>
                        <LoginButton />
                    </Col>
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "100px" }}>
                    <img src={logo} className="AOI-logo" alt="logo" />
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "20px" }}>
                    <Col span={10}>
                        <CompanySearchBar message="Search for companies using their ticker "/>
                    </Col>
                </Row>
                <div style={{ "paddingTop": "20px" }}>
                    <div className="screener-navigation-button">
                        <Link to="/screeners"><Button type="default">Screeners</Button></Link>
                    </div>
                    <div className="artist-navigation-button">
                        <Link to="/artists"><Button type="default">Artists</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;