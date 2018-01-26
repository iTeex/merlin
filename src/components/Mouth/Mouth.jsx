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
          case 'apologetic': this.setState({answer: randomElement(apologetic)});
            break;
          case 'descriptive': this.setState({answer: randomElement(descriptive)});
            break;
          case 'negative': this.setState({answer: randomElement(negative)});
            break;
          case 'positive': this.setState({answer: randomElement(positive)});
            break;
          default: this.setState({answer: randomElement(apologetic)});
        }
    }

    render() {
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