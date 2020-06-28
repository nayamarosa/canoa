import { combineReducers } from 'redux';

import catalog from './catalog';
import search from './search';

const rootReducer = combineReducers({
  catalog,
  search,
});

export default rootReducer;