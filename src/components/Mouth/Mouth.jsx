import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import { connect } from 'react-redux';

import Speak from './Speak'

import { apologetic, descriptive, negative, positive } from './Tones';
import { randomElement } from "../../utils";
import { updateAnswer } from '../../actions';

const mapStateToProps = state => {
  return {
    answer: state.answer.answer,
    tone: state.answer.tone,
  }
};

const mapDispatchToProps = dispatch => {
    return {
        updateAnswer: answer => dispatch(updateAnswer(answer)),
    };
};

class ConnectedMouth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        switch (this.props.tone) {
            case 'apologetic':
                this.props.updateAnswer(randomElement(apologetic) + this.props.answer);
                this.setState({loading: false});
                break;
            case 'descriptive':
                this.props.updateAnswer(randomElement(descriptive) + this.props.answer);
                console.log(randomElement(descriptive) + this.props.answer)
                this.setState({loading: false});
                break;
            case 'negative':
                this.props.updateAnswer(randomElement(negative) + this.props.answer);
                this.setState({loading: false});
                break;
            case 'positive':
                this.props.updateAnswer(randomElement(positive) + this.props.answer);
                this.setState({loading: false});
                break;
        }
    }

    render() {
        const loading = this.state.loading;

        return (
            <div>
                { loading ? <Loading /> : <Speak /> }
            </div>
        );
    }
}

const Mouth = connect(mapStateToProps, mapDispatchToProps)(ConnectedMouth);

export default Mouth;

ConnectedMouth.propTypes = {
    answer: PropTypes.string,
    tone: PropTypes.string
};

ConnectedMouth.defaultProps = {
    answer: '',
    tone: undefined
};