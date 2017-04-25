const React = require('react');

const LoginForm = () => {
  return (
    <div>
      <form>
        <input 
            className='textbox' 
            placeholder='Username' 
            type='text'/>
        <input 
            className='submit' 
            type='submit' 
            value='Login'/>
      </form>
    </div>
  );
};

module.exports = LoginForm;