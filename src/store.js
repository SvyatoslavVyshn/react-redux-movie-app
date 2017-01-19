import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = applyMiddleware(thunk, logger());

const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(hashHistory, store);
export default store;
