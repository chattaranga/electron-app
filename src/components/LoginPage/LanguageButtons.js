const React = require('react');

const LanguageButtons = () => {
  return (
    <div className='buttons'>
      <a><img src={'img/uk.png'}/></a>
      <a><img src={'img/spain.png'}/></a>
      <a><img src={'img/italy.png'}/></a>
      <a><img src={'img/france.png'}/></a>
    </div>
  );
};

module.exports = LanguageButtons;