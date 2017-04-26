import * as types from '../actions/types';

const initialState = {
  user: null,
  loading: false,
  error: null,
  formText: '',
  emailText: '',
  nameText: '',
  userNameText: '',
  selectedLanguage: null,
  selectedLevel: null
};

function userReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.FETCH_USER_REQUEST: newState.loading = true; break;
      case types.FETCH_USER_SUCCESS:
        newState.user = action.data.user;
        newState.loading = false;
        break;
      case types.FETCH_USER_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      case types.FORM_CHANGE:
        newState.formText = action.data; break;
      case types.ADD_USER_REQUEST: newState.loading = true; break;
      case types.ADD_USER_SUCCESS:
        newState.user = action.data.user;
        newState.loading = false;
        break;
      case types.ADD_USER_ERROR:
        newState.error = action.data;
        newState.loading = false;
        break;
      default: break;
  }
  return newState;
}

export default userReducer;
