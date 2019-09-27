import { createStore, applyMiddleware } from 'redux';
import reducers from './ducks';

const composer = applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;