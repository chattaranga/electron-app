import React, {Component} from 'react';
import {shuffle} from 'underscore';
import {fetchPrompts} from '../../actions/prompts.actions';
// import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';
// import ChatEmitter from './chatEmitter.js';
// const chat = new ChatEmitter();

class ChatPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    const languageID = this.props.languages.reduce((acc, languageName) => {
      return languageName.name === this.props.trainingLanguage ? languageName._id : acc;
    }, '');
    const level = this.props.user.userLanguages.reduce((acc, userLanguage) => {
      return userLanguage.language === this.props.trainingLanguage ? userLanguage.level : acc;
    }, '');
    const levelID = this.props.levels.reduce((acc, levelName) => {
      return levelName.name === level ? levelName._id : acc;
    }, '');
    this.props.fetchPrompts(languageID, levelID);
  }
  render() {
    return (
      <div className='chat-page'>
        <RemoteVideo videoChat={this.props.route.videoChat}/>
        <SideBar prompts={shuffle(this.props.prompts).slice(0, 4)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPrompts: (language, level) => {
      dispatch(fetchPrompts(language, level));
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    levels: state.levels.levels,
    languages: state.languages.languages,
    trainingLanguage: state.user.trainingLanguage,
    prompts: state.prompts.prompts
  };
}

ChatPage.PropTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);