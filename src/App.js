import React from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <Header />

      <Switch>

      <Route path="/">
        <Profile />
      </Route>

      </Switch>
      
    </div>
    </Router>

  );
}

export default App;
