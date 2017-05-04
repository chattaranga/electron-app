import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {translateText} from '../../actions/translation.actions';
import _ from 'underscore';
 
class TranslationBoxes extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      inputText: ''
    };

    this.updateInputText = this.updateInputText.bind(this);
  }

  updateInputText (event) {
    this.setState({
      inputText: event.target.value,
    }, () => {
      this.throttledTranslate(this.state.inputText, 'en', this.props.targetLanguage);
    });
  }

  componentDidMount () {
    this.throttledTranslate = _.throttle(this.props.translateText, 1000);
  }

  render () {
    return (
      <div className='translation-boxes'>
        <form>
          <textarea 
              value={this.state.inputText}
              onChange={this.updateInputText}
              placeholder='Type to translate...' />
          <br/>
          <textarea
              value={this.props.translatedText}
              placeholder='Translation...'
              readOnly='true' />
        </form>
      </div>
    );
  }
}

function formatLanguage (language) {
  switch (language) {
    case 'spanish': return 'es';
    case 'french': return 'fr';
    case 'english': return 'en';
    case 'italian': return 'it';
  }
}

function mapStateToProps (state) {
  return {
    targetLanguage: formatLanguage(state.user.trainingLanguage),
    translatedText: state.translation.translatedText
  };
}

function mapDispatchToProps (dispatch) {
  return {
    translateText: (text, sourceLanguage, targetLanguage) => {console.log('***************');
      dispatch(translateText(text, sourceLanguage, targetLanguage));
    }
  };
}

TranslationBoxes.propTypes = {
  targetLanguage: PropTypes.string,
  translatedText: PropTypes.string,
  translateText: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationBoxes);