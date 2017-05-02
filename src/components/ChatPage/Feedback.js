import React from 'react';
import PropTypes from 'prop-types';

const Feedback = props => {
  let message;
  switch (props.trainingLanguage) {
      case 'italian': message = 'Eccezionale!'; break;
      case 'spanish': message = '¡Bien hecho!'; break;
      case 'french': message = 'Génial!'; break;
      default: 'Great job!'; break;
  }
  return (
    <div className='feedback'> 
        <h1>{message}</h1>
        <h2>{`Do you want to award ${props.remoteUser} any badges`}?</h2>
        <div>
            <img 
                onClick={props.setFeedback.bind(null, 'smiley')}
                className={props.giveSmiley ? 'round-icon selected' : 'round-icon'} 
                src='img/chatta-icons/chatta-smile.png' 
                alt='chatta-smile'/>
            <img 
                onClick={props.setFeedback.bind(null, 'teacherPoint')}
                className={props.giveTeacherPoint ? 'round-icon selected' : 'round-icon'}  
                src='img/chatta-icons/chatta-coach.png' 
                alt='chatta-coach'/>
        </div>
        <div className='button-primary' onClick={props.sendFeedback}>Continue</div>
    </div>
  );
};

Feedback.propTypes = {
    remoteUser: PropTypes.string,
    trainingLanguage: PropTypes.string,
    giveSmiley: PropTypes.bool,
    giveTeacherPoint: PropTypes.bool,
    setFeedback: PropTypes.func.isRequired,
    sendFeedback: PropTypes.func.isRequired,
};

export default Feedback;