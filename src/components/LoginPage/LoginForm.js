import React from 'react';
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchUser, formChange} from '../../actions/actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin.bind(null, this.props.formText)}>
          <input 
              className='text-box' 
              placeholder='Username' 
              type='text'
              value={this.props.formText}
              onChange={this.handleChange}/>
          <input 
              className='submit button-primary' 
              type='submit' 
              value='Log in'
              />
        </form>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/hub'>Go to Hub</Link>
        <Link to='/achievements'>Go to Achievements</Link>
      </div>
    );
  }
  handleChange (e) {
    console.log(e);
    this.props.formChange(e.target.value);
  }
  handleLogin (username, e) {
    e.preventDefault();
    this.props.getUser(username);
    this.props.formChange('');
  }
}

function mapDispatchToProps (dispatch) {
  return  {
    getUser: (username) => {
      dispatch(fetchUser(username));
    },
    formChange: e => {
      dispatch(formChange(e));
    },
  };
}

function mapStateToProps (state) {
  return {
    formText: state.user.formText,
    user: state.user.user,
    error: state.user.error,
    loading: state.user.loading
  };
}

LoginForm.PropTypes = {
  getUser: PropTypes.func,
  formChange: PropTypes.func,
  handleLogin: PropTypes.func,
  formText: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);