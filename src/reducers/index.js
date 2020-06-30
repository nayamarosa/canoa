import { combineReducers } from 'redux';

import catalog from './catalog';
import search from './search';
import shoppingCart from './shoppingCart';

const rootReducer = combineReducers({
  catalog,
  search,
  shoppingCart,  
});

export default rootReducer;