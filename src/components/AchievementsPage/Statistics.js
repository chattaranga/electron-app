import React from 'react';

const Statistics = props => {
  return (
    <div className='Statistics'>
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
    </div>
  );
};

export default Statistics;