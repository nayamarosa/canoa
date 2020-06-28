import {
  OPEN_SEARCH,
  CLOSE_SEARCH,
  INPUT_SEARCH
} from '../actions/search';

const initialState = {
  inputValue: '',
  filtered: []
}

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SEARCH: {
      return {
        ...state,
      }
    }
    case CLOSE_SEARCH: {
      return {
        ...state,
        filtered: []
      }
    }
    case INPUT_SEARCH: {
      return {
        ...state,
        inputValue: action.payload.inputValue,
        filtered: action.payload.filteredList
      }
    }
    default:
    return state;
  }
};

export default catalog;