// import {
//     ADD_PRODUCT_TO_CART,
//     ADD_ITEMS,
//     SUBTRACT_ITEMS,
//     REMOVE_PRODUCT_FROM_CART
//   } from '../actions';
  
//   const initialState = {
//     shoppingCart: {}
//   }
  
//   export const shoppingCart = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_PRODUCT_TO_CART: {
//         return {
//           ...state,
//           shoppingCart: {...state.shoppingCart, [action.payload.product.id]: action.payload}
//         }
//       }
//       case ADD_ITEMS: {
//         return {
//           ...state,
//           shoppingCart: {...state.shoppingCart, [action.payload]: {...state.shoppingCart[action.payload], quantity: state.shoppingCart[action.payload].quantity +1}}
//         }
//       }
//       case SUBTRACT_ITEMS: {
//         return {
//           ...state,
//           shoppingCart: {...state.shoppingCart, [action.payload]: {...state.shoppingCart[action.payload], quantity: state.shoppingCart[action.payload].quantity -1}}
//         }
//       }
//       case REMOVE_PRODUCT_FROM_CART: {
//         const {[action.payload.product.id]: deleted, ...shoppingCart} = state.shoppingCart;
//         return {
//           ...state,
//           shoppingCart: shoppingCart
//         }
//       }
//       default:
//         return state;
//     }
//   };
  
//   export default shoppingCart;