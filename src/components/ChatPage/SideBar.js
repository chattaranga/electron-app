import React from 'react';
import PromptList from './PromptsList';
import TranslationBoxes from './TranslationBoxes';

const SideBar = props => {
  return (
    <div className='side-bar'>
      <PromptList prompts={props.prompts}/>
      <TranslationBoxes />
    </div>
  );
};

export default SideBar;