import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';
import {logOut, selectLanguage} from '../../actions/user.actions';
import LanguageButtons from './LanguageButtons';
import Icons from './Icons';

class HubPage extends Component {
  constructor(props) {
    super(props);
    this.getTotalPoints = this.getTotalPoints.bind(this);
    this.getDisplayByLanguage = this.getDisplayByLanguage.bind(this);
  }
  render() {
    const user = this.props.user;
    return (
      <div className='HubPage'>
        <div className='inline'>
          <img className='logo' src='img/logos/logo-box-transparent-grad.png'/>
          <Icons
              chats={this.getTotalPoints(user, 'numOfChats')}
              smileys={user.smileys}
              talkTime={this.getTotalPoints(user, 'talkTime')}
              teacherPoints={this.getTotalPoints(user, 'teacherPoints')}
              logOut={this.props.logOut}
          />
        </div>
        <h2>{this.getDisplayByLanguage(this.props.user)}</h2>
        <h5>Which language are you training in today?</h5>
        <LanguageButtons userLanguages={user.userLanguages} selectLanguage={this.props.selectLanguage}/>
      </div>
    );
  }
  getDisplayByLanguage (user) {
    const languages = user.userLanguages.reduce((acc, language) => {
      return acc.concat(language.language);
    }, []);
    const random = Math.floor(Math.random() * languages.length);
    const time = moment().hour();
    const converted = languages.map(language => {
      let phrase;
      if (time < 4 || time >= 22) {
        switch (language) {
            case 'spanish': phrase = `¡Buenas noches, ${user.name}!`; break;
            case 'french': phrase = `Bonne nuit, ${user.name}!`; break;
            case 'italian': phrase = `Buona notte, ${user.name}!`; break;
            default: phrase = `Hello, ${user.name}!`; break;
          }
      }

      if (time >= 4 && time < 12) {
         switch (language) {
            case 'spanish': phrase = `¡Buenos días, ${user.name}!`; break;
            case 'french': phrase = `Bonjour, ${user.name}!`; break;
            case 'italian': phrase = `Buongiorno, ${user.name}!`; break;
            default: phrase = `Good morning, ${user.name}!`; break;
          }
      }

      if (time >= 12 && time < 17) {
        switch (language) {
            case 'spanish': phrase = `¡Buenas tardes, ${user.name}!`; break;
            case 'french': phrase = `Bonne après-midi, ${user.name}!`; break;
            case 'italian': phrase = `Buon pomeriggio, ${user.name}!`; break;
            default: phrase = `Good afternoon, ${user.name}!`; break;
          }
      }

      if (time >= 17 && time < 22) {
         switch (language) {
            case 'spanish': phrase = `¡Buenas noches, ${user.name}!`; break;
            case 'french': phrase = `Bonsoir, ${user.name}!`; break;
            case 'italian': phrase = `Buona sera, ${user.name}!`; break;
            default: phrase = `Good evening, ${user.name}!`; break;
          }
      }
      return phrase;
    });
    return converted[random];
  }
  getTotalPoints (user, target) {
    return user.userLanguages.reduce((acc, el) => {
      return acc + el[target];
    }, 0);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logOut());
    },
    selectLanguage: (language) => {
      dispatch(selectLanguage(language));
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

HubPage.propTypes = {
  user: PropTypes.any.isRequired,
  selectLanguage: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HubPage);