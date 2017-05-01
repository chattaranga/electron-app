import * as types from '../actions/types';

const initialState = {
  prompts: null,
  loading: false,
  error: null
};

function promptsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.FETCH_PROMPTS_REQUEST: newState.loading = true; break;
      case types.FETCH_PROMPTS_SUCCESS:
        newState.prompts = action.data.prompts;
        newState.loading = false;
        break;
      case types.FETCH_PROMPTS_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      default: break;
  }
  return newState;
}

export default promptsReducer;
