import {combineReducers} from "redux";
import {themeReducer} from "./theme/themeReducer";

export const rootReducer = combineReducers({
	theme: themeReducer,
})