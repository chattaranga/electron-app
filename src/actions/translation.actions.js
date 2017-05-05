import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function translateText (text, sourceLanguage, targetLanguage) {
  return function (dispatch) {
    dispatch(translateTextRequest());
    axios
      .get(`${ROOT}translate?text=${text}&sourceLanguage=${sourceLanguage}&targetLanguage=${targetLanguage}`)
      .then(res => {
        dispatch(translateTextSuccess(res.data));
      })
      .catch(err => {
        dispatch(translateTextError(err));
      });
  };
}

export function translateTextRequest () {
  return {
    type: types.TRANSLATE_TEXT_REQUEST
  };
}

export function translateTextSuccess (translatedText) {
  return {
    type: types.TRANSLATE_TEXT_SUCCESS,
    data: translatedText
  };
}

export function translateTextError (err) {
  return {
    type: types.TRANSLATE_TEXT_ERROR,
    data: err
  };
}