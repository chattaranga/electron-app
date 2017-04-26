import React from 'react';

import PromptList from './PromptsList';
import TranslationBoxes from './TranslationBoxes';

const SideBar = () => {
  return (
    <div className='side-bar'>
      <PromptList />
      <TranslationBoxes />
    </div>
  );
};

export default SideBar;