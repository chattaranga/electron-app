const React = require('react');

const PromptList = require('./PromptsList');
const TranslationBoxes = require('./TranslationBoxes');

const SideBar = () => {
  return (
    <div className='side-bar'>
      <PromptList />
      <TranslationBoxes />
    </div>
  );
};

module.exports = SideBar;