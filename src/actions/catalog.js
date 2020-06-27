export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = () => dispatch => {
  fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    }))
    .catch(err => dispatch({
      type: FETCH_PRODUCTS_ERROR,
      payload: err
    })
  );
};