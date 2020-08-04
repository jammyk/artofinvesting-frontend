import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, isAuthenticated, redirectToLogin } from '../../helpers/authentication';

class Authenticated extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        };
    }


    componentDidMount() {
        getUser(this);

        if (isAuthenticated) {
          this.setState({ user: { loggedIn: true}});
        } else {
          redirectToLogin(this);
        }

        // const jwt = getJwt();
        // console.log(jwt);
        // if (!jwt) {
        //     this.props.history.push({pathname: '/login', state: {isModalVisible: true}});
        // } else {
        //     console.log('Logged in');
        //     this.setState({user: {loggedIn: true}})
        //     // axios.get('/getUser/', { headers: { 
        //     //     Authorization: 'Bearer ${jwt}'
        //     // }}).then(res => { 
        //     //     this.setState({
        //     //         user: res.data
        //     //     });
        //     // }).catch(err => {
        //     //     this.props.history.push('/login');
        //     // })
        // }
    }

  render() {
    if (this.state.user === undefined) {
        return (
            <div><h1>Loading ...</h1></div>
        );
    }
    console.log(this.state.user);
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Authenticated);
