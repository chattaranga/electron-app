import {expect} from 'chai';
import * as types from '../actions/types';
import * as translationActions from '../actions/translation.actions';

describe('Translation actions:', () => {
   describe('translateText()', () => {
       it('is a function', () => {
           expect(translationActions.translateText).to.be.a('function');
       });
       it('returns a function', () => {
           expect(translationActions.translateText()).to.be.a('function');
       });
   });
   describe('translateTextRequest()', () => {
       it('is a function', () => {
           expect(translationActions.translateTextRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(translationActions.translateTextRequest()).to.eql({
               type: types.TRANSLATE_TEXT_REQUEST
           });
       });
   });
   describe('translateTextSuccess()', () => {
       it('is a function', () => {
           expect(translationActions.translateTextSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(translationActions.translateTextSuccess('data')).to.eql({
               type: types.TRANSLATE_TEXT_SUCCESS,
               data: 'data'
           });
       });
   });
   describe('translateTextError()', () => {
       it('is a function', () => {
           expect(translationActions.translateTextError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(translationActions.translateTextError('err')).to.eql({
               type: types.TRANSLATE_TEXT_ERROR,
               data: 'err'
           });
       });
   });
});