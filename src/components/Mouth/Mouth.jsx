import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { positive, negative } from './Tones';
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
            case 'positive': this.setState({answer: randomElement(positive)});
                break;
            case 'negative': this.setState({answer: randomElement(negative)});
                break;
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
    tone: PropTypes.string
};

Mouth.defaultProps = {
    tone: undefined
};