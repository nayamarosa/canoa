export const GET_CATALOG = 'GET_CATALOG';
export const GET_CATALOG_ERROR = 'GET_CATALOG_ERROR';

export const ADD_PRODUCT_TO_CART = 'GET_CATALOG';
// export const ADD_ITEMS = 'GET_CATALOG_ERROR';
// export const SUBTRACT_ITEMS = 'GET_CATALOG';
// export const REMOVE_PRODUCT_FROM_CART = 'GET_CATALOG_ERROR';

export const fetchCatalog = () => dispatch => {
  fetch('https://5ef79da58566150016a45726.mockapi.io/api/v1/catalog')
    .then(res => res.json())
    .then(data => dispatch({
      type: GET_CATALOG,
      payload: data
    }))
    .catch(err => dispatch({
      type: GET_CATALOG_ERROR,
      payload: err
    })
  );
};

export const addProductToCart = (product, size) => (dispatch) => {
  return dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      product: product,
      size: size,
      quantity: 1
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

// export const removeProductFromCart = (product) => (dispatch) => {
//   return dispatch({
//     type: REMOVE_PRODUCT_FROM_CART,
//     payload: {
//       product: product
//     }
//   })
// };