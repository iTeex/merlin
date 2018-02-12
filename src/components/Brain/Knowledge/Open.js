export const Open = (props) => {
  window.open('http://' + props.request[0], '_blank');

  const answer = {
    answer: '',
    tone: 'delivering',
    speak: true
  };

  return Promise.resolve(answer)
};