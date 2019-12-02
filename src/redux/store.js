import {createStore, applyMiddleware} from "redux";
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import mainReducer from './mainReducer';

const middlewares = [];

if(process.env.NODE_ENV === "development"){
  middlewares.push(logger);
}

export const store = createStore(mainReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store,persistor};