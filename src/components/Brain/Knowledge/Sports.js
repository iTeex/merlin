import axios from 'axios';

export const Sports = (props) => {

  if (props.request.indexOf('the') !== -1) {
    props.request.shift()
  }

  const baseUrl = 'http://www.thesportsdb.com/api/v1/json/1/';
  const teamNameEndPoint = 'searchteams.php?t=';
  const resultsEndPoint = 'eventslast.php?id=';
  const scheduleEndPoint = 'eventsnext.php?id=';

  const endPoint = props.date === 'last' ? resultsEndPoint : scheduleEndPoint;
  const teamName = props.request.join(' ');

  const response = {
    answer: '',
    tone: '',
    speak: false
  };

  function setAnswer(data) {
    if (typeof data.data.results === 'undefined' || data.data.results === null) {
      return {
        answer: '',
        tone: 'apologetic',
        speak: true
      }
    }
    if (props.value === 'result') {
      response.answer = data.data.results[0].dateEvent + ' - ' + data.data.results[0].strEvent + ' : ' + data.data.results[0].intHomeScore + ' - ' + data.data.results[0].intAwayScore
    } else {
      response.answer = data.data.results.reduce((acc, res) => {
        acc += res.dateEvent + ' - ' + res.strEvent + ' : ' + res.intHomeScore + '-' + res.intAwayScore + '\n';
        return acc
      }, '');
    }

    return response
  }

  return axios.get(baseUrl + teamNameEndPoint + teamName)
    .then(res => axios.get(baseUrl + endPoint + res.data.teams[0].idTeam))
    .then(res => setAnswer(res))
};
