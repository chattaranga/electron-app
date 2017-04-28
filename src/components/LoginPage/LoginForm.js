import React from 'react';
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchUser, formChange} from '../../actions/user.actions';
import {fetchLevels} from '../../actions/levels.actions';
import {fetchLanguages} from '../../actions/languages.actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    if (!this.props.languages) this.props.fetchLanguages();
    if (!this.props.levels) this.props.fetchLevels();
  }
  render() {
    const message = this.props.error ? (<p className='error-message'>Something went wrong!</p>) : (<p/>);
    if (this.props.user) {
      return (
        <div>
          <h1>{`Welcome, ${this.props.user.name}!`}</h1>
          <Link to='/hub'><h2 className='button-primary'>{'Enter'}</h2></Link>
        </div>
      );
    } else
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
        {message}
        <span className='button-linking'><Link to='/signup'>Sign Up</Link></span>
      </div>
    );
  }
  handleChange (e) {
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
    fetchLanguages: () => {
      dispatch(fetchLanguages());
    },
    fetchLevels: () => {
      dispatch(fetchLevels());
    }
  };
}

function mapStateToProps (state) {
  return {
    formText: state.user.formText,
    user: state.user.user,
    error: state.user.error,
    loading: state.user.loading,
    languages: state.languages.languages,
    levels: state.levels.levels
  };
}

LoginForm.PropTypes = {
  getUser: PropTypes.func,
  formChange: PropTypes.func,
  handleLogin: PropTypes.func,
  formText: PropTypes.string,
  error: PropTypes.error
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);