import React, {Component} from 'react';

class RemoteVideo extends Component {
  constructor (props) {
    super(props);

    this.state = {};
    this.getLocalMedia = this.getLocalMedia.bind(this);
    // this.handleConnection = this.handleConnection.bind(this);
  }

  componentDidMount () {
    this.getLocalMedia();
    // this.handleConnection();
  }

  getLocalMedia () {
    navigator.getUserMedia({
      audio: false,   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      video: true
    }, stream => {
      this.setState({
        localVideo: URL.createObjectURL(stream)
      });
      window.localStream = stream;
    }, () => {});
  }

  // handleConnection () {
  //   this.props.chat.connect('USERNAME');  // !!!!!!!!!!!!!!!!!!!!!!!
  // }

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
            <div className='end-call'>
              <img src='img/icons/red-phone.svg' alt='end-call'/>
            </div>
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
          <div className='right-padding'>
          </div>
        </div>

      </div>
    );
  }
}

export default RemoteVideo;