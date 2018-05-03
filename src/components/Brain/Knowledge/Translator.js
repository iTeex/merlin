import axios from 'axios';
import { ucfirst } from '../../../utils';

export const Translator = (props) => {
  const targetLanguage = ucfirst(props.location);
  props.request.pop();
  const textToTranslate = props.request.join(' ');

  const objectForTranslator = {
    destLang: targetLanguage,
    srcLang: "English",
    text: textToTranslate
  };

  function setAnswer(data) {
    const response = {
      answer: data,
      speak: true
    };

    return Promise.resolve(response)
  }

  return axios.post("http://frengly.com/frengly/data/translate", objectForTranslator)
    .then(data => data.data.list.reduce((sentence, obj) => sentence + obj.destWord, ""))
    .then(data => setAnswer(data))
};