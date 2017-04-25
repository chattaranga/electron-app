const React = require('react');
const {Link} = require('react-router');

const LoginForm = () => {
  return (
    <div>
      <form>
        <input 
            className='text-box' 
            placeholder='Username' 
            type='text'/>
        <input 
            className='submit button-primary' 
            type='submit' 
            value='Log in'/>
      </form>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/hub'>Go to Hub</Link>
      <Link to='/achievements'>Go to Achievements</Link>
    </div>
  );
};

module.exports = LoginForm;