/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadUser() {
  return {
    type: LOAD_USER,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} data The user data
 * @param  {string} token The current user token
 *
 * @return {object} An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function userLoaded(data, token) {
  return {
    type: LOAD_USER_SUCCESS,
    data,
    token,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function userLoadingError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}
