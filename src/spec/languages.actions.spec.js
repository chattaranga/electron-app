import {expect} from 'chai';
import * as types from '../actions/types';
import * as languagesActions from '../actions/languages.actions.js';

describe('Languages actions:', () => {
   describe('fetchLanguages()', () => {
       it('is a function', () => {
           expect(languagesActions.fetchLanguages).to.be.a('function');
       });
       it('returns a function', () => {
           expect(languagesActions.fetchLanguages()).to.be.a('function');
       });
   });
   describe('fetchLanguagesRequest()', () => {
       it('is a function', () => {
           expect(languagesActions.fetchLanguagesRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(languagesActions.fetchLanguagesRequest()).to.eql({
               type: types.FETCH_LANGUAGES_REQUEST
           });
       });
   });
   describe('fetchLanguagesSuccess()', () => {
       it('is a function', () => {
           expect(languagesActions.fetchLanguagesSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(languagesActions.fetchLanguagesSuccess('Languages')).to.eql({
               type: types.FETCH_LANGUAGES_SUCCESS,
               data: 'Languages'
           });
       });
   });
   describe('fetchLanguagesError()', () => {
       it('is a function', () => {
           expect(languagesActions.fetchLanguagesError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(languagesActions.fetchLanguagesError('err')).to.eql({
               type: types.FETCH_LANGUAGES_ERROR,
               data: 'err'
           });
       });
   });
});