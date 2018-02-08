export const Sun = (props) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    let targetUrl = '';

    navigator.geolocation.getCurrentPosition(createPromise);

    function setAnswer(data) {
        let answer = '';
        if (props.value === 'rise') {
            answer = 'The sun will rise at ' + data.results.sunrise;
        } else {
            answer = 'The sun will set at ' + data.results.sunset;
        }

        const response = {
            answer: answer
        };

        return Promise.resolve(response)
    }

    function createPromise(position) {
        targetUrl = 'https://api.sunrise-sunset.org/json?lat='+ position.coords.latitude +'&lng='+ position.coords.longitude;
    }

    return fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => setAnswer(res))
};