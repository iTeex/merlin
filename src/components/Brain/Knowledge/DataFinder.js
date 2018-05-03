import axios from 'axios';

export const DataFinder = (props) => {
  let baseUrl = '';

  const urlRegex = new RegExp(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi);

  if (props.request.join(' ').match(urlRegex)) {
    baseUrl = 'http://freegeoip.net/json/';
  } else {
    return {
      answer: '',
      tone: 'apologetic',
      speak: true
    };
  }

  const response = {
    answer: '',
    tone: '',
    speak: false
  };

  function setAnswer(data) {
    let answer = JSON.stringify(data.data, null, 2);
    answer = answer.replace(/"|,|{|}/g, ' ');
    response.answer = answer;

    return response
  }

  return axios.get(baseUrl + props.request)
    .then(res => setAnswer(res))
};
