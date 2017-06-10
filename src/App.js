import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './accounts/LoginForm';
import EntitiesPage from './entities/EntitiesPage';
import EventsPage from './entities/EventsPage';

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
          <Route path="/entities/:entityId/events" component={EventsPage} />
          <Route path="/entities" component={EntitiesPage} />
          <Route render={() => (
            <p><Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link></p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
