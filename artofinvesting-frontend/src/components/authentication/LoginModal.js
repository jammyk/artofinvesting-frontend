import React, { Component } from '../../../node_modules/react'
import { Modal } from '../../../node_modules/antd';
import LoginForm from './LoginForm';


export default class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
        }

        this.setModalVisibility = this.setModalVisibility.bind(this);
    }


    handleCancel = (e) => {
        console.log(e);
        this.setModalVisibility(false);
        if (this.props.toggleModal) {
            this.props.toggleModal(false);
        } else {
            this.props.history.goBack();
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
