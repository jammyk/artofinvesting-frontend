import React, { Component } from 'react'
import { Button } from 'antd';
import LoginModal from './authentication/LoginModal';
import AuthenticatedAlternative from './authentication/AuthenticatedAlternative';
import UserButton from './protected/UserButton';

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginVisible: false,
            authenticatedChildrenKey: {
                'authenticatedLoginButton': true
            }
        };

        this.toggleLoginModal = this.toggleLoginModal.bind(this);
    }

    onSignInButtonClick = () => {
        this.setState({
            isLoginVisible: true
        });
    }

    toggleLoginModal(isLoginVisible) {
        this.setState({ isLoginVisible: isLoginVisible });
    }

    render() {
        return (
            <div>
                <AuthenticatedAlternative authenticatedChildren={this.state.authenticatedChildrenKey}>
                    <Button type="primary" onClick={this.onSignInButtonClick}>Sign in</Button>
                    <LoginModal toggleModal={this.toggleLoginModal} isModalVisible={this.state.isLoginVisible} />
                    <UserButton key={'authenticatedLoginButton'}></UserButton>
                </AuthenticatedAlternative>
            </div>
        )
    }
}