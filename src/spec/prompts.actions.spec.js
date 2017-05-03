import {expect} from 'chai';
import * as types from '../actions/types';
import * as promptsActions from '../actions/prompts.actions.js';

describe('Prompts actions:', () => {
   describe('fetchPrompts()', () => {
       it('is a function', () => {
           expect(promptsActions.fetchPrompts).to.be.a('function');
       });
       it('returns a function', () => {
           expect(promptsActions.fetchPrompts()).to.be.a('function');
       });
   });
   describe('fetchPromptsRequest()', () => {
       it('is a function', () => {
           expect(promptsActions.fetchPromptsRequest).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(promptsActions.fetchPromptsRequest()).to.eql({
               type: types.FETCH_PROMPTS_REQUEST
           });
       });
   });
   describe('fetchPromptsSuccess()', () => {
       it('is a function', () => {
           expect(promptsActions.fetchPromptsSuccess).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(promptsActions.fetchPromptsSuccess('prompts')).to.eql({
               type: types.FETCH_PROMPTS_SUCCESS,
               data: 'prompts'
           });
       });
   });
   describe('fetchPromptsError()', () => {
       it('is a function', () => {
           expect(promptsActions.fetchPromptsError).to.be.a('function');
       });
       it('returns the expected action', () => {
           expect(promptsActions.fetchPromptsError('err')).to.eql({
               type: types.FETCH_PROMPTS_ERROR,
               data: 'err'
           });
       });
   });
});