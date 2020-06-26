import React from 'react';
import ProductItem from '../../components/ProductItem';


export default function ProductGroup({products}){
  return (
    <section className="container">
      { products.map(product => product.code_color === "20002605_613" 
      ? <ProductItem product={product} key={product.code_color}/> 
      : false
      )}
    </section>
  )
}