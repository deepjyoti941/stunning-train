import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import async from '../middlewares/async';
import apiRequest from '../middlewares/apiRequest';
import reducers from '../reducers';

console.log('i am Root file');

export default ({ children, initialState = {} }) => (
  <Provider
    store={createStore(
      reducers,
      initialState,
      applyMiddleware(async, apiRequest)
    )}>
    {children}
  </Provider>
);
