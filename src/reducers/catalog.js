import {
    GET_CATALOG,
    GET_CATALOG_ERROR,
  } from '../actions/catalog';
  
  const initialState = {
    products: [],
    error: ''
  }
  
  export const catalog = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case GET_CATALOG: {
        return {
          ...state,
          products: action.payload,
        }
      }
      case GET_CATALOG_ERROR: {
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