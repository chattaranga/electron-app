import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {ROOT} from '../../../config';

class TranslationBoxes extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      inputText: '',
      translatedText: ''
    };

    this.updateInputText = this.updateInputText.bind(this);
  }

  updateInputText (event) {
    this.setState({
      inputText: event.target.value
    });
  }

  getTranslation () {
    axios
      .get(`localhost:8080/api/translate?text=${this.state.inputText}&sourceLanguage=en&targetLanguage=${this.props.targetLanguage}`)
      .then(res => {
        this.setState({
          translatedText: res.body.translation
        });
      })
      .catch(err => {
        console.log(err);
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

TranslationBoxes.propTypes = {
  targetLanguage: PropTypes.string
}

export default connect(mapStateToProps, null)(TranslationBoxes);