import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import Header from '../components/Header';

const HeaderTest = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
    )
  }
  
  test('render component header', () => {
    const { getByTestId , debug} = render(HeaderTest());
    debug()
    expect(getByTestId('header')).toBeInTheDocument()
  })
  
  test('nome da marca', () => {
    const { queryByText } = render(HeaderTest());
    expect(queryByText('CANOÁ')).toBeInTheDocument()
  })

  test('render component search', () => {
    const { getByTestId , debug} = render(HeaderTest());
    debug()
    expect(getByTestId('search-list')).toBeInTheDocument()
  })
  
  test('busca aberta', () => {
    const { queryByText } = render(HeaderTest());
    const open = queryByText('o que você procura?');
    fireEvent.click(open)
    expect(queryByText('Resultados da busca')).toBeInTheDocument()
  })
  
  // test('fechar busca', () => {
  //   const { queryByText } = render(HeaderTest());
  //   const close = queryByText('Digite o que você procura');
  //   fireEvent.click(close)
  //   expect(queryByText('Resultados da busca')).toBeInTheDocument()
  // })