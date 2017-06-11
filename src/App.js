import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './accounts/LoginForm';
import Dashboard from './account/Dashboard';
import StorePage from './store/StorePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Universal Event Store</h2>
        </div>
        <Switch>
          <Route path="/signup" component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/account" component={Dashboard} />
          <Route path="/:storeId" component={StorePage} />
          <Route render={() => (
            <p><Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link></p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
