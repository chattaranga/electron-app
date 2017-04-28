import {expect} from 'chai';
import * as types from '../actions/types';
import * as userActions from '../actions/user.actions.js';

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
   describe('addUser()', () => {
       it('is a function', () => {
           expect(userActions.addUser).to.be.a('function');
       });
       it('returns a function', () => {
           expect(userActions.addUser()).to.be.a('function');
       });
   });
   describe('addUserRequest()', () => {
       it('is a function', () => {
           expect(userActions.addUserRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.addUserRequest()).to.eql({
               type: types.ADD_USER_REQUEST
           });
       });
   });
   describe('addUserSuccess()', () => {
       it('is a function', () => {
           expect(userActions.addUserSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.addUserSuccess('user1')).to.eql({
               type: types.ADD_USER_SUCCESS,
               data: 'user1'
           });
       });
   });
   describe('addUserError()', () => {
       it('is a function', () => {
           expect(userActions.addUserError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.addUserError('err')).to.eql({
               type: types.ADD_USER_ERROR,
               data: 'err'
           });
       });
   });
   describe('logOut()', () => {
       it('is a function', () => {
           expect(userActions.logOut).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.logOut()).to.eql({
               type: types.LOG_OUT
           });
       });
   });
   describe('handleEmailChange()', () => {
       it('is a function', () => {
           expect(userActions.handleEmailChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.handleEmailChange('e')).to.eql({
               type: types.HANDLE_EMAIL_CHANGE,
               data: 'e'
           });
       });
   });
   describe('handleNameChange()', () => {
       it('is a function', () => {
           expect(userActions.handleNameChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.handleNameChange('e')).to.eql({
               type: types.HANDLE_NAME_CHANGE,
               data: 'e'
           });
       });
   });
   describe('handleUsernameChange()', () => {
       it('is a function', () => {
           expect(userActions.handleUsernameChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.handleUsernameChange('e')).to.eql({
               type: types.HANDLE_USERNAME_CHANGE,
               data: 'e'
           });
       });
   });
   describe('handleLanguageChange()', () => {
       it('is a function', () => {
           expect(userActions.handleLanguageChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.handleLanguageChange('language')).to.eql({
               type: types.HANDLE_LANGUAGE_CHANGE,
               data: 'language'
           });
       });
   });
   describe('handleLevelChange()', () => {
       it('is a function', () => {
           expect(userActions.handleLevelChange).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(userActions.handleLevelChange('level')).to.eql({
               type: types.HANDLE_LEVEL_CHANGE,
               data: 'level'
           });
       });
   });
});
