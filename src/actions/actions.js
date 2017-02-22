import {ADD_CALC, CHANGE_NAV_KEY} from './actionTypes.js';

/*
 * action creators
 */

 export function addCalculation(text) {
  return { type: ADD_CALC, text }
}

export function changeNavKey(property, value) {
 return { type: CHANGE_NAV_KEY, property, value}
}
