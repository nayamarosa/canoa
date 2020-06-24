import React from 'react';
import ProductItem from '../../components/ProductItem';

// export default function ProductGroup({props}){
//   return <section className="container">{props.children}</section>
// }

export default function ProductGroup({products}){
  return (
    <section className="container">
      {products.map(product => <ProductItem product={product} 
       key={product.code_color}/>
      )}
    </section>
  )
}