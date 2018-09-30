import React from 'react';
import { Provider } from 'react-redux';
import store from './index';

console.log('i am Root file');

export default ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);
