import { combineReducers } from 'redux';

import catalog from './catalog';
// import shoppingCart from './shoppingCart';

const rootReducer = combineReducers({
  catalog,
  // shoppingCart,
});

export default rootReducer;