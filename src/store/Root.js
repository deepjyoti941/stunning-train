import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

console.log('i am Root file');

export default ({ children, initialState = {} }) => (
  <Provider
    store={createStore(reducers, initialState, applyMiddleware(ReduxThunk))}>
    {children}
  </Provider>
);
