import React from 'react';
import {Link} from 'react-router';

const Icons = props => {
  return (
    <div className='Icons'>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.chats}</p>
        </div>
     </div>
    <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.smileys}</p>
        </div>
     </div>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.teacherPoints}</p>
        </div>
     </div>
     <div className='icondata'>
        <div className='icon round-icon'>
            <p>{props.talkTime}</p>
        </div>
     </div>
     <div className='icondata achievements'>
      <Link to='/achievements'><p className='button-primary'>View Badges</p></Link>
     </div>
    </div>
  );
};

export default Icons;