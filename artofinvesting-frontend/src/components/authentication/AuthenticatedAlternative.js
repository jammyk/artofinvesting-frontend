import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../helpers/authentication';

class AuthenticatedAlternative extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: false
        };
    }

    componentDidMount() {
        let authStatus = isAuthenticated();
        console.log('authstatus', authStatus)
        this.setState({ isAuth: authStatus });
    }

    render() {
        if (this.state.isAuth) {
            return (
                <div>
                    {
                        this.props.children.filter(child => {
                            return this.props.authenticatedChildren[child.key];
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>
                    {
                        this.props.children.filter(child => {
                            return !this.props.authenticatedChildren[child.key];
                        })
                    }
                </div>
            )
        }
    }
}

export default withRouter(AuthenticatedAlternative);
