import React from 'react';

const Statistics = props => {
  return (
    <div className='Statistics'>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.chats}</p>
        </div>
        <p>Chattas</p>
     </div>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.smileys}</p>
        </div>
        <p>Chatta-Smile</p>
     </div>
    <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.teacherPoints}</p>
        </div>
        <p>Chatta-Coach</p>
     </div>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.talkTime}</p>
        </div>
        <p>Chatta-Time</p>
     </div>
    </div>
  );
};

export default Statistics;