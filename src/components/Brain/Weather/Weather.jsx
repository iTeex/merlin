import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import { ucfirst } from '../../../utils';
import Mouth from '../../Mouth/Mouth';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            tone: ''
        };
    }

    componentWillMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + ucfirst(this.props.props) + '&appid=01aea968f8f3cff49d0a33334e36f491')
            .then(res => res.json())
            .then(res => {
                if ("rain" in res) {
                    console.log(res)
                    this.setState({tone: "positive", loading: false})
                } else {
                    this.setState({tone: "negative", loading: false})
                }
            })
    }

    render() {
        const loading = this.state.loading;

        return (
            <div>
                { loading ? <Loading /> : <Mouth tone={this.state.tone}/> }
            </div>
        );
    }
}
export default Weather;

Weather.propTypes = {
    props: PropTypes.string
};

Weather.defaultProps = {
    props: undefined
};