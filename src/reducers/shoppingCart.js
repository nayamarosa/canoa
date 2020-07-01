import {
    ADD_PRODUCT_TO_CART,
    ADD_ITEMS,
    SUBTRACT_ITEMS,
    REMOVE_PRODUCT_FROM_CART
  } from '../actions/shoppingCart';
  
  const initialState = {
    cart: {}
  }  
  
  export const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART: {
        return {
          ...state,
          cart: {...state.cart, [action.payload.product.code_color + action.payload.size]: action.payload }
        }
      }
      case ADD_ITEMS: {
        return {
          ...state,
          cart: {...state.cart, [action.payload]: {...state.cart[action.payload], quantity: state.cart[action.payload].quantity +1}}
        }
      }
      case SUBTRACT_ITEMS: {
        return {
          ...state,
          cart: {...state.cart, [action.payload]: {...state.cart[action.payload], quantity: state.cart[action.payload].quantity -1}}
        }
      }
      case REMOVE_PRODUCT_FROM_CART: {
        const {[action.payload.product.code_color]: deleted, ...cart} = state.cart;
        return {
          ...state,
          cart: cart
        }
      }
      default:
        return state;
    }
  };
  
  export default shoppingCart;