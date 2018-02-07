import { UPDATE_ANSWER_FULL, UPDATE_ANSWER, UPDATE_ANSWER_TONE } from '../action-types';

export default (state = {answer: ''}, action) => {
  switch(action.type) {
    case UPDATE_ANSWER_FULL:
      return {...state, answer: action.payload.answer, tone: action.payload.tone};
    case UPDATE_ANSWER:
      return {...state, answer: action.payload};
    case UPDATE_ANSWER_TONE:
      return {...state, tone: action.payload};
    default: return state;
  }
};