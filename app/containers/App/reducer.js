/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userToken: false,
  userData: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('userData', false);
    case LOAD_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('userData', action.data)
        .set('userToken', action.token);
    case LOAD_USER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
