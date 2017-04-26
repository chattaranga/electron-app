import React from 'react';

const SignUpForm = () => {
  return (
    <div className='signup-form'>
      <form>
      <div className='forms'>
          <input className='text-box long '
              type='text' placeholder='email'/>
          
          <div className='inline'>
            <input className='text-box left' 
                type='text' placeholder='first name'/>
            <input className='text-box' 
                type='text' placeholder='username'/>
          </div>
          </div>
          <h2>What do you want to learn?</h2>
        <div className='signup-flag-buttons'>
          <div>
            <a><img src={'img/uk.png'}/>
              <p>English</p>
            </a>
          </div>
          <div>
            <a><img src={'img/spain.png'}/>
              <p>Spanish</p>
            </a>
          </div>
          <div>
            <a><img src={'img/italy.png'}/>
              <p>Italian</p>
            </a>
          </div>
          <div>
            <a><img src={'img/france.png'}/>
              <p>French</p>
            </a>
          </div>
        </div>
        
        <input 
            className='button-primary' 
            type='submit' value='Sign Up'/>
      </form>
    </div>
  );
};

export default SignUpForm;