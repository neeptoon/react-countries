import {SET_SEARCH} from "./controlsAction";

let initialState = {
	search: '',
	region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case (SET_SEARCH): {
			return {
				...state,
				search: state.search
			}
		}
		default: return state;

	}
}