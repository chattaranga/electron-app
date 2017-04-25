const React = require('react');

const SignUpForm = () => {
  return (
    <div className='signup-form'>
      <form>
          <input className='text-box'
              type='text' placeholder='email'/>
          
          <div className='side-by-side'>
            <input className='text-box' 
                type='text' placeholder='first name'/>
            <input className='text-box' 
                type='text' placeholder='username'/>
          </div>

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
            className='submit-button' 
            type='submit' value='Sign Up'/>
      </form>
    </div>
  );
};

module.exports = SignUpForm;