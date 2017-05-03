import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const LanguageButtons = props => {
  const LanguageButtons = props.userLanguages.map((language, i) => {
    return (
     <div key={i}>
        <span onClick={props.selectLanguage.bind(null, language.language)}>
          <Link to='/chat'><img src={`img/${language.language}.png`}/>
            <p>{capitalise(language.language)}</p>
          </Link>
        </span>
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

LanguageButtons.propTypes = {
  userLanguages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLanguage: PropTypes.func.isRequired
};

export default LanguageButtons;
