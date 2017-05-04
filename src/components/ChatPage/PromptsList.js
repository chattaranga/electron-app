import React from 'react';
import PropTypes from 'prop-types';

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
        <h2>Need a hand?</h2>
        <div className='prompts-header-item'>
          <button className='button-primary'><i className='fa fa-refresh'/></button>
        </div>
      </div>
      {prompts}
    </div>
  );
};

PromptsList.propTypes = {
  prompts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PromptsList;