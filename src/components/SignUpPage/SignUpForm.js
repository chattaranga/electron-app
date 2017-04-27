import React from 'react';
import {Component} from 'react';
// import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {addUser, handleEmailChange, handleNameChange, handleUsernameChange, handleLanguageChange, handleLevelChange} from '../../actions/user.actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getLanguageButtons = this.getLanguageButtons.bind(this);
    this.capitalise = this.capitalise.bind(this);
  }
  render() {
    if (this.props.user) {
      return (
        <div>
          <h2>{`${this.props.user.name}, your Chattaranga journey begins here`}</h2>
          <Link to='/hub'><h3 className='button-primary'>Enter</h3></Link>
        </div>
      );
    }
      const languageButtons = this.getLanguageButtons(this.props.languages);
      const levelButtons = this.getLevelButtons(this.props.levels);
      return (
        <div className='signup-form'>
          <form onSubmit={this.addUser}>
            <div className='forms'>
              <input 
                  className='text-box long' 
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
              {languageButtons}
          
            </div>
            <div className='level-options'>
              {levelButtons}
            </div>
            <input 
                className='button-primary' 
                type='submit' 
                value='Sign Up'/>
          </form>
        </div>
      );
    
  }
  capitalise (s) {
    s = s.split('');
    s[0] = s[0].toUpperCase();
    return s;
  }
  getLanguageButtons (languages) {
     return languages.map((language, i) => {
      return (
        <div key={i}>
          <a><img 
              onClick={this.handleLanguageChange.bind(null, String(language._id))}
              src={`img/${language.name}.png`}/>
            <p>{this.capitalise(language.name)}</p>
          </a>
        </div>
      );
    });
  }
  getLevelButtons (levels) {
    return levels.map((level, i) => {
      return (
        <div
            key={i}
            onClick={this.handleLevelChange.bind(null, String(level._id))} 
            className='button-primary'>
          <p>{this.capitalise(level.name)}</p>
        </div>
      );
    });
  }
  addUser (e) {
    e.preventDefault();
    this.props.addUser(this.props.userNameText, this.props.selectedLanguage, this.props.selectedLevel, this.props.nameText, this.props.emailText);
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
  handleLanguageChange (language) {
    this.props.handleLanguageChange(language);
  }
  handleLevelChange (level) {
    this.props.handleLevelChange(level);
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
    selectedLevel: state.user.selectedLevel, 
    languages: state.languages.languages,
    levels: state.levels.levels
  };
}

SignUpForm.PropTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);