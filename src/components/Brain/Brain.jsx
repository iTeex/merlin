import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionParser from './QuestionParser';
import { connect } from "react-redux";
import { updateRequestFull } from '../../actions';

import Blank from './Blank/Blank'

import { compareStrings } from '../../utils';

const mapDispatchToProps = dispatch => {
  return {
    updateRequest: request => dispatch(updateRequestFull(request)),
  };
};

class ConnectedBrain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: Blank,
        };
    }

    prepareRequest() {
        // Set all words to lower case
        const lowerCaseRequest = this.props.steps.question.value.toLowerCase();
        // Remove punctuation (?)
        const wordedRequest = lowerCaseRequest.replace(/\u003F/g, '');
        // Turn sentence into parsable array
        const splitRequest = wordedRequest.split(' ');
        // If the last item is a trailing space, remove it
        if ([...splitRequest].pop() === '') {
            splitRequest.pop();
        }

        return splitRequest;
    }

    getComponentFromQuestion() {
        const request = this.prepareRequest();
        const parser = {...QuestionParser};
        const result = this.parseRequest(parser, request);

        if (result[1] !== false) {
            const props = result[1];
            props.request = result[2];
            if ('location' in result[1]) {
              props.location = request.pop();
            }
            this.props.updateRequest(props)
        }

        this.setState({component: result[0]});
    }

    parseRequest(parser, request) {
      if (typeof parser === 'undefined' || Object.keys(parser).length === 0) {
            return [Blank, {}, {}];
        }
        if (Object.keys(parser)[0] === 'component' && Object.keys(parser).length === 2) {
          return [parser.component, parser.props, request];
        } else {
            const key = Object.keys(parser).filter(key => compareStrings(key, request[0]))[0];
            request.shift();
            return this.parseRequest(parser[key], request)
        }
    }

    componentWillMount() {
        this.getComponentFromQuestion();
    }

    render() {
        const Result = this.state.component;

        return <Result />;
    }
}
const Brain = connect(null, mapDispatchToProps)(ConnectedBrain);

export default Brain;

ConnectedBrain.propTypes = {
    steps: PropTypes.object
};

ConnectedBrain.defaultProps = {
    steps: undefined
};