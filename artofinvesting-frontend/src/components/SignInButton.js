import React, { Component } from 'react'
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import LoginForm from './LoginForm';

export default class SignInButton extends Component {
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
                <Button type="primary" onClick={this.onSignInButtonClick}>Sign in</Button>
                <Modal
                    visible={this.state.isSignInPopUpVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <LoginForm />
                </Modal>
            </div>
        )
    }
}
