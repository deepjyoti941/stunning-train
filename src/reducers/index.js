import { combineReducers } from 'redux';
import suggestionsReducer from './suggestions';

export default combineReducers({
  suggestions: suggestionsReducer
});
