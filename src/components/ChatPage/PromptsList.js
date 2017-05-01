import React from 'react';

const PromptsList = props => {
  const prompts = props.prompts.map((prompt, i) => {
    return (
      <div key={i} className='orange-msg-box'>
        <p>{prompt.text}</p>
      </div>
    );
  });
  return (
    <div className='prompts-list'> 
      <div className='prompts-header'>
        <h2>Prompts</h2>
        <div className='prompts-header-item'>
          <button className='button-primary'><i className='fa fa-refresh'/></button>
        </div>
      </div>
      {prompts}
    </div>
  );
};

export default PromptsList;