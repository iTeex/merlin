import {
  UPDATE_LOADING_STATUS,
  UPDATE_REQUEST_FULL,
  UPDATE_REQUEST,
  UPDATE_REQUEST_LOCATION,
  UPDATE_REQUEST_EXTRA_VALUE,
  UPDATE_ANSWER_FULL,
  UPDATE_ANSWER,
  UPDATE_ANSWER_TONE
} from './action-types';

/* LOADING */
export const updateLoadingStatus = (wait) => {
  return {
    type: UPDATE_LOADING_STATUS,
    payload: wait
  }
};

/* REQUEST */
export const updateRequestFull = (request) => {
  return {
    type: UPDATE_REQUEST_FULL,
    payload: request
  }
};

export const updateRequest = (request) => {
  return {
    type: UPDATE_REQUEST,
    payload: request
  }
};

export const updateRequestLocation = (location) => {
  return {
    type: UPDATE_REQUEST_LOCATION,
    payload: location
  }
};

export const updateRequestExtraValue = (value) => {
  return {
    type: UPDATE_REQUEST_EXTRA_VALUE,
    payload: value
  }
};

/* ANSWER */
export const updateAnswerFull = (answer) => {
  return {
    type: UPDATE_ANSWER_FULL,
    payload: answer
  }
};

export const updateAnswer = (answer) => {
  return {
    type: UPDATE_ANSWER,
    payload: answer
  }
};

export const updateAnswerTone = (tone) => {
  return {
    type: UPDATE_ANSWER_TONE,
    payload: tone
  }
};