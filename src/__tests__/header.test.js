import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';

import Header from '../containers/Header';

import products from './mocks/products.json'

const HeaderTest = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

const handleClickToCart = (e, code) => {
  history.push('/carrinho-de-compras');
}
  
  //testes header
  test('render component header', () => {
    const { getByTestId } = render(HeaderTest());
    expect(getByTestId('header')).toBeInTheDocument()
  })
  
  test('nome da marca', () => {
    const { queryByText } = render(HeaderTest());
    expect(queryByText('CANOÁ')).toBeInTheDocument()
  })
  
  // test('redireciona para o carrinho', () => {
  //   const { queryByText } = render(HeaderTest());
  //   const cart = queryByText('Carrinho');
  //   fireEvent.click(cart)
  //   expect(handleClickToCart().toHaveBeenCalledWith('/carrinho-de-compras'))
  // })
  
  //testes busca
  test('render component search', () => {
    const { getByTestId } = render(HeaderTest());
    expect(getByTestId('search-list')).toBeInTheDocument()
  })
  
  test('busca aberta', () => {
    const { queryByText, queryByPlaceholderText } = render(HeaderTest());
    const open = queryByText('Abrir busca');
    fireEvent.click(open)
    expect(queryByPlaceholderText('o que você procura?')).toBeInTheDocument()
  })
  
  // test('busca fechada', () => {
  //   const { queryByText, queryByPlaceholderText } = render(HeaderTest());
  //   const close = queryByText('Fechar busca');
  //   fireEvent.click(close)
  //   expect(queryByPlaceholderText('o que você procura?')).not.toBeInTheDocument()
  // })
  
  // test('faz busca', () => {
  //   const { queryByText , queryByPlaceholderText } = render(HeaderTest());
  //   const placeholder = queryByPlaceholderText('o que você procura?');
  //   fireEvent.change(placeholder, { target: { value: 'vestido' } })
  //   //faz a funcão
  //   expect(queryByText(placeholder.value)).toBe('VESTIDO TRANSPASSE BOW')
  // })