import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Loading } from 'react-simple-chatbot';
import { connect } from "react-redux";
import { updateLoadingStatus, updateAnswerFull, updateAnswerTone } from '../../../actions';

import { ucfirst } from '../../../utils';
import Mouth from '../../Mouth/Mouth';

const mapStateToProps = state => {
  return {
    loading: state.loading.loading,
    location: state.request.location,
    value: state.request.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoadingStatus: loading => dispatch(updateLoadingStatus(loading)),
    updateAnswer: answer => dispatch(updateAnswerFull(answer)),
    updateTone: tone => dispatch(updateAnswerTone(tone)),
  };
};

class ConnectedWeather extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + ucfirst(this.props.location) + '&appid=01aea968f8f3cff49d0a33334e36f491')
            .then(res => this['setState' + this.props.value](res.data))
            .catch(error => console.log(error) | this.setState({tone:'apologetic'}))
    }

    render() {
      return <Mouth />
    }

    /* Set State methods */

    setStateRain(fetchRes) {
        if ("rain" in fetchRes) {
            this.props.updateTone("positive")
        } else {
            this.props.updateTone("negative")
        }
    }

    setStateCold(fetchRes) {
        this.props.updateAnswer({tone: "descriptive", answer: fetchRes.main.temp + '°C'})
    }

    setStateHot(fetchRes) {
        this.props.updateAnswer({tone: "descriptive", answer: fetchRes.main.temp + '°C'})
    }
}

const Weather = connect(mapStateToProps, mapDispatchToProps)(ConnectedWeather);

export default Weather;

ConnectedWeather.propTypes = {
    props: PropTypes.object
};

ConnectedWeather.defaultProps = {
    props: undefined
};