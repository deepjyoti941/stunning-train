import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import async from '../middlewares/async';
import apiRequest from '../middlewares/apiRequest';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log('from store');
export default (initialState) => {
  console.log('initialState from store =>', initialState);
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(async, apiRequest))
  );
};
