// import fetchData from '../utils/catalog';

// export const GET_CATALOG_REQUEST = '@actions/get_catalog/request';
// export const GET_CATALOG_SUCCESS = '@actions/get_catalog/success';
// export const GET_CATALOG_FAILURE = '@actions/get_catalog/failure';

// export const GET_CATALOG_REQUEST = 'GET_CATALOG_REQUEST';
// export const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS';
// export const GET_CATALOG_FAILURE = 'GET_CATALOG_SUCCESS';

// export const getCatalog = () => ({
//   type: GET_CATALOG_REQUEST,
// });

// export const getCatalogSuccess = (catalog) => ({
//   type: GET_CATALOG_SUCCESS,
//   payload: [...catalog],
// });

// export const getCatalogError = (error) => ({
//   type: GET_CATALOG_SUCCESS,
//   error,
// });

// console.log(fetchData)
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