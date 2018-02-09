export const Lyrics = (props) => {

  const indexOfBy = props.request.indexOf('by');
  const band = [...props.request].slice(indexOfBy + 1).join(' ');
  const song = [...props.request].slice(0, indexOfBy).join(' ');

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.lyrics.ovh/v1/' + band + '/' + song;

  function setAnswer(data) {
    const response = {
      answer: data.lyrics,
      speak: false
    };

    return Promise.resolve(response)
  }

  return fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(res => setAnswer(res))
};