import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchPrompts (language, level) {
    return function (dispatch) {
        dispatch(fetchPromptsRequest());
        axios
            .get(`${ROOT}${language}/${level}/prompts`)
            .then(res => {
                dispatch(fetchPromptsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchPromptsError(err));
            });
    };
}

export function fetchPromptsRequest () {
    return {
        type: types.FETCH_PROMPTS_REQUEST
    };
}

export function fetchPromptsSuccess (prompts) {
    return {
        type: types.FETCH_PROMPTS_SUCCESS,
        data: prompts
    };
}

export function fetchPromptsError (err) {
    return {
        type: types.FETCH_PROMPTS_ERROR,
        data: err
    };
}