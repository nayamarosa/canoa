export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const INPUT_SEARCH = 'INPUT_SEARCH';
export const LIST_SEARCH = 'LIST_SEARCH';
export const REDIRECT_SEARCH = 'REDIRECT_SEARCH';

export const openSearch = (opened) => dispatch => {
  const open = () => {
    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')
    
    const inputSearch = document.querySelector('.input__search')
    
    showInput.classList.add('search__input--open')
    showList.classList.add('search__list--open')
    blockBody.classList.add('search__list--body-hidden')
    inputSearch.focus()

    if(window.screen.width > 1020) {
      let inputLeft = document.querySelector('.search__input.search__input--open').getBoundingClientRect().left - 410;
      let seachListPosition = document.querySelector('.search__list');
      seachListPosition.style.left=`${inputLeft}px`
    }
  }
  
  return dispatch({
    type: OPEN_SEARCH,
    payload: {
      opened: opened === true ? open() : false
    }
  })
};

export const closeSearch = (closed) => (dispatch) => {  
  const close = () => {
    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')
    
    const inputSearch = document.querySelector('.input__search')
    
    showInput.classList.remove('search__input--open')
    showList.classList.remove('search__list--open')
    blockBody.classList.remove('search__list--body-hidden')
    inputSearch.value = '';

    if(window.screen.width > 1020) {
      let seachListPosition = document.querySelector('.search__list');
      seachListPosition.style.left='100%'
    }
  }
  
  return dispatch({
    type: CLOSE_SEARCH,
    payload: {
      closed: closed === true ? close() : false,
      filteredList: []
    }
  })
};

export const inputSearch = (e, inputValue) => (dispatch, getState) => {
  const products = getState().catalog.products;
  const filterInput = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  )
  
  return dispatch({
    type: INPUT_SEARCH,
    payload: {
      inputValue: inputValue,
      filteredList: inputValue !== '' ? filterInput : ''
    }
  })
};
