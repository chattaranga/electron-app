import {expect} from 'chai';
import callReducer from '../reducer/call.reducer.js';
import * as types from '../actions/types';

const initialState = {
  inCall: false,
  callStarted: false,
  callEnded: false,
  remoteUser: ''
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
        callStarted: false,
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
  describe('when type is START_CALL', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.START_CALL,
        data: 'name'
      };
      expect(callReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        inCall: true,
        callStarted: true,
        callEnded: false,
        remoteUser: ''
      };
      const action = {
        type: types.START_CALL
      };
      expect(callReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is RESET_CALL', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.RESET_CALL
      };
      expect(callReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        inCall: false,
        callStarted: false,
        callEnded: false,
        remoteUser: ''
      };
      const action = {
        type: types.RESET_CALL
      };
      expect(callReducer(initialState, action)).to.eql(exp);
    });
  });
});