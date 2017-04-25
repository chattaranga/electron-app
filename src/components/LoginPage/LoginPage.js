const React = require('react');
const LoginForm = require('./LoginForm');

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <img className='logo' src='img/logo-main.png'/>
      <LoginForm/>
    </div>
  );
};

module.exports = LoginPage;