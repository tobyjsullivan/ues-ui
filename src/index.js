import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import app from './reducers';

import Root from './components/Root';
import './index.css';

const store = createStore(app, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
