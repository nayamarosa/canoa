import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
const initialState = {};

// export default compose(applyMiddleware(thunk))(createStore)(duedates);
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['catalog', 'search', 'shoppingCart'],
};

// const persitedReducer = persistReducer(persistConfig, 
//     rootReducer, 
//     initialState, 
//     composeEnhancers(applyMiddleware(...middleware))
// );

const composedEnhacers = composeEnhancers(applyMiddleware(...middleware));

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
