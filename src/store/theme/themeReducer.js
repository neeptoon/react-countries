import {SWITCH_THEME} from "./themeAction";

export const themeReducer = (state = 'light', {type, payload}) => {
	switch (type) {
		case (SWITCH_THEME): {
			return payload;
		}
		default: return state;
	}
}