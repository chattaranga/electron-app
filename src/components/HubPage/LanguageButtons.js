import React from 'react';
import {Link} from 'react-router';

const LanguageButtons = props => {
  const LanguageButtons = props.userLanguages.map((language, i) => {
    return (
     <div key={i}>
        <Link to='/chat'><img src={`img/${language.language}.png`}/>
          <p>{capitalise(language.language)}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className='hub-page-buttons'>
      {LanguageButtons}
    </div>
  );
};

function capitalise (s) {
  s = s.split('');
  s[0] = s[0].toUpperCase();
  return s;
}

export default LanguageButtons;
