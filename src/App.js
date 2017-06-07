import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './accounts/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Universal Event Store</h2>
        </div>
        <Route exact path="/" render={() => (
          <p><Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link></p>
        )} />
        <Route exact path="/signup" component={LoginForm} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    );
  }
}

export default App;
