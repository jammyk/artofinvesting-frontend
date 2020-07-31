import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onFinish = this.onFinish.bind(this);
    }

    onFinish(values) {
        console.log('Received values of form: ', values);

        // axios.post(http://localhost:3001/registration, {
        //     user: {
        //         email: username,
        //         password: password
        //     }
        // },
        //     { withCredentials: true }).then(response => {
        //         localStorage.setItem('jwt', rest.data);
        //         console.log("Login result", repsonse);
        //     }).catch(error => {
        //         console.log("Login error", error);
        //     });

        // axios.post().then()
        if (values.username === 'test' && values.password === 'test') {
            localStorage.setItem('jwt', 'loggedIn');
            message.success('successfully logged in');
            this.props.toggleModal(false);
            this.props.history.push('/');
        } else {
            message.error('login credentials do not match our records');
        }
    }

    render() {
        return (
            <div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link to='/forgotpass'>
                            Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to='/register'>register now!</Link>
                    </Form.Item>
                </Form>
            </div >
        )
    }
}

export default withRouter(LoginForm);