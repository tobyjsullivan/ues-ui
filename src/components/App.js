import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './accounts/RegistrationForm';
import LoginForm from './accounts/LoginForm';
import ConfirmEmailNotice from './accounts/ConfirmEmailNotice';
import Dashboard from './dashboard/Dashboard';
import StorePage from './store/StorePage';
import EventPage from './events/EventPage';

class App extends Component {
  render() {
    const content = (
      <Switch>
        <Route path="/" exact={true} component={RegistrationForm} />
        <Route path="/confirm-email" component={ConfirmEmailNotice} />
        <Route path="/login" component={LoginForm} />
        <Route path="/account" component={Dashboard} />
        <Route path="/events/:eventId" component={EventPage} />
        <Route path="/:storeId" component={StorePage} />
        <Route render={() => (
          <p><Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link></p>
        )} />
      </Switch>
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Universal Event Store</h2>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
