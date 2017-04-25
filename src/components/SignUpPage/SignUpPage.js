const React = require('react');

const SignUpForm = require('./SignUpForm');

const SignUpPage = () => {
  return (
    <div className='SignUpPage'>
      <div className='container'>
        <h1>Hello!</h1>
        <SignUpForm/>
      </div>
    </div>
  );
};

module.exports = SignUpPage;