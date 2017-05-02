import {expect} from 'chai';
import callReducer from '../reducer/call.reducer.js';
import * as types from '../actions/types';

const initialState = {
  inCall: true,
  callEnded: false
};

describe('callReducer()', () => {
  it('is a function', () => {
    expect(callReducer).to.be.a('function');
  });
  describe('when type is END_CALL', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.END_CALL,
        data: 'name'
      };
      expect(callReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
          inCall: false,
          callEnded: true,
          remoteUser: 'name'
      };
      const action = {
        type: types.END_CALL,
        data: 'name'
      };
      expect(callReducer(initialState, action)).to.eql(exp);
    });
  });
});
