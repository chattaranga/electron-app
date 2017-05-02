import * as types from './types';

export function endCall (username) {
    return {
        type: types.END_CALL,
        data: username
    };
}