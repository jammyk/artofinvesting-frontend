import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Screener from './components/Screener'
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import TestPage from './TestPage';


function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/screeners' component={Screener}/>
          <Route path='/details' component={DetailsPage}/>
          <Route path='/test' component={TestPage} />
        </Switch>
      </div>
  );
}

export default App;
