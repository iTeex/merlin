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
            answer: '',
            tone: ''
        };
    }

    componentWillMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + ucfirst(this.props.props.location) + '&appid=01aea968f8f3cff49d0a33334e36f491')
            .then(res => res.json())
            .then(res => this['setState' + this.props.props.value](res))
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

    // Set State methods

    setStateRain(fetchRes) {
        if ("rain" in fetchRes) {
            this.setState({tone: "positive", loading: false})
        } else {
            this.setState({tone: "negative", loading: false})
        }
    }

    setStateCold(fetchRes) {
        this.setState({tone: "descriptive", loading: false, answer: fetchRes.main.temp + '°C'})
    }

    setStateHot(fetchRes) {
        this.setState({tone: "descriptive", loading: false, answer: fetchRes.main.temp + '°C'})
    }
}
export default Weather;

Weather.propTypes = {
    props: PropTypes.object
};

Weather.defaultProps = {
    props: undefined
};