const React = require('react');
const LoginForm = require('./LoginForm');
const LanguageButtons = require('./LanguageButtons');

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <img src='img/logo-main.png'/>
      <LoginForm/>
      <LanguageButtons/>
    </div>
  );
};

module.exports = LoginPage;