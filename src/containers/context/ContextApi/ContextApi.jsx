import React, { useState, useEffect } from 'react';

import ProductsContext from './'

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((res) => res.json())
        .then(data => setProducts(data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;