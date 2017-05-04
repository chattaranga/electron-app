import * as types from '../actions/types';
import translationReducer from '../reducer/translation.reducer';
import {expect} from 'chai';

const initialState = {
  translatedText: '',
  loading: false,
  error: null
};

describe ('translationReducer()', () => {
  
  it ('is a function', () => {
    expect(translationReducer).to.be.a('function');
  });
  
  describe ('when type is TRANSLATE_TEXT_REQUEST', () => {   
    it ('does not mutate state', () => {
      const action = {
        type: types.TRANSLATE_TEXT_REQUEST
      };
      expect(translationReducer(null, action)).to.not.eql(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        translatedText: '',
        loading: true,
        error: null
      };
      const action = {
        type: types.TRANSLATE_TEXT_REQUEST
      };
      expect(translationReducer(initialState, action)).to.eql(exp);
    });
  });

  describe('when type is TRANSLATE_TEXT_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {translation: 'stuff'};
      const action = {type: types.TRANSLATE_TEXT_SUCCESS, data: data};
      expect(translationReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {translation: 'stuff'};
      const action = {type: types.TRANSLATE_TEXT_SUCCESS, data: data};
      const exp = {
        translatedText: 'stuff',
        loading: false,
        error: null
      };
      expect(translationReducer(initialState, action)).to.eql(exp);
    });
  });

  describe('when type is TRANSLATE_TEXT_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.TRANSLATE_TEXT_ERROR, data: 'error'};
      expect(translationReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        translatedText: '',
        loading: false,
        error: 'error'
      };
      const action = {type: types.TRANSLATE_TEXT_ERROR, data: 'error'};
      expect(translationReducer(initialState, action)).to.eql(exp);
    });
  });
});