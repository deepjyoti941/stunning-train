import { GET_SUGGESTIONS } from '../actions/types';
import PostcodeService from '../services/Postcode';
import { getSuggestionList } from '../actions';

const apiRequest = store => next => (action) => {
  next(action);

  if (action.type === GET_SUGGESTIONS) {
    console.log('state in apiRequest middleware', store.getState());
    const response = PostcodeService.getAddress(
      store.getState().configs.appData,
      action.payload
    );
    store.dispatch(getSuggestionList(response));
  }
};

export default apiRequest;
