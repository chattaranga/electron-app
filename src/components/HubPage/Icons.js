import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const Icons = props => {
  return (
    <div className='Icons'>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-chat.png' className='icon round-icon'/>
				<h4>{props.chats}</h4>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-smile.png' className='icon round-icon'/>
				<h4>{props.smileys}</h4>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-coach.png' className='icon round-icon'/>
				<h4>{props.teacherPoints}</h4>
			</div>
			<div className='icondata'>
				<img src='img/chatta-icons/chatta-time.png' className='icon round-icon'/>
				<h4>{Math.floor((props.talkTime / 1000) * 60)}</h4>
			</div>
			<div className='icondata achievements'>
				<Link to='/achievements'><p className='button-primary'>View Badges</p></Link>
			</div>
			<div className='icondata'>
				<p className='button-linking' onClick={props.logOut}><Link to='/'>Log out</Link></p>
			</div>
    </div>
  );
};

Icons.propTypes = {
  chats: PropTypes.number.isRequired,
  smileys: PropTypes.number.isRequired,
  teacherPoints: PropTypes.number.isRequired,
	talkTime: PropTypes.number.isRequired,
	logOut: PropTypes.func.isRequired
};	


export default Icons;