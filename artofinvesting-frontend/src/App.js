import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/screeners' />
          <HomePage/>
        </Switch>
      </div>
  );
}

export default App;
