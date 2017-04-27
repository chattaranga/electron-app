import React from 'react';

import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';

// import ChatEmitter from './chatEmitter.js';
// const chat = new ChatEmitter();

const ChatPage = () => {
  return (
    <div className='chat-page'>
      <RemoteVideo />
      <SideBar />
    </div>
  );
};

export default ChatPage;