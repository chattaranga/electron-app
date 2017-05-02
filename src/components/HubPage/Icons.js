import React from 'react';
import {Link} from 'react-router';

const Icons = props => {
  return (
    <div className='Icons'>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-chat.png' className='icon round-icon'/>
				<p>{props.chats}</p>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-smile.png' className='icon round-icon'/>
				<p>{props.smileys}</p>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-coach.png' className='icon round-icon'/>
				<p>{props.teacherPoints}</p>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-time.png' className='icon round-icon'/>
				<p>{props.talkTime}</p>
			</div>
			<div className='icondata achievements'>
				<Link to='/achievements'><p className='button-primary'>View Badges</p></Link>
			</div>
    </div>
  );
};

export default Icons;