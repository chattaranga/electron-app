import {expect} from 'chai';
import * as types from '../actions/types';
import * as badgesActions from '../actions/badges.actions.js';

describe('Badges actions:', () => {
   describe('fetchBadges()', () => {
       it('is a function', () => {
           expect(badgesActions.fetchBadges).to.be.a('function');
       });
       it('returns a function', () => {
           expect(badgesActions.fetchBadges()).to.be.a('function');
       });
   });
   describe('fetchBadgesRequest()', () => {
       it('is a function', () => {
           expect(badgesActions.fetchBadgesRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(badgesActions.fetchBadgesRequest()).to.eql({
               type: types.FETCH_BADGES_REQUEST
           });
       });
   });
   describe('fetchBadgesSuccess()', () => {
       it('is a function', () => {
           expect(badgesActions.fetchBadgesSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(badgesActions.fetchBadgesSuccess('badges')).to.eql({
               type: types.FETCH_BADGES_SUCCESS,
               data: 'badges'
           });
       });
   });
   describe('fetchBadgesError()', () => {
       it('is a function', () => {
           expect(badgesActions.fetchBadgesError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(badgesActions.fetchBadgesError('err')).to.eql({
               type: types.FETCH_BADGES_ERROR,
               data: 'err'
           });
       });
   });
});