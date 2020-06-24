import React, { useState, useEffect } from 'react';

// import Button from '../../components/base/Button';
// import Banner from '../../components/base/Banner';
// import ProductInfo from '../../components/ProductInfo';
// import ProductSize from '../../components/ProductSize';

import ProductGroup from '../../containers/ProductGroup';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
    <ProductGroup products={products} /> 
    </>
    );
  }
  
  export default Product;
  