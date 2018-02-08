export const Joke = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

    function setAnswer(data) {
        const answer = data.setup + '\n' + data.punchline;

        const response = {
            answer: answer
        };

        return Promise.resolve(response)
    }

    return fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => setAnswer(res))
};