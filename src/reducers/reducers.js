import { combineReducers } from 'redux';
import initialState from './initialState.js';
import { ADD_CALC, CHANGE_NAV_KEY, NEW_CONTACT } from '../actions/actionTypes.js';

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

export function contacts(state = initialState.contacts, action) {
	switch (action.type) {
		case NEW_CONTACT:
			return [...state, action.contact];
		default:
			return state;
	}
}

export function navStates(state = initialState.navStates, action) {
	switch (action.type) {
		case CHANGE_NAV_KEY:
			return { ...state, [action.property]: action.value };
		default:
			return state;
	}
}

const reducer = combineReducers({
	calculations,
	debtors,
	contacts,
	navStates
});

export default reducer;
