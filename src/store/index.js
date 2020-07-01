import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
const initialState = {};

const middleware = [thunk];

const persistConfig = {
  key: 'FASHIONISTA_PROJECT',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };