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
      case types.HANDLE_EMAIL_CHANGE:
        newState.emailText = action.data; break;
      case types.HANDLE_NAME_CHANGE:
        newState.nameText = action.data; break;
      case types.HANDLE_USERNAME_CHANGE:
        newState.userNameText = action.data; break;
      case types.HANDLE_LANGUAGE_CHANGE:
        newState.selectedLanguage = action.data; break;
      case types.HANDLE_LEVEL_CHANGE:
        newState.selectedLevel = action.data; break;
      default: break;
  }
  return newState;
}

export default userReducer;
