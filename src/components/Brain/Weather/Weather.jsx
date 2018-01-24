import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(this.getWeather);
    }

    getWeather(position) {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=01aea968f8f3cff49d0a33334e36f491')
            .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                It is { this.state.result }
            </div>
        );
    }
}
export default Weather;


Weather.propTypes = {
    steps: PropTypes.object
};

Weather.defaultProps = {
    steps: undefined
};