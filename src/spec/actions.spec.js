import {expect} from 'chai';
import * as types from '../actions/types';
import * as userActions from '../actions/actions.js';

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
});