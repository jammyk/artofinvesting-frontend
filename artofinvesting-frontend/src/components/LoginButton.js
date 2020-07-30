import React, { Component } from 'react'
import { Button } from 'antd';
import LoginModal from './authentication/LoginModal';

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginVisible: false
        };

        this.toggleLoginModal = this.toggleLoginModal.bind(this);
    }

    onSignInButtonClick = () => {
        this.setState({
            isLoginVisible: true
        });
    }

    toggleLoginModal(isLoginVisible) {
        this.setState({ isLoginVisible: isLoginVisible});
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.onSignInButtonClick}>Sign in</Button>
                <LoginModal toggleModal={this.toggleLoginModal} isModalVisible={this.state.isLoginVisible} />
            </div>
        )
    }
}
