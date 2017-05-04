import React from 'react';
import PropTypes from 'prop-types';
import PromptList from './PromptsList';
import TranslationBoxes from './TranslationBoxes';
import {Link} from 'react-router';

const SideBar = props => {
  return (
    <div className='side-bar'>
      <div className='side-bar-navigation'>
        <img src='img/logos/logo-main-transparent-grad.png' />
        <div>
          <Link to='/hub'><h3 className='button-linking'>Back</h3></Link>
        </div>
      </div>
      <PromptList prompts={props.prompts}/>
      <TranslationBoxes />
    </div>
  );
};

SideBar.propTypes = {
  prompts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideBar;