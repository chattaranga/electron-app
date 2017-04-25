const React = require('react');
const {Link} = require('react-router');

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
      <Link to='/signup'>Sign Up</Link>
      <Link to='/hub'>Go to Hub</Link>
      <Link to='/achievements'>Go to Achievements</Link>
    </div>
  );
};

module.exports = LoginForm;