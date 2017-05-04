import React from 'react';
import PropTypes from 'prop-types';

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
				<p>{Math.floor(props.talkTime / 60000) + ' mins'}</p>
			</div>
    </div>
  );
};

Statistics.propTypes = {
  chats: PropTypes.number.isRequired,
  smileys: PropTypes.number.isRequired,
  teacherPoints: PropTypes.number.isRequired,
	talkTime: PropTypes.number.isRequired
};

export default Statistics;