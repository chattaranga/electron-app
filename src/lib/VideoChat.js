const Peer = require('peerjs');
const io = require('socket.io-client');

class VideoChat {
  constructor() {
    this._username;
    this._peer;  
  }
}

VideoChat.prototype.setUsername = function (username) {
  this._username = username;
};

VideoChat.prototype.setPeer = function (peer) {
  this._peer = peer;
};

VideoChat.prototype.connect = function (profile, answerHandler, callHandler) {
  this.peer = new Peer(profile.username, {
    host: '127.0.0.1', port: '9000', path: '/api'
  });

  this.peer.on('open', (username) => {
    this.setUsername(username);
    
    this.socket = io('http://127.0.0.1:9000');

    this.socket.emit('connect_to_room', profile);
    
    this.socket.on('connect', () => {
      this.socket.on('USER_CONNECTED', (username) => {
        if (username === profile.username || this._peer) {
          return;
        }

        this.socket.emit('disconnect_from_room', profile);
        this.setPeer(username);
        this.connectTo(username, callHandler);
      });
    });  
  });

  this.peer.on('call', (call) => {
    this.socket.emit('disconnect_from_room', profile);
    call.answer(window.localStream);

    call.on('stream', (stream) => {
      this.setPeer(call.peer);
      answerHandler(URL.createObjectURL(stream), call.peer);
    });
  });
};

VideoChat.prototype.connectTo = function (username, callHandler) {
  const conn = this.peer.connect(username);
  
  conn.on('open', () => {
    const call = this.peer.call(username, window.localStream);
    
    call.on('stream', (stream) => {
      callHandler(URL.createObjectURL(stream), username);
    });
  });
};

module.exports = VideoChat;