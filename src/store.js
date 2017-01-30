import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const middleware = applyMiddleware(thunk, logger());

const store = createStore(rootReducer, middleware);

store.subscribe(() => {
    saveState({favs: store.getState().favs});
});

export const history = syncHistoryWithStore(hashHistory, store);
export default store;
