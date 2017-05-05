import React from 'react';
import Animation from 'react-addons-css-transition-group';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <Animation transitionName="page" component="div" 
        className="LoginPage"
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
      <img className='logo' src='img/logos/logo-main-transparent-grad.png'/>
      <LoginForm/>
    </Animation>
  );
};

export default LoginPage;

