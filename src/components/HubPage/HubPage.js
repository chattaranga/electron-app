const React = require('react');
const Icons = require('./Icons');
const LanguageButtons = require('./LanguageButtons');

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

module.exports = HubPage;
