import React from 'react';
import Icons from './Icons';
import {Link} from 'react-router';
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
      <Link to='/'>Log out</Link>
    </div>
  );
};

export default HubPage;