import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
  } from '../actions/catalog';
  
  const initialState = {
    products: [],
    error: ''
  }
  
  export const catalog = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS: {
        return {
          ...state,
          products: action.payload,
        }
      }
      case FETCH_PRODUCTS_ERROR: {
          return {
            ...state,
            error: action.payload
          }
      }
      default:
        return state;
    }
  };

  export default catalog;