import {
  GET_SUGGESTIONS_SUCCESS,
  GET_SUGGESTIONS_FAIL,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAIL
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_SUGGESTIONS_SUCCESS:
      return { ...state, suggestionsList: action.payload };
    case GET_SUGGESTIONS_FAIL:
      return { ...state, error: 'Api error' };
    case GET_ADDRESS_SUCCESS:
      return { ...state, address: action.payload };
    case GET_ADDRESS_FAIL:
      return { ...state, error: 'Api error' };
    default:
      return state;
  }
}
