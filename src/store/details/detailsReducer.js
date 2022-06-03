import {SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_DETAILS} from "./detailsAction";

let initialState = {
	error: null,
	status: 'idle',
	currentCountry: null
}

export const detailsReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case (SET_LOADING) : {
			return {
				...state,
				status: 'loading',
				error: null,
			}
		}

		case (SET_ERROR) : {
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		}

		case (SET_COUNTRY) : {
			return {
				...state,
				status: 'loaded',
				currentCountry: payload
			}
		}

		case (CLEAR_DETAILS) : {
			return {
				initialState
			}
		}


		default: return state;

	}
}