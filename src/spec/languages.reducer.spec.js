import {expect} from 'chai';
import languagesReducer from '../reducer/languages.reducer.js';
import * as types from '../actions/types';

const initialState = {
  languages: null,
  loading: false,
  error: null
};

describe('languagesReducer()', () => {
  it('is a function', () => {
    expect(languagesReducer).to.be.a('function');
  });
  describe('when type is FETCH_LANGUAGES_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.FETCH_LANGUAGES_REQUEST
      };
      expect(languagesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        languages: null,
        loading: true,
        error: null
      };
      const action = {
        type: types.FETCH_LANGUAGES_REQUEST
      };
      expect(languagesReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is FETCH_LANGUAGES_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {languages: 'languages'};
      const action = {type: types.FETCH_LANGUAGES_SUCCESS, data: data};
      expect(languagesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {languages: 'languages'};
      const action = {type: types.FETCH_LANGUAGES_SUCCESS, data: data};
      const exp = {
        languages: 'languages',
        loading: false,
        error: null
      };
      expect(languagesReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is FETCH_LANGUAGES_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.FETCH_LANGUAGES_ERROR, data: 'error'};
      expect(languagesReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        languages: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.FETCH_LANGUAGES_ERROR, data: 'error'};
      expect(languagesReducer(initialState, action)).to.eql(exp);
    });
  });
});
