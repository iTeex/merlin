import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { apologetic, descriptive, negative, positive } from './Tones';
import { randomElement } from "../../utils";

class Mouth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        };
    }


    componentDidMount() {
        switch (this.props.tone) {
          case 'apologetic': this.setState({answer: randomElement(apologetic) + this.props.answer});
            break;
          case 'descriptive': this.setState({answer: randomElement(descriptive) + this.props.answer});
            break;
          case 'negative': this.setState({answer: randomElement(negative) + this.props.answer});
            break;
          case 'positive': this.setState({answer: randomElement(positive) + this.props.answer});
            break;
          default: this.setState({answer: this.props.answer});
        }
    }

    render() {
      const responsiveVoice = window.responsiveVoice;
      responsiveVoice.speak(this.state.answer, "UK English Male", {pitch: 1, rate: 1.2});

      return (
            <div>
              { this.state.answer }
            </div>
        );
    }
}
export default Mouth;

Mouth.propTypes = {
    answer: PropTypes.string,
    tone: PropTypes.string
};

Mouth.defaultProps = {
    answer: '',
    tone: undefined
};