import {expect} from 'chai';
import userReducer from '../reducer/user.reducer.js';
import * as types from '../actions/types';

const initialState = {
  user: null,
  loading: false,
  error: null
};

describe('userReducer()', () => {
  it('is a function', () => {
    expect(userReducer).to.be.a('function');
  });
  describe('when type is FETCH_TOPIC_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.FETCH_USER_REQUEST
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        user: null,
        loading: true,
        error: null
      };
      const action = {
        type: types.FETCH_USER_REQUEST
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is FETCH_USER_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {user: 'user'};
      const action = {type: types.FETCH_USER_SUCCESS, data: data};
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {user: 'user'};
      const action = {type: types.FETCH_USER_SUCCESS, data: data};
      const exp = {
        user: 'user',
        loading: false,
        error: null
      };
      expect(userReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is FETCH_USER_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.FETCH_USER_ERROR, data: 'error'};
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        user: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.FETCH_USER_ERROR, data: 'error'};
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
});

describe('FORM_CHANGE', () => {
    const initialState = {
      formText: ''
    };
    describe('when type is FORM_CHANGE', () => {
      it('does not mutate state', () => {
        const action = {
          type: types.FORM_CHANGE,
          data: 'e'
        };
        expect(userReducer(null, action)).to.not.equal(initialState);
      });
      it('replaces state accordingly', () => {
        const exp = {
          formText: 'e'
        };
        const action = {
          type: types.FORM_CHANGE,
          data: 'e'
        };
        expect(userReducer(initialState, action)).to.eql(exp);
      });
    });
  });