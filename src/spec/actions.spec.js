import {expect} from 'chai';
import * as types from '../actions/types';
import * as userActions from '../actions/user.actions.js';
import * as levelsActions from '../actions/levels.actions.js';

describe('User actions:', () => {
   describe('fetchUser()', () => {
       it('is a function', () => {
           expect(userActions.fetchUser).to.be.a('function');
       });
       it('returns a function', () => {
           expect(userActions.fetchUser()).to.be.a('function');
       });
   });
   describe('fetchUserRequest()', () => {
       it('is a function', () => {
           expect(userActions.fetchUserRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.fetchUserRequest()).to.eql({
               type: types.FETCH_USER_REQUEST
           });
       });
   });
   describe('fetchUserSuccess()', () => {
       it('is a function', () => {
           expect(userActions.fetchUserSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.fetchUserSuccess('user1')).to.eql({
               type: types.FETCH_USER_SUCCESS,
               data: 'user1'
           });
       });
   });
   describe('fetchUserError()', () => {
       it('is a function', () => {
           expect(userActions.fetchUserError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.fetchUserError('err')).to.eql({
               type: types.FETCH_USER_ERROR,
               data: 'err'
           });
       });
   });
   describe('formChange()', () => {
       it('is a function', () => {
           expect(userActions.formChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.formChange('e')).to.eql({
               type: types.FORM_CHANGE,
               data: 'e'
           });
       });
   });
});

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