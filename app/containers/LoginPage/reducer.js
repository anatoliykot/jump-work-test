/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_USERPASSWORD
} from './constants';

const initialState = fromJS({
  username: '',
  userpassword: ''
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.name);
    case CHANGE_USERPASSWORD:
      return state
        .set('userpassword', action.password);
    default:
      return state;
  }
}

export default loginPageReducer;