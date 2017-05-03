const videoChatHandler = function(action) {
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
      this.videoChat.connect({username: Math.floor(Math.random() * 100).toString(), room: 'test'}, handlers['answer'], handlers['call']);
    },
    call: (stream, peer) => {
      this.setState(() => {
        return {
          onCall: true,
          remoteVideo: stream,
          peer: peer
        };
      });
    },
    answer: (stream, peer) => {
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