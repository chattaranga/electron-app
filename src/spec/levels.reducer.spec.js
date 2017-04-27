import {expect} from 'chai';
import levelsReducer from '../reducer/levels.reducer.js';
import * as types from '../actions/types';

const initialState = {
  levels: null,
  loading: false,
  error: null
};

describe('levelsReducer()', () => {
  it('is a function', () => {
    expect(levelsReducer).to.be.a('function');
  });
  describe('when type is FETCH_LEVELS_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.FETCH_LEVELS_REQUEST
      };
      expect(levelsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        levels: null,
        loading: true,
        error: null
      };
      const action = {
        type: types.FETCH_LEVELS_REQUEST
      };
      expect(levelsReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is FETCH_LEVELS_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {levels: 'levels'};
      const action = {type: types.FETCH_LEVELS_SUCCESS, data: data};
      expect(levelsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {levels: 'levels'};
      const action = {type: types.FETCH_LEVELS_SUCCESS, data: data};
      const exp = {
        levels: 'levels',
        loading: false,
        error: null
      };
      expect(levelsReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is FETCH_LEVELS_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.FETCH_LEVELS_ERROR, data: 'error'};
      expect(levelsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        levels: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.FETCH_LEVELS_ERROR, data: 'error'};
      expect(levelsReducer(initialState, action)).to.eql(exp);
    });
  });
});
