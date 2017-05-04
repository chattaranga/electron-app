import * as types from '../actions/types';

const initialState = {
  translatedText: '',
  loading: false,
  error: null
};

function translationReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
    case types.TRANSLATE_TEXT_REQUEST: 
      newState.loading = true;
      break;
    case types.TRANSLATE_TEXT_SUCCESS:
      newState.loading = false;
      newState.translatedText = action.data.translation;
      break;
    case types.TRANSLATE_TEXT_ERROR:
      newState.loading = false;
      newState.error = action.data;
      break;
  }
  return newState;
}

export default translationReducer;