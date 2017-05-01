import {expect} from 'chai';
import promptsReducer from '../reducer/prompts.reducer.js';
import * as types from '../actions/types';

const initialState = {
  prompts: null,
  loading: false,
  error: null
};

describe('promptsReducer()', () => {
  it('is a function', () => {
    expect(promptsReducer).to.be.a('function');
  });
  describe('when type is FETCH_PROMPTS_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.FETCH_PROMPTS_REQUEST
      };
      expect(promptsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        prompts: null,
        loading: true,
        error: null
      };
      const action = {
        type: types.FETCH_PROMPTS_REQUEST
      };
      expect(promptsReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is FETCH_PROMPTS_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {prompts: 'prompts'};
      const action = {type: types.FETCH_PROMPTS_SUCCESS, data: data};
      expect(promptsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {prompts: 'prompts'};
      const action = {type: types.FETCH_PROMPTS_SUCCESS, data: data};
      const exp = {
        prompts: 'prompts',
        loading: false,
        error: null
      };
      expect(promptsReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is FETCH_PROMPTS_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.FETCH_PROMPTS_ERROR, data: 'error'};
      expect(promptsReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        prompts: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.FETCH_PROMPTS_ERROR, data: 'error'};
      expect(promptsReducer(initialState, action)).to.eql(exp);
    });
  });
});
