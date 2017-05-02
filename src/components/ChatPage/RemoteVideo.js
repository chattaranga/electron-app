import React, {Component} from 'react';
import PropTypes from 'prop-types';
import videoChatHandler from '../../lib/videoChatHandler';

class RemoteVideo extends Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.endCallHandler = this.endCallHandler.bind(this);
  }
  componentDidMount () {
    this.videoChatHandler = videoChatHandler.bind(this);
    this.videoChat = this.props.videoChat;
    this.videoChatHandler('getLocalMedia');
    this.videoChatHandler('connect');
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.remoteVideo) {
      this.videoChatHandler('disconnect');
    }
  }
  endCallHandler () {
    this.videoChatHandler('hang');
  }
 
  render () {
    return (
      <div className='remote-video-container'>
        
        <video 
            src={this.state.remoteVideo}
            className='vid' 
            classID='remote-video' 
            autoPlay='true'
            muted='true'>
            {/* Delete muted for production */}
          Something Went Wrong :(
        </video>

        <div className='ab-bottom'>
          <div className='chat-buttons'>
            <div className='end-call' onClick={this.endCallHandler}>
              <img src='img/icons/red-phone.png' alt='end-call'/>
            </div>
          </div>
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
          <div className='right-padding'>
          </div>
        </div>

      </div>
    );
  }
}

RemoteVideo.propTypes = {
  videoChat: PropTypes.object.isRequired
};

export default RemoteVideo;