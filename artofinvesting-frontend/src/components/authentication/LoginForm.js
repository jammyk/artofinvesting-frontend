import React, { Component } from '../../../node_modules/react'
import { Form, Input, Button, Checkbox, message } from '../../../node_modules/antd';
import { UserOutlined, LockOutlined } from '../../../node_modules/@ant-design/icons';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {

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
