import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Loading } from 'react-simple-chatbot';

import { ucfirst } from '../../../utils';
import Mouth from '../../Mouth/Mouth';

class Encyclopedia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            answer: '',
            tone: ''
        };
    }

    componentWillMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + ucfirst(this.props.props.request.join(' '))

        console.log(this.props.props.request)
        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.log(error) | this.setState({loading: false, tone:'apologetic'}))

    }

    render() {
        const loading = this.state.loading;

        return (
            <div>
                { loading ? <Loading /> : <Mouth tone={this.state.tone} answer={this.state.answer} /> }
            </div>
        );
    }
}
export default Encyclopedia;

Encyclopedia.propTypes = {
    props: PropTypes.object
};

Encyclopedia.defaultProps = {
    props: undefined
};