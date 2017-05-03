import * as types from '../actions/types';

const initialState = {
  languages: null,
  loading: false,
  error: null
};

function languagesReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.FETCH_LANGUAGES_REQUEST: newState.loading = true; break;
      case types.FETCH_LANGUAGES_SUCCESS:
        newState.languages = action.data.languages;
        newState.loading = false;
        break;
      case types.FETCH_LANGUAGES_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      default: break;
  }
  return newState;
}

export default languagesReducer;
