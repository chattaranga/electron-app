import {expect} from 'chai';
import userReducer from '../reducer/user.reducer.js';
import * as types from '../actions/types';


describe('userReducer(): fetch user actions', () => {
  const initialState = {
    user: null,
    loading: false,
    error: null
  };
  it('is a function', () => {
    expect(userReducer).to.be.a('function');
  });
  describe('when type is FETCH_USER_REQUEST', () => {
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

describe('userReducer(): add user actions', () => {
  const initialState = {
    user: null,
    loading: false,
    error: null
  };
  describe('when type is ADD_USER_REQUEST', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.ADD_USER_REQUEST
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
        type: types.ADD_USER_REQUEST
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is ADD_USER_SUCCESS', () => {
    it('does not mutate state', () => {
      const data = {user: 'user'};
      const action = {type: types.ADD_USER_SUCCESS, data: data};
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const data = {user: 'user'};
      const action = {type: types.ADD_USER_SUCCESS, data: data};
      const exp = {
        user: 'user',
        loading: false,
        error: null
      };
      expect(userReducer(initialState, action)).to.eql(exp);

    });
  });
  describe('when type is ADD_USER_ERROR', () => {
    it('does not mutate state', () => {
      const action = {type: types.ADD_USER_ERROR, data: 'error'};
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        user: null,
        loading: false,
        error: 'error'
      };
      const action = {type: types.ADD_USER_ERROR, data: 'error'};
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
});

describe.only('userReducer(): sign out actions', () => {
  const initialState = {
    user: 'user1',
    formText: 'user1',
    emailText: 'user1@nc.co.uk',
    nameText: 'User',
    userNameText: 'UserName',
    selectedLanguage: 'Spanish',
    selectedLevel: 'Beginner'
  };
  describe('when type is LOG_OUT', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.LOG_OUT
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        user: null,
        formText: '',
        emailText: '',
        nameText: '',
        userNameText: '',
        selectedLanguage: null,
        selectedLevel: null
      };
      const action = {
        type: types.LOG_OUT
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });

});

describe('userReducer(): form changes', () => {
  const initialState = {
    formText: '',
    emailText: '',
    nameText: '',
    userNameText: '',
    selectedLanguage: null,
    selectedLevel: null
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
        formText: 'e',
        emailText: '',
        nameText: '',
        userNameText: '',
        selectedLanguage: null,
        selectedLevel: null
      };
      const action = {
        type: types.FORM_CHANGE,
        data: 'e'
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is HANDLE_EMAIL_CHANGE', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.HANDLE_EMAIL_CHANGE,
        data: 'e'
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        formText: '',
        emailText: 'e',
        nameText: '',
        userNameText: '',
        selectedLanguage: null,
        selectedLevel: null
      };
      const action = {
        type: types.HANDLE_EMAIL_CHANGE,
        data: 'e'
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is HANDLE_NAME_CHANGE', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.HANDLE_NAME_CHANGE,
        data: 'e'
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        formText: '',
        emailText: '',
        nameText: 'e',
        userNameText: '',
        selectedLanguage: null,
        selectedLevel: null
      };
      const action = {
        type: types.HANDLE_NAME_CHANGE,
        data: 'e'
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is HANDLE_USERNAME_CHANGE', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.HANDLE_USERNAME_CHANGE,
        data: 'e'
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        formText: '',
        emailText: '',
        nameText: '',
        userNameText: 'e',
        selectedLanguage: null,
        selectedLevel: null
      };
      const action = {
        type: types.HANDLE_USERNAME_CHANGE,
        data: 'e'
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is HANDLE_LANGUAGE_CHANGE', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.HANDLE_LANGUAGE_CHANGE,
        data: 'e'
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        formText: '',
        emailText: '',
        nameText: '',
        userNameText: '',
        selectedLanguage: 'English',
        selectedLevel: null
      };
      const action = {
        type: types.HANDLE_LANGUAGE_CHANGE,
        data: 'English'
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
  describe('when type is HANDLE_LEVEL_CHANGE', () => {
    it('does not mutate state', () => {
      const action = {
        type: types.HANDLE_LEVEL_CHANGE,
        data: 'e'
      };
      expect(userReducer(null, action)).to.not.equal(initialState);
    });
    it('replaces state accordingly', () => {
      const exp = {
        formText: '',
        emailText: '',
        nameText: '',
        userNameText: '',
        selectedLanguage: null,
        selectedLevel: 3
      };
      const action = {
        type: types.HANDLE_LEVEL_CHANGE,
        data: 3
      };
      expect(userReducer(initialState, action)).to.eql(exp);
    });
  });
});