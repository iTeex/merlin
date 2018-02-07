import { combineReducers } from 'redux';

import answer from './answer';
import loading from './loading';
import request from './request';

export default combineReducers({answer, loading, request});