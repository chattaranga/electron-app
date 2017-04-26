import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import {fetchUser} from '../../actions/actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <input 
              className='text-box' 
              placeholder='Username' 
              type='text'/>
          <input 
              className='submit button-primary' 
              type='submit' 
              value='Log in'/>
        </form>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/hub'>Go to Hub</Link>
        <Link to='/achievements'>Go to Achievements</Link>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return  {
    getUser: (username) => {
      dispatch(fetchUser(username));
    }
  };
}

function mapStateToProps (state) {
  return {
    user: state.user,
    error: state.user.error,
    loading: state.user.loading
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);