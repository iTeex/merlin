import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import { Parser } from 'hot-formula-parser';

import Mouth from '../../Mouth/Mouth';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      answer: '',
      tone: 'none'
    };
  }

  componentWillMount() {
    const parser = new Parser();
    const formula = this.props.props.request.join(' ');
    const result = parser.parse(formula);

    switch(result.error) {
      case null: this.setState({answer: result.result, loading: false});
        break;
      case '#DIV/0!': this.setState({answer: 'Hmm sorry, I can\'t divide by zero...', loading: false});
        break;
      case '#NAME?': this.setState({answer: 'I don\'t know what you\'re talking about...', loading: false});
        break;
      case '#N/A': this.setState({answer: 'You can\'t use that in this formula...', loading: false});
        break;
      case '#NUM!': this.setState({answer: 'Hmm one of these numbers appears to be invalid somehow...', loading: false});
        break;
      case '#VALUE!': this.setState({answer: 'Hmm one of these numbers appears to be of a wrong type...', loading: false});
        break;
      default: this.setState({answer: 'Something bad just happened...', loading: false});
    }
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
export default Calculator;

Calculator.propTypes = {
  props: PropTypes.object
};

Calculator.defaultProps = {
  props: undefined
};