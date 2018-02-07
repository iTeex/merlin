import { UPDATE_LOADING_STATUS } from '../action-types';

export default (state = {loading: true}, action) => {
  switch(action.type) {
    case UPDATE_LOADING_STATUS:
      return {...state, loading: action.payload};
    default: return state;
  }
};