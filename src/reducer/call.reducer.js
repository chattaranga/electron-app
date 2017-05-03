import * as types from '../actions/types';

const initialState = {
  inCall: false,
  callStarted: false,
  callEnded: false,
  remoteUser: ''
};

function callReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
      case types.START_CALL: 
        newState.callStarted = true; 
        newState.inCall = true;
        break;
      case types.END_CALL: 
        newState.inCall = false; 
        newState.callEnded = true;
        newState.remoteUser = action.data;
        break;
      case types.RESET_CALL: 
        newState.callStarted = false; 
        newState.inCall = false;
        newState.callEnded = false;
        newState.remoteUser = '';
        break;
      default: break;
  }
  return newState;
}

export default callReducer;
