import axios from "axios";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import {rootReducer} from "./rootReducer";
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk
	.withExtraArgument({
		client: axios,
		api
	})
));

const store = createStore(rootReducer, enhancer);

export {store};