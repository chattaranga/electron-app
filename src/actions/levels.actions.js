import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchLevels (username) {
    return function (dispatch) {
        dispatch(fetchLevelsRequest());
        axios
            .get(`${ROOT}/user/${username}`)
            .then(res => {
                dispatch(fetchLevelsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchLevelsError(err));
            });
    };
}

export function fetchLevelsRequest () {
    return {
        type: types.FETCH_LEVELS_REQUEST
    };
}

export function fetchLevelsSuccess (levels) {
    return {
        type: types.FETCH_LEVELS_SUCCESS,
        data: levels
    };
}

export function fetchLevelsError (err) {
    return {
        type: types.FETCH_LEVELS_ERROR,
        data: err
    };
}