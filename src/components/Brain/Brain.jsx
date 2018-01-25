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

    getComponentFromQuestion() {
        const lowerCaseRequest = this.props.steps.question.value.toLowerCase();
        const splitRequest = lowerCaseRequest.split(' ');

        const splitRequestLastItem = [...splitRequest].pop();
        if (splitRequestLastItem.length === 1) {
            splitRequest.pop();
        }

        const parser = {...QuestionParser};

        const result = this.parseRequest(parser, splitRequest);
        if (result[1] === false) {
            this.setState({component: result[0]});
        } else {
            this.setState(
                {
                    component: result[0],
                    props: splitRequest.pop()
                }
            );
        }
    }

    parseRequest(parser, request) {
        if (typeof parser === 'undefined' || Object.keys(parser).length === 0) {
            return Blank;
        }
        if (Object.keys(parser)[0] === 'component' && request.length < 2) {
            return [parser.component, parser.props];
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