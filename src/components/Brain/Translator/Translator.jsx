import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import Mouth from '../../Mouth/Mouth';
import { ucfirst } from '../../../utils';

class Translator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      answer: '',
      tone: 'none'
    };
  }

  componentWillMount() {

    const objectForTranslator = this.prepJsonObject();

    fetch("http://frengly.com/frengly/data/translate",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectForTranslator)
      })
      .then(res => res.json())
      .then(data => data.list.reduce((sentence, obj) => sentence + obj.destWord, ""))
      .then(data => this.setState({loading: false, answer:data}))
      .catch(error => console.log(error) | this.setState({loading: false, tone:'apologetic'}))
  }

  prepJsonObject() {
    const targetLanguage = ucfirst(this.props.props.location);
    this.props.props.request.pop();
    const textToTranslate = this.props.props.request.join(' ');

    return {
      destLang: targetLanguage,
      srcLang: "English",
      text: textToTranslate
    };
  }

  render() {
    const loading = this.state.loading;

    return (
      <div>
        { loading ? <Loading /> : <Mouth tone={this.state.tone} answer={this.state.answer} /> }
      </div>
    );
  }
}
export default Translator;

Translator.propTypes = {
  props: PropTypes.object
};

Translator.defaultProps = {
  props: undefined
};