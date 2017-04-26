const React = require('react');

const PromptsList = () => {
  return (
    <div className='prompts-list'>
      
      <h3>prompts</h3>
      
      <div className='orange-msg-box'>
        <p>Here is a helpful prompt to get the conversation flowing.</p>
      </div>

      <div className='orange-msg-box'>
        <p>I'm a prompt too! I'm way more helpful than the one above me!</p>
      </div>

      <div className='orange-msg-box'>
        <p>Don't listen to that guy! I'm clearly the best prompt on this site, it's so obvious.</p>
      </div>

    </div>
  );
};

module.exports = PromptsList;