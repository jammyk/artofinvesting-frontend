import React, { Component } from 'react'
import { Modal } from 'antd';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';


class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
        }

        this.setModalVisibility = this.setModalVisibility.bind(this);
    }


    handleCancel = (e) => {
        this.setModalVisibility(false);
        if (this.props.toggleModal) {
            this.props.toggleModal(false);
        } else {
            this.props.history.push('/');
        }
    }

    setModalVisibility(isVisible) {
        this.setState({ isModalVisible: isVisible });
    }

    render() {
        return (
            <div>
                <Modal
                    visible={this.props.isModalVisible && this.state.isModalVisible}
                    onCancel={this.handleCancel}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { display: 'none' } }}
                >
                    <LoginForm toggleModal={this.handleCancel}/>
                </Modal>
            </div >
        )
    }
}

export default withRouter(LoginModal);
