import React from 'react';
import PropTypes from 'prop-types';
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

SideBar.propTypes = {
  prompts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideBar;