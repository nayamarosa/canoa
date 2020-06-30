import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../actions/shoppingCart';

import Banner from '../../components/base/Banner';
import ProductInfo from '../../components/ProductInfo';
import ProductSize from '../../components/ProductSize';
import Button from '../../components/base/Button';

export default function ProductItem({productSelected}){
  const [productDetail, setProductDetail] = useState({});
  const [chosenSize, setChosenSize] = useState('');
  let history = useHistory();
  const dispatch = useDispatch();
  
  const handleProductCode = (e, code) => {
    e.preventDefault()
    if (chosenSize !== '') {
      history.push('/carrinho-de-compras')
      dispatch(addProductToCart(productDetail, chosenSize));
    } else {
      alert("escolha um tamanho")
    }
  }

  const handleProductSize = (e) => {
    setChosenSize(e.target.value)
  }

  useEffect(() => {
    let productDetail = productSelected[0];
    setProductDetail(productDetail)
  }, [productSelected])

  return (    
    <>
    {
      productDetail !== undefined
      ? <section className="container product">
        <Banner
          classNameBanner="banner__product"
          src={productDetail.image}
          alt={productDetail.name}
          classNameDiscount="banner__product--discount banner__product--discount-bigger"
          percent={productDetail.discount_percentage}
        />
        <div className="product-info">
          <div>
            <ProductInfo
              classNamePriceGroup="product-info__price-group--bigger"
              classNamePrice="product-info__price--bigger"
              classNameOldPrice="product-info__price--bigger--old"
              classNameNewPrice="product-info__price--bigger--new"
              productName={productDetail.name}
              oldPriceText="De"
              oldPriceValue={productDetail.regular_price}
              priceValue={productDetail.actual_price}
              installmentsText="Em até"
              installments={productDetail.installments}
            />
            <ProductSize 
              classNameInput="input__size"
              type="radio"
              productSizes={productDetail.sizes}
              onClick={(e) => handleProductSize(e)}
            />
          </div>
          <Button 
            type="submit"
            classNameBtn="btn__secondary"
            text="Adicionar ao carrinho"
            icon="fas fa-shopping-cart"
            onClick={(e) => handleProductCode(e)}
          />
        </div>
      </section>
      : false
    }
    </>
  )
}