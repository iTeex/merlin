export const Puppy = () => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.thedogapi.co.uk/v2/dog.php?limit=1)'

  function setAnswer(data) {
    const response = {
      answer: data.data[0].url,
      image: true
    };

    return Promise.resolve(response)
  }

  return fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(res => setAnswer(res))
};