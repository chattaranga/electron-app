import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchUser (username) {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios
            .get(`${ROOT}/user/${username}`)
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