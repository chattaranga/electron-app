import React from 'react';
import Animation from 'react-addons-css-transition-group';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
  return (
    <Animation transitionName="page" component="div" 
        className="sign-up-page"
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={500}
        transitionAppear
        transitionLeave>
      <div className='container'>
        <div className="signup-wrapper">
          <h1>Hello!</h1>
          <SignUpForm/>
        </div>
      </div>
    </Animation>
  );
};

export default SignUpPage;