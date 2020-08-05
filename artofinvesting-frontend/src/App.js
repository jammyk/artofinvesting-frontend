import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Screener from './components/Screener'
import FinancialStatement from './components/FinancialStatement'
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import TestPage from './TestPage';
import LoginModal from './components/authentication/LoginModal';
import Registration from './components/Registration';
import UserRecoverPassword from './components/UserRecoverPassword';
import Authenticated from './components/authentication/Authenticated';
import UserProfile from './components/protected/UserProfile';
import UserWatchlist from './components/protected/UserWatchlist';
import ArtistSearch from './components/ArtistSearch';
import ArtistResult from './components/ArtistResult';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          />
          <Route
            exact
            path='/login'
            render={props => (
              <LoginModal {...props} isModalVisible={true} />
            )} />
          <Route path='/artist_search' component={ArtistSearch} />
          <Route path='/artist_details' component={ArtistResult} />
          <Route path='/screeners' component={Screener} />
          <Route path='/details' component={DetailsPage} />
          <Route path='/test' component={TestPage} />
          <Route path='/register' component={Registration} />
          <Route path='/forgotpass' component={UserRecoverPassword} />
          <Authenticated>
            <Route path='/profile' component={UserProfile} />
            <Route path='/watchlist' component={UserWatchlist} />
          </Authenticated>
        </Switch>
      </div>
    );
  }
}

