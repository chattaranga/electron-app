import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {translateText} from '../../actions/translation.actions';
 
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
      inputText: event.target.value
    });
  }

  render () {
    return (
      <div className='translation-boxes'>
        <form>
          <textarea 
              value={this.state.inputText}
              onClick={this.getTranslation}
              onChange={this.updateInputText}
              placeholder='Type to translate...' />
          <br/>
          <textarea
              value={this.state.translatedText}
              placeholder='Translation...'
              readOnly='true' />
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    targetLanguage: state.user.trainingLanguage
  };
}

function mapDispatchToProps (dispatch) {
  return {
    translateText: (text, sourceLanguage, targetLanguage) => {
      dispatch(translateText(text, sourceLanguage, targetLanguage));
    }
  }
}

TranslationBoxes.propTypes = {
  targetLanguage: PropTypes.string,
  translateText: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationBoxes);