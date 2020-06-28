import {
  OPEN_SEARCH,
  CLOSE_SEARCH,
} from '../actions/search';

const initialState = {
  inputValue: '',
  filtered: []
}

export const catalog = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case OPEN_SEARCH: {
      return {
        ...state,
      }
    }
    case CLOSE_SEARCH: {
      return {
        ...state,
      }
    }
    default:
    return state;
  }
};

export default catalog;