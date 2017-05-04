import * as types from './types';

export function endCall (username) {
    return {
        type: types.END_CALL,
        data: username
    };
}

export function startCall () {
    return {
        type: types.START_CALL
    };
}

export function resetCall () {
    return {
        type: types.RESET_CALL
    };
}