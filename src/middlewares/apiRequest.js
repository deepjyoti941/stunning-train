import { GET_SUGGESTIONS } from '../actions/types';
import PostCode from '../services/Postcode';
import { getSuggestionList } from '../actions';

const apiRequest = store => next => (action) => {
  next(action);

  if (action.type === GET_SUGGESTIONS) {
    const response = PostCode.getAddress(action.payload);
    store.dispatch(getSuggestionList(response));
  }
};

export default apiRequest;
