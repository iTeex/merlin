import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import Library from './Library';

import Blank from './Blank/Blank'

class Brain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            component: Blank
        };
    }

    requestParser() {
        const request = this.props.steps.question.value.toLowerCase();

        const result = Library.filter(obj => obj.request === request);

        if (result.length > 0) {
            this.setState({component: result[0].component});
        }
    }

    componentWillMount() {
        this.requestParser();
        this.setState({loading: false});
    }

    render() {
        const { loading } = this.state.loading;
        const Result = this.state.component;

        return (
            <div>
                { loading ? <Loading /> : <Result /> }
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