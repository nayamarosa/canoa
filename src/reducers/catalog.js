// import {
//     GET_CATALOG_REQUEST,
//     GET_CATALOG_SUCCESS,
//     GET_CATALOG_FAILURE,
//   } from '../actions/catalog';
  
//   const initialState = {
//     loading: false,
//     error: null,
//     catalog: [],
//   };
  
//   const catalogReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case GET_CATALOG_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case GET_CATALOG_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           error: null,
//           catalog: [...action.payload],
//         };
//       case GET_CATALOG_FAILURE:
//         return {
//           ...state,
//           error: action.error,
//         };
//       default:
//         return state;
//     }
//   };


  
//   export default catalogReducer;

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