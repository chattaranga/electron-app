import React from 'react';
import Icons from './Icons';
import LanguageButtons from './LanguageButtons';

const HubPage = () => {
  return (
    <div className='HubPage'>
      <div className='inline'>
        <h1>~</h1>
        <Icons/>
      </div>
      <h2>¡Buenos días, Ruth!</h2>
      <h5>Which language are you training in today?</h5>
      <LanguageButtons />
    </div>
  );
};

export default HubPage;