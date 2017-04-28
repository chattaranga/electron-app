import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchBadges () {
    return function (dispatch) {
        dispatch(fetchBadgesRequest());
        axios
            .get(`${ROOT}badges`)
            .then(res => {
                dispatch(fetchBadgesSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchBadgesError(err));
            });
    };
}

export function fetchBadgesRequest () {
    return {
        type: types.FETCH_BADGES_REQUEST
    };
}

export function fetchBadgesSuccess (badges) {
    return {
        type: types.FETCH_BADGES_SUCCESS,
        data: badges
    };
}

export function fetchBadgesError (err) {
    return {
        type: types.FETCH_BADGES_ERROR,
        data: err
    };
}