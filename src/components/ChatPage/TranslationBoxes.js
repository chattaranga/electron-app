const React = require('react');

const TranslationBoxes = () => {
  return (
    <div className='translation-boxes'>
      <form>
        <textarea 
            placeholder='your text here' />
        <br/>
        <textarea
            placeholder='translation'
            readOnly='true' />
      </form>
    </div>
  );
};

module.exports = TranslationBoxes;