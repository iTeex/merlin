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
        switch (this.props.response.tone) {
            case 'apologetic':
                this.setState({answer: randomElement(apologetic) + this.props.response.answer});
                break;
            case 'descriptive':
                this.setState({answer: randomElement(descriptive) + this.props.response.answer});
                break;
            case 'negative':
                this.setState({answer: randomElement(negative) + this.props.response.answer});
                break;
            case 'positive':
                this.setState({answer: randomElement(positive) + this.props.response.answer});
                break;
          default: this.setState({answer: this.props.response.answer});
        }
    }

    render() {
        const answer = {...this.state};

        if (this.props.response.image === true) {
          return (
            <div className='img-container'>
              <img src={answer.answer} />
            </div>
          );
        } else {
          const responsiveVoice = window.responsiveVoice;
          responsiveVoice.speak(answer.answer, "UK English Male", {pitch: 1, rate: 1.2});

          return <span> { answer.answer } </span>
        }
    }
}
export default Mouth;

Mouth.propTypes = {
  response: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    tone: PropTypes.string,
    image: PropTypes.boolean
  })
};

Mouth.defaultProps = {
  response: {
    answer: '',
    tone: '',
    image: false
  }
};