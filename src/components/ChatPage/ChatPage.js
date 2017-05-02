import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {shuffle} from 'underscore';
import {fetchPrompts} from '../../actions/prompts.actions';
import {endCall} from '../../actions/call.actions';
import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';
import Feedback from './Feedback';
import VideoChat from '../../lib/VideoChat';

class ChatPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    const level = this.props.user.userLanguages.reduce((acc, userLanguage) => {
      return userLanguage.language === this.props.trainingLanguage ? userLanguage.level : acc;
    }, '');
    this.props.fetchPrompts(this.props.trainingLanguage, level);
  }
  render() {
    const content = this.props.callEnded ? <Feedback/> : <RemoteVideo endCall={this.props.endCall} videoChat={new VideoChat()}/>;
    return (
      <div className='chat-page'>
        {content}
        <SideBar prompts={shuffle(this.props.prompts).slice(0, 5)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPrompts: (language, level) => {
      dispatch(fetchPrompts(language, level));
    },
    endCall: (username) => {
      dispatch(endCall(username));
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    levels: state.levels.levels,
    languages: state.languages.languages,
    trainingLanguage: state.user.trainingLanguage,
    prompts: state.prompts.prompts,
    callEnded: state.call.callEnded
  };
}

ChatPage.propTypes = {
  user: PropTypes.object, 
  trainingLanguage: PropTypes.string.isRequired,
  prompts: PropTypes.array,
  callEnded: PropTypes.bool.isRequired,
  fetchPrompts: PropTypes.func.isRequired,
  endCall: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);