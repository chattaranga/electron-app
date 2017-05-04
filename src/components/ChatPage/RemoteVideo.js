import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Animation from 'react-addons-css-transition-group';
import videoChatHandler from '../../lib/videoChatHandler';
import CountdownTimer from './CountdownTimer';

class RemoteVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.endCallHandler = this.endCallHandler.bind(this);
  }
  componentDidMount() {
    console.log(this.state.peer);
    this.videoChatHandler = videoChatHandler.bind(this);
    this.videoChat = this.props.videoChat;
    this.videoChatHandler('getLocalMedia');
    this.videoChatHandler('connect', this.props.startCall);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.remoteVideo) {
      this.videoChatHandler('disconnect');
    }
  }
  endCallHandler() {
    this.videoChatHandler('hang');
    this.props.endCall(this.state.peer);
  }
  render() {
    return (
      <Animation transitionName="rv-anim" component="div" className="remote-video-container"
          transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}
          transitionAppear={true} transitionLeave={true}>

        <video
            src={this.state.remoteVideo}
            className='vid'
            classID='remote-video'
            autoPlay='true'
            muted='true'>
            {/* Delete muted for production */}
          Something went wrong :(
        </video>

        <div className="ab-bottom">
          {this.state.onCall ? 
            <CountdownTimer endCallHandler={this.endCallHandler} /> 
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
  endCall: PropTypes.func.isRequired
};

export default RemoteVideo;