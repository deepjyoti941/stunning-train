import { combineReducers } from 'redux';
import suggestionsReducer from './suggestions';
import configReducer from './configs';

export default combineReducers({
  suggestions: suggestionsReducer,
  configs: configReducer
});
