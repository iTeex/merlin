import {
  UPDATE_REQUEST_FULL,
  UPDATE_REQUEST,
  UPDATE_REQUEST_LOCATION,
  UPDATE_REQUEST_EXTRA_VALUE
} from '../action-types';

export default (state = {request: ''}, action) => {
  switch(action.type) {
    case UPDATE_REQUEST_FULL:
      return {
        ...state,
        request: action.payload.request,
        location: action.payload.location,
        value: action.payload.value
      };
    case UPDATE_REQUEST:
      return {...state, request: action.payload};
    case UPDATE_REQUEST_LOCATION:
      return {...state, location: action.payload};
    case UPDATE_REQUEST_EXTRA_VALUE:
      return {...state, value: action.payload};
    default: return state;
  }
};