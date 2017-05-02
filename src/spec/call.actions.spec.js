import {expect} from 'chai';
import * as types from '../actions/types';
import * as callActions from '../actions/call.actions.js';

describe('Call actions:', () => {
   describe('endCall()', () => {
       it('is a function', () => {
           expect(callActions.endCall).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(callActions.endCall('name')).to.eql({
               type: types.END_CALL,
               data: 'name'
           });
       });
   });
});