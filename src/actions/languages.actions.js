import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchLanguages () {
    return function (dispatch) {
        dispatch(fetchLanguagesRequest());
        axios
            .get(`${ROOT}languages`)
            .then(res => {
                dispatch(fetchLanguagesSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchLanguagesError(err));
            });
    };
}

export function fetchLanguagesRequest () {
    return {
        type: types.FETCH_LANGUAGES_REQUEST
    };
}

export function fetchLanguagesSuccess (languages) {
    return {
        type: types.FETCH_LANGUAGES_SUCCESS,
        data: languages
    };
}

export function fetchLanguagesError (err) {
    return {
        type: types.FETCH_LANGUAGES_ERROR,
        data: err
    };
}