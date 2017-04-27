import * as types from '../actions/types';

const initialState = {
  levels: null,
  loading: false,
  error: null
};

function levelsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.FETCH_LEVELS_REQUEST: newState.loading = true; break;
      case types.FETCH_LEVELS_SUCCESS:
        newState.levels = action.data.levels;
        newState.loading = false;
        break;
      case types.FETCH_LEVELS_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      default: break;
  }
  return newState;
}

export default levelsReducer;
