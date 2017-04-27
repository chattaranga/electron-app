import {expect} from 'chai';
import * as types from '../actions/types';
import * as levelsActions from '../actions/levels.actions.js';

describe('Levels actions:', () => {
   describe('fetchLevels()', () => {
       it('is a function', () => {
           expect(levelsActions.fetchLevels).to.be.a('function');
       });
       it('returns a function', () => {
           expect(levelsActions.fetchLevels()).to.be.a('function');
       });
   });
   describe('fetchLevelsRequest()', () => {
       it('is a function', () => {
           expect(levelsActions.fetchLevelsRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(levelsActions.fetchLevelsRequest()).to.eql({
               type: types.FETCH_LEVELS_REQUEST
           });
       });
   });
   describe('fetchLevelsSuccess()', () => {
       it('is a function', () => {
           expect(levelsActions.fetchLevelsSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(levelsActions.fetchLevelsSuccess('levels')).to.eql({
               type: types.FETCH_LEVELS_SUCCESS,
               data: 'levels'
           });
       });
   });
   describe('fetchLevelsError()', () => {
       it('is a function', () => {
           expect(levelsActions.fetchLevelsError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(levelsActions.fetchLevelsError('err')).to.eql({
               type: types.FETCH_LEVELS_ERROR,
               data: 'err'
           });
       });
   });
});