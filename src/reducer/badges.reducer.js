import * as types from '../actions/types';

const initialState = {
  badges: null,
  loading: false,
  error: null
};

function badgesReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.FETCH_BADGES_REQUEST: newState.loading = true; break;
      case types.FETCH_BADGES_SUCCESS:
        newState.badges = action.data.badges;
        newState.loading = false;
        break;
      case types.FETCH_BADGES_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      default: break;
  }
  return newState;
}

export default badgesReducer;
