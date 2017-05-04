import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {shuffle} from 'underscore';
import axios from 'axios';
import Animation from 'react-addons-css-transition-group';
import {fetchPrompts} from '../../actions/prompts.actions';
import {endCall, startCall, resetCall} from '../../actions/call.actions';
import {ROOT} from '../../../config';
import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';
import Feedback from './Feedback';
import ChatLoading from './ChatLoading';
import VideoChat from '../../lib/VideoChat';

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giveSmiley: false,
      giveTeacherPoint: false
    };
    this.setFeedback = this.setFeedback.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }
  componentDidMount () {
    this.level = this.props.user.userLanguages.reduce((acc, userLanguage) => {
      return userLanguage.language === this.props.trainingLanguage ? userLanguage.level : acc;
    }, '');
    this.props.fetchPrompts(this.props.trainingLanguage, this.level);
  }
  render() {
    let content;
    if (this.props.callEnded) {
      content = <Feedback 
          remoteUser={this.props.remoteUser} 
          trainingLanguage={this.props.trainingLanguage}
          setFeedback={this.setFeedback}
          sendFeedback={this.sendFeedback}
          giveSmiley={this.state.giveSmiley}
          giveTeacherPoint={this.state.giveTeacherPoint}/> 
    // } else if (!this.props.callStarted) {
    //   content = <ChatLoading/>;
    } else {
      content = <RemoteVideo 
          endCall={this.props.endCall} 
          startCall={this.props.startCall} 
          videoChat={new VideoChat()}/>;
    }
    return (
      <div className="chat-page">
        {content}
        <SideBar prompts={shuffle(this.props.prompts).slice(0, 5)}/>
      </div>
    );
  }
  setFeedback (type) {
    this.setState(type === 'smiley'
      ? {giveSmiley: !this.state.giveSmiley}
      : {giveTeacherPoint: !this.state.giveTeacherPoint}
    );
  }
  sendFeedback () {
    if (this.state.giveSmiley) {
      axios
          .put(`${ROOT}${this.props.remoteUser}/smileys`)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }
    if (this.state.giveTeacherPoint) {
      axios
          .put(`${ROOT}${this.props.remoteUser}/${this.props.trainingLanguage}`)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPrompts: (language, level) => {
      dispatch(fetchPrompts(language, level));
    },
    endCall: (username) => {
      dispatch(endCall(username));
    },
    startCall: () => {
      dispatch(startCall());
    },
    resetCall: () => {
      dispatch(resetCall());
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
    callStarted: state.call.callStarted,
    callEnded: state.call.callEnded,
    remoteUser: state.call.remoteUser
  };
}

ChatPage.propTypes = {
  user: PropTypes.object, 
  trainingLanguage: PropTypes.string,
  prompts: PropTypes.array,
  callEnded: PropTypes.bool.isRequired,
  fetchPrompts: PropTypes.func.isRequired,
  startCall: PropTypes.func.isRequired, 
  callStarted: PropTypes.func.isRequired,
  endCall: PropTypes.func.isRequired,
  remoteUser: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);