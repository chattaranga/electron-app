import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchUser (username) {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios
            .get(`${ROOT}users/${username}`)
            .then(res => {
                dispatch(fetchUserSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchUserError(err));
            });
    };
}

export function fetchUserRequest () {
    return {
        type: types.FETCH_USER_REQUEST
    };
}

export function fetchUserSuccess (user) {
    return {
        type: types.FETCH_USER_SUCCESS,
        data: user
    };
}

export function fetchUserError (err) {
    return {
        type: types.FETCH_USER_ERROR,
        data: err
    };
}

export function formChange (e) {
  return {
    type: types.FORM_CHANGE,
    data: e
  };
}

export function addUser (username, language, level, name, email) {
    return function (dispatch) {
        dispatch(addUserRequest());
        axios
            .post(`${ROOT}users`, {
                username: username,
                name: name,
                email: email,
                userLanguages: [{language: level}]
            })
            .then(res => {
                dispatch(addUserSuccess(res.data));
            })
            .catch(err => {
                dispatch(addUserError(err));
            });
    };
}

export function addUserRequest () {
    return {
        type: types.ADD_USER_REQUEST
    };
}

export function addUserSuccess (user) {
    return {
        type: types.ADD_USER_SUCCESS,
        data: user
    };
}

export function addUserError (err) {
    return {
        type: types.ADD_USER_ERROR,
        data: err
    };
}

export function handleEmailChange (e) {
  return {
    type: types.HANDLE_EMAIL_CHANGE,
    data: e
  };
}

export function handleNameChange (e) {
  return {
    type: types.HANDLE_NAME_CHANGE,
    data: e
  };
}

export function handleUsernameChange (e) {
  return {
    type: types.HANDLE_USERNAME_CHANGE,
    data: e
  };
}

export function handleLanguageChange (language) {
  return {
    type: types.HANDLE_LANGUAGE_CHANGE,
    data: language
  };
}

export function handleLevelChange (level) {
  return {
    type: types.HANDLE_LEVEL_CHANGE,
    data: level
  };
}