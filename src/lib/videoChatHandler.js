const videoChatHandler = function(action, cb) {
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
      this.videoChat.connect({username: this.props.user.username, room: this.props.room}, handlers['answer'].bind(null, cb), handlers['call'].bind(null, cb));
    },
    call: (startCall, stream, peer) => {
      startCall();
      this.setState(() => {
        return {
          onCall: true,
          remoteVideo: stream,
          peer: peer
        };
      });
    },
    answer: (startCall, stream, peer) => {
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
      window.localStream.getTracks().forEach((track) => {
        track.stop();
      }); 
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
  
  return handlers[action](cb) || handlers['default'];
};

export default videoChatHandler;