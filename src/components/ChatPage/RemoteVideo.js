import React, {Component} from 'react';

class RemoteVideo extends Component {
  constructor (props) {
    super(props);

    this.state = {};
    this.getLocalMedia = this.getLocalMedia.bind(this);
  }

  componentDidMount () {
    this.getLocalMedia();
  }

  getLocalMedia () {
    navigator.getUserMedia({
      audio: false,
      video: true
    }, stream => {
      this.setState({
        localVideo: URL.createObjectURL(stream)
      });
    }, () => {});
  }

  render () {
    return (
      <div className='remote-video-container'>
        
        <video 
            src={this.state.localVideo}
            className='vid' 
            classID='remote-video' 
            autoPlay='true'
            muted='true'>
          Something Went Wrong :(
        </video>

        <div className='ab-bottom'>
          <div className='chat-buttons'>
            <p>BUTTON</p>
          </div>
          <div className='local-video-container'>
            <video 
                src={this.state.localVideo}
                className='vid' 
                classID='local-video' 
                autoPlay='true'
                muted='true'>
              Something Went Wrong :(
            </video>
          </div>
        </div>

      </div>
    );
  }
}

export default RemoteVideo;