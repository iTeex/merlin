import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import QuestionParser from './QuestionParser';

import Blank from './Blank/Blank'

class Brain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            component: Blank,
            props: {}
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

        if (result[1] === false) {
            this.setState({component: result[0]});
        } else {
            const props = result[1];
            props.request = result[2];
            if ('location' in result[1]) {
              props.location = request.pop();
            }
            this.setState(
                {
                    component: result[0],
                    props: props
                }
            );
        }
    }

    parseRequest(parser, request) {
      if (typeof parser === 'undefined' || Object.keys(parser).length === 0) {
            return [Blank, {}, {}];
        }
        if (Object.keys(parser)[0] === 'component' && Object.keys(parser).length === 2) {
          return [parser.component, parser.props, request];
        } else {
            const key = Object.keys(parser).filter(key => key === request[0])[0];
            request.shift();
            return this.parseRequest(parser[key], request)
        }
    }

    componentWillMount() {
        this.getComponentFromQuestion();
        this.setState({loading: false});
    }

    render() {
        const loading = this.state.loading;
        const Result = this.state.component;

        return (
            <div>
                { loading ? <Loading /> : <Result props={this.state.props} /> }
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