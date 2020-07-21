import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import logo from '../images/aoi_logo.png';
import CompanySearchBar from './CompanySearchBar';
import SignInButton from './SignInButton';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Row style={{ "paddingTop": "20px" }} type="flex" justify="end" align="bottom">
                    <Col pull={1}>
                        <SignInButton/>
                    </Col>
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "100px" }}>
                    <img src={logo} className="AOI-logo" alt="logo" />
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "20px" }}>
                    <Col span={10}>
                        <CompanySearchBar />
                    </Col>
                </Row>
                <div style={{ "paddingTop": "20px" }}>
                    <Button type="default">Screeners</Button>
                </div>
            </div>
        );
    }
}

export default HomePage;