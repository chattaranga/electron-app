const React = require('react');

const RemoteVideo = () => {
  return (
    <div className='remote-video-container'>
      
      <video classID='remote-video'>
        Something Went Wrong :(
      </video>

      <div className='local-video-container'>
        <video classID='local-video'>
          Something Went Wrong :(
        </video>
      </div>

    </div>
  );
};

module.exports = RemoteVideo;