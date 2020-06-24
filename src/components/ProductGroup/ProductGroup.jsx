import React from 'react';
import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';
import ProductSize from '../ProductSize';

// export default function ProductGroup({props}){
//   return <section className="container">{props.children}</section>
// }

export default function ProductGroup({product}){
  return (
    <section className="container">
      {/* {products.map(product => <ProductInfo product={product} 
       key={product.code_color}/>
      )} */}

      <Banner
       classNameBanner="banner__product"
       src={product.image}
       alt={product.name}
       classNameDiscount="banner__product--discount banner__product--discount-bigger"
       percent={product.discount_percentage}
      />
      <ProductInfo
        classNamePriceGroup="product-info__price-group--bigger"
        classNamePrice="product-info__price--bigger"
        classNameOldPrice="product-info__price--bigger--old"
        classNameNewPrice="product-info__price--bigger--new"
        productName={product.name}
        oldPriceText="De"
        oldPriceValue={product.regular_price}
        priceValue={product.actual_price}
        installmentsText="Em até"
        installments="3x de R$ 33,33"
      />
      <ProductSize 
        classNameInput="input__size"
        type="radio"
      />

    </section>
  )
}