import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

import mainReducer from './mainReducer';

const middlewares = [logger];

const store = createStore(mainReducer,applyMiddleware(...middlewares));

export default store;