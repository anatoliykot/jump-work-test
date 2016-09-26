/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_USERNAME,
  CHANGE_USERPASSWORD
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERPASSWORD
 */
export function changeUserpassword(password) {
  return {
    type: CHANGE_USERPASSWORD,
    password,
  };
}