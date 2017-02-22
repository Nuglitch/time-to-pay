import {combineReducers} from 'redux';
import initialState from './initialState.js';
import {ADD_CALC, CHANGE_NAV_KEY} from '../actions/actionTypes.js';

export function calculations(state = initialState.calculations, action) {
	switch (action.type) {
		default:
		return state;
	}
}

export function debtors(state = initialState.debtors, action) {
	switch (action.type) {
		default:
		return state;
	}
}

export function navStates(state = initialState.navStates, action) {
	switch (action.type) {
		case CHANGE_NAV_KEY:
			if (state[action.property]) {
				return {...state, [action.property]: action.value};
			}
		default:
		return state;
	}
}

const reducer = combineReducers({
	calculations,
	debtors,
	navStates
});

export default reducer;
