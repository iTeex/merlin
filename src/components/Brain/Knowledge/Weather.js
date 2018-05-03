import axios from 'axios';
import { ucfirst } from '../../../utils';

export const Weather = (props) => {
  const response = {
    answer: '',
    tone: '',
    speak: true
  };

  function rain(fetchRes) {
    if ('rain' in fetchRes) {
      response.tone = 'positive'
    } else {
      response.tone = 'negative'
    }
    return Promise.resolve(response);
  }

  function giveTemperature(fetchRes) {
    response.tone = 'descriptive';
    response.answer = fetchRes.main.temp + '°C';
    return Promise.resolve(response);
  }

  return axios.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + ucfirst(props.location) + '&appid=01aea968f8f3cff49d0a33334e36f491')
    .then(res => {
      switch(props.value) {
        case 'cold':
          return giveTemperature(res.data);
        case 'hot':
          return giveTemperature(res.data);
        case 'rain':
          return rain(res.data);
        default:
          return giveTemperature(res.data)
      }
    })
};
