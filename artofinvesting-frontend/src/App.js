import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Screener from './components/Screener'
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import TestPage from './TestPage';
import LoginModal from './components/authentication/LoginModal';
import Registration from './components/Registration';
import UserRecoverPassword from './components/UserRecoverPassword';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    // TODO axios call
  }


  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: {}    // data.user
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <HomePage {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}
          />
          <Route 
          exact 
          path='/login'
          render={props => (
            <LoginModal {... props} isModalVisible={true} />
          )} />
          <Route path='/screeners' component={Screener} />
          <Route path='/details' component={DetailsPage} />
          <Route path='/test' component={TestPage} />
          <Route path='/register' component={Registration} />
          <Route path='/forgotpass' component={UserRecoverPassword} />
        </Switch>
      </div>
    );
  }
}

