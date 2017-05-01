import {expect} from 'chai';
import badgesReducer from '../reducer/badges.reducer.js';
import * as types from '../actions/types';

const initialState = {
  badges: null,
  loading: false,
  error: null
};

describe('badgesReducer()', () => {
  it('is a function', () => {
    expect(badgesReducer).to.be.a('function');
  });
  describe('when type is FETCH_BADGES_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.FETCH_BADGES_REQUEST
      };
      expect(badgesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        badges: null,
        loading: true,
        error: null
      };
      const action = {
        type: types.FETCH_BADGES_REQUEST
      };
      expect(badgesReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is FETCH_BADGES_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {badges: 'badges'};
      const action = {type: types.FETCH_BADGES_SUCCESS, data: data};
      expect(badgesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {badges: 'badges'};
      const action = {type: types.FETCH_BADGES_SUCCESS, data: data};
      const exp = {
        badges: 'badges',
        loading: false,
        error: null
      };
      expect(badgesReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is FETCH_BADGES_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.FETCH_BADGES_ERROR, data: 'error'};
      expect(badgesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        badges: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.FETCH_BADGES_ERROR, data: 'error'};
      expect(badgesReducer(initialState, action)).to.eql(exp);
    });
  });
});
