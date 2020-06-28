export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const DO_SEARCH = 'DO_SEARCH';

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
  }
  
  return dispatch({
    type: OPEN_SEARCH,
    payload: {
      opened: opened === true ? open() : false
    }
  })
};

export const closeSearch = (closed) => dispatch => {
  const close = () => {
    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')
    
    const inputSearch = document.querySelector('.input__search')
    
    showInput.classList.remove('search__input--open')
    showList.classList.remove('search__list--open')
    blockBody.classList.remove('search__list--body-hidden')
    inputSearch.value = '';
  }
  
  return dispatch({
    type: CLOSE_SEARCH,
    payload: {
      closed: closed === true ? close() : false
    }
  })
};