import React from 'react';

const LanguageButtons = () => {
  return (
    <div className='hub-page-buttons'>
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
  );
};

export default LanguageButtons;
