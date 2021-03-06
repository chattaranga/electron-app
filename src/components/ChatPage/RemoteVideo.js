import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Animation from 'react-addons-css-transition-group';
import videoChatHandler from '../../lib/videoChatHandler';
import CountdownTimer from './CountdownTimer';
import ChatLoading from './ChatLoading';

class RemoteVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.endCallHandler = this.endCallHandler.bind(this);
  }
  componentDidMount() {
    this.videoChatHandler = videoChatHandler.bind(this);
    this.videoChat = this.props.videoChat;
    this.videoChatHandler('getLocalMedia');
    this.videoChatHandler('connect', this.props.startCall, this.props.endCallSetter);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.remoteVideo) {
      this.videoChatHandler('disconnect');
    }
  }
  componentWillUnmount () {
    window.localStream.getTracks().forEach((track) => {
        track.stop();
      });
  }
  endCallHandler(time) {
    this.videoChatHandler('hang');
    this.props.endCall(this.state.peer, this.props.user.username, time, this.props.trainingLanguage);
  }
  render() {
    const videoArea = this.props.callStarted 
      ?  <video
          src={this.state.remoteVideo}
          className='vid'
          classID='remote-video'
          autoPlay='true'>
          Something went wrong :(
        </video>
      : <ChatLoading/>;
    return (
      <Animation 
          transitionName="rv-anim" 
          component="div" 
          className="remote-video-container"
          transitionAppearTimeout={500} 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={500}>
          {videoArea}
        <div className="ab-bottom">
          {this.state.onCall ? 
            <CountdownTimer endCallHandler={this.endCallHandler} endCallSetter={this.props.endCallSetter}/> 
            :
            null}
          <div className='local-video-container'>
            <video
                src={this.state.localVideo}
                className='vid'
                classID='local-video'
                autoPlay='true'
                muted='true'>
              Something went wrong :(
              </video>
          </div>
        </div>
      </Animation>
    );
  }
}

RemoteVideo.propTypes = {
  videoChat: PropTypes.object.isRequired,
  endCall: PropTypes.func.isRequired,
  startCall: PropTypes.func.isRequired,
  callStarted: PropTypes.any.isRequired,
  endCallSetter: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired,
  trainingLanguage: PropTypes.string.isRequired
};

export default RemoteVideo;