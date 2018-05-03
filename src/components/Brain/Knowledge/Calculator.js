import { Parser } from 'hot-formula-parser';

export const Calculator = (props) => {
  const parser = new Parser();
  const formula = props.request.join(' ');
  const result = parser.parse(formula);
  const response = {
    answer: '',
    tone: '',
    speak: true
  };

  switch(result.error) {
    case null: response.answer = result.result.toString();
      break;
    case '#DIV/0!': response.answer = 'Hmm sorry, I can\'t divide by zero...';
      break;
    case '#NAME?': response.answer = 'I don\'t know what you\'re talking about...';
      break;
    case '#N/A': response.answer = 'You can\'t use that in this formula...';
      break;
    case '#NUM!': response.answer = 'Hmm one of these numbers appears to be invalid somehow...';
      break;
    case '#VALUE!': response.answer = 'Hmm one of these numbers appears to be of a wrong type...';
      break;
    default: response.answer = 'Something bad just happened...';
  }

  return Promise.resolve(response);
};
