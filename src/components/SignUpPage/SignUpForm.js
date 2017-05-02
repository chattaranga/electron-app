import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {addUser, handleEmailChange, handleNameChange, handleUsernameChange, handleLanguageChange, handleLevelChange} from '../../actions/user.actions';
import Loading from '../Loading';

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
    this.validate = this.validate.bind(this);
    this.getError = this.getError.bind(this);
  }
  render () {
    if (this.props.loading) return <Loading/>;
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
      let errors;
      if (Array.isArray(this.props.error)) {
        errors = this.props.error.map((error, i) => (<p className='error' key={i}>{this.getError(error)}</p>));
      }
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
            {errors}
            <input 
                className='signin button-primary' 
                type='submit' 
                value='Sign Up'/>
          </form>
        </div>
      );
    
  }
  capitalise (s) {
    s = s.split('');
    s[0] = s[0].toUpperCase();
    return s.join('');
  }
  getLanguageButtons (languages) {
    const languageName = this.props.languages.reduce((acc, language) => {
      return language._id === this.props.selectedLanguage ? language.name : acc;
    }, '');
     return languages.map((language, i) => {
      return (
        <div key={i}>
          <a><img 
              onClick={this.handleLanguageChange.bind(null, String(language._id))}
              src={`img/${language.name}.png`}
              className={languageName === language.name  ? 'selected' : 'unselected'}/>
            <p>{this.capitalise(language.name)}</p>
          </a>
        </div>
      );
    });
  }
  getLevelButtons (levels) {
    const levelName = this.props.levels.reduce((acc, level) => {
      return level._id === this.props.selectedLevel ? level.name : acc;
    }, '');
    return levels.map((level, i) => {
      return (
        <div
            key={i}
            onClick={this.handleLevelChange.bind(null, String(level._id))} 
            className={levelName === level.name ? 'button-primary selected' : 'button-primary'}>
          {this.capitalise(level.name)}
        </div>
      );
    });
  }
  addUser (e) {
    e.preventDefault();
    const username = this.validate('username', this.props.userNameText);
    const email = this.validate('email', this.props.emailText);
    const name = this.validate('name', this.capitalise(this.props.nameText));
    const language = this.validate('language', this.props.selectedLanguage);
    const level = this.validate('level', this.props.selectedLevel);
    const errors = [username, email, name, language, level].reduce((acc, data) => {
      return Array.isArray(data) ? acc.concat(data) : acc;
    }, []);
    this.props.addUser(errors, [this.props.userNameText, this.props.selectedLanguage, this.props.selectedLevel, this.capitalise(this.props.nameText), this.props.emailText]);
  }
  validate (type, data) {
    let errors = [];
    switch (type) {
      case 'username': 
        if (data.length < 6) errors = errors.concat('username-short');
        if (!/([A-Z-_])\w+/ig.test(data)) errors = errors.concat('username-invalid');
        break;
      case 'email': 
        if (!/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/ig.test(data)) errors = errors.concat('email-invalid');
        break;
      case 'name': 
        if (data.length < 2) errors = errors.concat('name-short');
        if (!/[A-Z]\w+/ig.test(data)) errors = errors.concat('name-invalid');
        break;
      case 'language': 
        if (!data) errors = errors.concat('language-invalid');
        break;
      case 'level': 
        if (!data) errors = errors.concat('level-invalid');
        break;
      default: break;
    }
    return errors.length > 0 ? errors : data;
  }
  getError (error) {
    switch (error) {
      case 'username-short':
        return 'Your username needs to be 6 characters or longer';
      case 'username-invalid':
        return 'Your username can only contain letters, underscores and dashes';
      case 'email-invalid':
        return 'Provide a valid email address';
      case 'name-short':
        return 'Your name needs to have at least 2 characters';
      case 'language-invalid':
        return 'Please tell us what language you want to learn';
      case 'level-invalid':
        return 'Please tell us what level you\'re at';
    }
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
    levels: state.levels.levels,
  };
}

SignUpForm.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  formText: PropTypes.string.isRequired,
  user: PropTypes.any.isRequired,
  error: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
  emailText: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  userNameText: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  selectedLevel: PropTypes.string.isRequired,
  languages: PropTypes.any.isRequired,
  levels: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);