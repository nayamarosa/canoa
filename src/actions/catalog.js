import { API_URL } from '../utils'
export const GET_CATALOG = 'GET_CATALOG';
export const GET_CATALOG_ERROR = 'GET_CATALOG_ERROR';

export const fetchCatalog = () => dispatch => {
  fetch(API_URL)
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