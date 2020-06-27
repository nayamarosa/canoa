import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import {fetchProducts} from '../actions/catalog'

import rootReducer from '../reducers';
const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(store.dispatch())
unsubscribe()
export default store;