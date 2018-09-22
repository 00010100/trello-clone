import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

export const history = createHistory();

const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history)));

export default store;
