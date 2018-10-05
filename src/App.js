import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <switch>
              <Route exact path="/" component={Dashboard} />
            </switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
