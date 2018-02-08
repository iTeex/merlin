import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionParser from './QuestionParser';
import Mouth from '../Mouth/Mouth';
import { Loading } from 'react-simple-chatbot';

import Blank from './Blank/Blank'

import { compareStrings } from '../../utils';

class Brain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            response: {},
            request: '',
            component: Blank
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
        result[0](props).then(response => this.setStateFromValues(response))
      } else {
        result[0]().then(response => this.setStateFromValues(response))
      }
    }

    setStateFromValues = (response, loading = false, request = this.props.steps.question.value) => {
      this.setState({
        response: response,
        loading: loading,
        request: request
      })
    };

    parseRequest(parser, request) {
      if (typeof parser === 'undefined' || Object.keys(parser).length === 0) {
        return [Blank, {}, {}];
      }
      if (Object.keys(parser)[0] === 'knowledge' && Object.keys(parser).length === 2) {
        return [parser.knowledge, parser.props, request];
      } else {
        const key = Object.keys(parser).filter(key => compareStrings(key, request[0]))[0];
        request.shift();
        return this.parseRequest(parser[key], request)
      }
    }

    componentDidMount() {
      this.getComponentFromQuestion();
    }

    componentDidUpdate() {
      if (!this.state.loading) {
        this.setState({loading: true})
      }
    }

    shouldComponentUpdate() {
      return this.state.loading;
    }

    render() {
      const loading = this.state.loading;
      const response = this.state.response;

      return (
        <div>
          { loading ? <Loading /> : <Mouth response={response}/> }
        </div>
      );
    }
}
export default Brain;

Brain.propTypes = {
    steps: PropTypes.object
};

Brain.defaultProps = {
    steps: undefined
};