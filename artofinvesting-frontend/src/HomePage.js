import React, { Component } from 'react';
import { Button, Row, Col, Modal } from 'antd';
import logo from './aoi_logo.png';
import LoginForm from './LoginForm.js';
import CompanySearchBar from './CompanySearchBar';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignInPopUpVisible: false
        };

    }

    onSignInButtonClick = () => {
        this.setState({
            isSignInPopUpVisible: true
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            isSignInPopUpVisible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            isSignInPopUpVisible: false,
        }); 
    }


    render() {
        return (
            <div>
                <Row style={{ "paddingTop": "20px" }} type="flex" justify="end" align="bottom">
                    <Col pull={1}>
                        <Button type="primary" onClick={this.onSignInButtonClick}>Sign in</Button>
                    </Col>
                </Row>
                <Modal 
                    visible={this.state.isSignInPopUpVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <LoginForm />
                </Modal>
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