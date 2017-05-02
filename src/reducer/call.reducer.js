import * as types from '../actions/types';

const initialState = {
  inCall: false,
  callEnded: false,
  remoteUser: ''
};

function callReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.END_CALL: 
        newState.inCall = false; 
        newState.callEnded = true;
        newState.remoteUser = action.data;
        break;
      default: break;
  }
  return newState;
}

export default callReducer;
