import {combineReducers} from "redux";
import {themeReducer} from "./theme/themeReducer";
import {countriesReducer} from "./countries/countriesReducer";
import {controlsReducer} from "./controls/controlsReducer";
import {detailsReducer} from "./details/detailsReducer";

export const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer,
	details: detailsReducer,
})