const videoChatHandler = function(action, startCall, endCallSetter) {
  const handlers = {
    getLocalMedia: () => {
      const constraints = { 
        audio: true, 
        video: true
      }; 

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((mediaStream) => {
          window.localStream = mediaStream;
          
          this.setState({
            localVideo: URL.createObjectURL(mediaStream)
          });
        })
        .catch(() => { 
          alert('Whoops, something went wrong requesting your local video/audio. Please refresh'); 
        });
    },
    connect: () => {
      const profile = {
        username: this.props.user.username,
        room: this.props.room
      };

      this.videoChat.connect(profile, handlers['answer'], handlers['call'], endCallSetter);
    },
    call: (stream, peer) => {
      startCall();
      this.setState(() => {
        return {
          onCall: true,
          remoteVideo: stream,
          peer: peer
        };
      });
    },
    answer: (stream, peer) => {
      startCall();
      this.setState(() => {
        return {
          onCall: true,
          remoteVideo: stream,
          peer: peer
        };
      });
    },
    hang: () => {
      this.videoChat.peer.destroy();
      this.videoChat.peer.disconnect();
      this.videoChat.socket.disconnect();
    },
    disconnect: () => {
      setTimeout(() => {
        this.videoChat.peer.disconnect();
        this.videoChat.socket.disconnect();
      }, 1000);
    },
    default: () => {
      alert('Whoops, something went wrong :( Please refresh');
    }
  };
  
  return handlers[action]() || handlers['default'];
};

export default videoChatHandler;