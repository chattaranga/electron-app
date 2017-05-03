import React from 'react';
import Loading from '../Loading';

const ChatLoading = () => {
  return (
    <div className='chat-loading'> 
        <h1>Finding you someone to Chatta with...</h1>
        <Loading/>
    </div>
  );
};

export default ChatLoading;