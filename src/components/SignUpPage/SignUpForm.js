import React from 'react';
import {Component} from 'react';
// import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {addUser, handleEmailChange, handleNameChange, handleUsernameChange, handleLanguageChange, handleLevelChange} from '../../actions/user.actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='signup-form'>
        <form>
          <div className='forms'>
            <input 
                className='text-box long ' 
                type='text' 
                placeholder='Email'
                value={this.props.emailText}
                onChange={this.handleEmailChange}/>

            <div className='inline'>
              <input 
                  className='text-box left' 
                  type='text' 
                  placeholder='First Name'
                  value={this.props.nameText}
                  onChange={this.handleNameChange}/>
              <input 
                  className='text-box' 
                  type='text' 
                  placeholder='Username'
                  value={this.props.userNameText}
                  onChange={this.handleUsernameChange}/>
            </div>
          </div>
          <h2>What do you want to learn?</h2>
          <div className='signup-flag-buttons'>
            <div>
              <a><img 
                  onClick={this.handleLanguageChange.bind(null, this.props.selectedLanguage)}
                  src={'img/uk.png'}/>
                <p>English</p>
              </a>
            </div>
            <div>
              <a><img 
                  onClick={this.handleLanguageChange.bind(null, this.props.selectedLanguage)}
                  src={'img/spain.png'}/>
                <p>Spanish</p>
              </a>
            </div>
            <div>
              <a><img 
                  onClick={this.handleLanguageChange.bind(null, this.props.selectedLanguage)}
                  src={'img/italy.png'}/>
                <p>Italian</p>
              </a>
            </div>
            <div>
              <a><img 
                  onClick={this.handleLanguageChange.bind(null, this.props.selectedLanguage)}
                  src={'img/france.png'}/>
                <p>French</p>
              </a>
            </div>
          </div>
          <div className='level-options'>
            <div
                onClick={this.handleLevelChange.bind(null, this.props.selectedLevel)} 
                className='button-primary'>
              <p>Beginner</p>
            </div>
            <div
                onClick={this.handleLevelChange.bind(null, this.props.selectedLevel)} 
                className='button-primary'>
              <p>Intermediate</p>
            </div>
            <div
                onClick={this.handleLevelChange.bind(null, this.props.selectedLevel)} 
                className='button-primary'>
              <p>Advanced</p>
            </div>
          </div>
          <input 
              className='button-primary' 
              type='submit' 
              value='Sign Up'/>
        </form>
      </div>
    );
  }
  handleEmailChange (e) {
    this.props.handleEmailChange(e.target.value);
  }
  handleNameChange (e) {
    this.props.handleNameChange(e.target.value);
  }
  handleUsernameChange (e) {
    this.props.handleUsernameChange(e.target.value);
  }
  handleLanguageChange (language, e) {
    this.props.handleLanguageChange(language, e.target.value);
  }
  handleLevelChange (level, e) {
    this.props.handleLevelChange(level, e.target.value);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (username, language, level, name, email) => {
      dispatch(addUser(username, language, level, name, email));
    },
    handleEmailChange: e => {
      dispatch(handleEmailChange(e));
    },
    handleNameChange: e => {
      dispatch(handleNameChange(e));
    },
    handleUsernameChange: e => {
      dispatch(handleUsernameChange(e));
    },
    handleLanguageChange: language => {
      dispatch(handleLanguageChange(language));
    },
    handleLevelChange: level => {
      dispatch(handleLevelChange(level));
    },
  };
}

function mapStateToProps(state) {
  return {
    formText: state.user.formText, 
    user: state.user.user, 
    error: state.user.error, 
    loading: state.user.loading,
    emailText: state.user.emailText,
    nameText: state.user.nameText,
    userNameText: state.user.userNameText,
    selectedLanguage: state.user.selectedLanguage,
    selectedLevel: state.user.selectedLevel
  };
}

SignUpForm.PropTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);