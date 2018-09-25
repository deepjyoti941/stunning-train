import PostCode from '../services/Postcode';
import {
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_SUCCESS,
  GET_SUGGESTIONS_FAIL,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAIL
} from './types';

const suggestionsListSuccess = (dispatch, result) => {
  console.log(result);

  dispatch({
    type: GET_SUGGESTIONS_SUCCESS,
    payload: result
  });
};

const suggestionsListFail = dispatch => dispatch({
  type: GET_SUGGESTIONS_FAIL
});

const getAddressSuccess = (dispatch, result) => {
  console.log(result);

  dispatch({
    type: GET_ADDRESS_SUCCESS,
    payload: result
  });
};

const getAddressFail = dispatch => dispatch({
  type: GET_ADDRESS_FAIL
});

// export const getSuggestions = query => PostCode.getAddress(query)
//   .then(({ data }) => {
//     console.log('data=>>', data);
//     return {
//       type: GET_SUGGESTIONS_SUCCESS,
//       payload: data
//     };
//   })
//   .catch(error => suggestionsListFail(dispatch, error));
export const getSuggestionList = response => ({
  type: GET_SUGGESTIONS_SUCCESS,
  payload: response
});

export const getSuggestions = query => ({
  type: GET_SUGGESTIONS,
  payload: query
});

export const getAddress = item => dispatch => PostCode.setAddress(item.Id)
  .then((response) => {
    if (response.status === 200) {
      if ('Error' in response.data.Items[0]) {
        getAddressFail(dispatch, { error: true });
        return;
      }

      getAddressSuccess(
        dispatch,
        PostCode.formattAddress(response.data.Items[0])
      );
    }
  })
  .catch(() => getAddressFail(dispatch, { error: true }));
