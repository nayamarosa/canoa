import React, { useContext } from 'react';

import { ProductsContext } from '../../containers/context';

// import ProductGroup from '../../containers/ProductGroup';

export default function ShoppingCart() {
  const products = useContext(ProductsContext);

  return (
    <>
    <div>Aqui vai o carrinho</div>
    {/* <ProductGroup products={products} />  */}
    </>
    );
  }  