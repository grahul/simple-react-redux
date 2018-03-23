import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './reducers';

const enhancers = compose(applyMiddleware(reduxThunk));

const store = createStore(reducers, {}, enhancers);

export const history = createBrowserHistory();

export default store;