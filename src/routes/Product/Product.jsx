import React, { useContext } from 'react';

import { ProductsContext } from '../../containers/context';

import ProductGroup from '../../containers/ProductGroup';

export default function Product() {
  const products = useContext(ProductsContext);

  return (
    <>
    <ProductGroup products={products} /> 
    </>
    );
  }  