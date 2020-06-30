export const GET_CATALOG = 'GET_CATALOG';
export const GET_CATALOG_ERROR = 'GET_CATALOG_ERROR';

export const fetchCatalog = () => (dispatch) => {
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