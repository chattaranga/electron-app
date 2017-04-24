const React = require('react');
const LoginForm = require('./LoginForm');
const LanguageButtons = require('./LanguageButtons');

const LoginPage = () => {
  return (
    <div>
      <p>LoginPage</p>
      <LoginForm/>
      <LanguageButtons/>
    </div>
  );
};

module.exports = LoginPage;