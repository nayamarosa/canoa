export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
// export const ADD_ITEMS = 'ADD_ITEMS';
// export const SUBTRACT_ITEMS = 'SUBTRACT_ITEMS';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const addProductToCart = (product, size) => (dispatch) => {
  return dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      // code: code,
      product: product,
      size: size,
      quantity: 1
    }
  })
};

export const removeProductFromCart = (product) => (dispatch) => {
  return dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: {
      product: product
    }
  })
};

// export const addQuantity = (id) => (dispatch) => {
//   return dispatch({
//     type: ADD_ITEMS,
//     payload: id
//   })
// };

// export const subtractQuantity = (id) => (dispatch) => {
//   return dispatch({
//     type: SUBTRACT_ITEMS,
//     payload: id
//   })
// };

