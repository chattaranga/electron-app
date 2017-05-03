import React from 'react';

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

export default TranslationBoxes;