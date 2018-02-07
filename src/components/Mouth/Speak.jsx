import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        answer: state.answer.answer,
    }
};

class ConnectedSpeak extends Component {
    render() {
        const responsiveVoice = window.responsiveVoice;
        responsiveVoice.speak(this.props.answer, "UK English Male", {pitch: 1, rate: 1.2});

        return this.props.answer
    }
}

const Speak = connect(mapStateToProps)(ConnectedSpeak);

export default Speak;

ConnectedSpeak.propTypes = {
    answer: PropTypes.string,
};

ConnectedSpeak.defaultProps = {
    answer: '',
};