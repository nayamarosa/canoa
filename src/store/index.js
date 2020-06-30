import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['navigation'],
};

// const persitedReducer = persistReducer(persistConfig, 
//     rootReducer, 
//     initialState, 
//     composeEnhancers(applyMiddleware(...middleware))
// );

const composedEnhacers = composeEnhancers(applyMiddleware(thunk));

const persitedReducer = persistReducer(
    persistConfig, 
    rootReducer, 
    initialState, 
    composedEnhacers
);

// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
export const store = createStore(persitedReducer);
export const persistor = persistStore(store);


// export default store;
