import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import thunkMiddleware from 'redux-thunk';

var createLogger = require('redux-logger');
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

var Provider = require('react-redux').Provider;


const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch async actions
  loggerMiddleware // middleware that logs actions
)(createStore);

//const store = createStoreWithMiddleware((rootReducer as <A extends Action>(state: any, action: A) => any));

const store = createStoreWithMiddleware(rootReducer);

import Main from './Main';

ReactDOM.render(<Provider store={store}>
      <Main/>
    </Provider>, document.getElementById('app')); // jshint ignore:line
