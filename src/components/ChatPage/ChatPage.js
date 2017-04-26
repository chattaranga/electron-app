import React from 'react';

import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';

const ChatPage = () => {
  return (
    <div className='chat-page'>
      <RemoteVideo />
      <SideBar />
    </div>
  );
};

export default ChatPage;