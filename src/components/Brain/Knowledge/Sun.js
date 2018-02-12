export const Sun = (props) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const date = props.date === 'today' ? 'today' : setDate();
  let targetUrl = '';

  function setDate() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.getFullYear() + '-' + formatMonth(d.getMonth()) + '-' + d.getDate();
  }

  function formatMonth(month) {
    let formattedMonth = month + 1;

    return formattedMonth < 10 ? '0' + month : month;
  }

  const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const getSunInfo = (position) => {
    targetUrl = 'https://api.sunrise-sunset.org/json?lat='+ position.coords.latitude +'&lng='+ position.coords.longitude +'&date='+date;
    return fetch(proxyUrl + targetUrl)
      .then(res => res.json())
  };

  const setAnswer = (data) => {
    let answer = '';
    if (props.value === 'rise') {
      answer = 'The sun will rise at ' + data.results.sunrise;
    } else {
      answer = 'The sun will set at ' + data.results.sunset;
    }

    const response = {
      answer: answer,
      speak: true
    };

    return Promise.resolve(response)
  };

  return getPosition()
    .then(position => getSunInfo(position))
    .then(res => setAnswer(res))
};