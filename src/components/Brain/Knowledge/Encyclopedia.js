import { ucfirst } from '../../../utils';

export const Encyclopedia = (props) => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + ucfirst(props.request.join(' '));

  function setAnswer(data) {
    const response = {
      answer: data[2][0]
    };

    return Promise.resolve(response)
  }

  return fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(res => setAnswer(res))
};