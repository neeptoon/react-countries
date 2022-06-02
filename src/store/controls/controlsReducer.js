import {RESET_CONTROLS, SET_REGION, SET_SEARCH} from "./controlsAction";


let initialState = {
	search: '',
	region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case (SET_SEARCH): {
			return {
				...state,
				search: payload
			}
		}
		case (SET_REGION): {
			return {
				...state,
				region: payload
			}
		}

		case (RESET_CONTROLS): {
			return initialState
		}
		default: return state;

	}
}