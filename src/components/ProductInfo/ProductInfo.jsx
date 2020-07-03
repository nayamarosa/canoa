import React from 'react';

const ProductInfo = (props) => {
  return (
    <>
    <div className={`product-info__price-group ${props.classNamePriceGroup}`}>
      <h4>{props.productName}</h4>
        <div className={`product-info__price ${props.classNamePrice}`}>
        { props.oldPriceValue === props.priceValue
        ? ''
        : <p>
            {props.oldPriceText} <span className={`product-info__price--old ${props.classNameOldPrice}`}>{props.oldPriceValue}</span>
          </p>
        }
          <p>
            Por <span className={`product-info__price--new ${props.classNameNewPrice}`}>{props.priceValue}</span>
          </p>
          <p>
            {props.installmentsText} <span>{props.installments}</span>
          </p>
        </div>
    </div>
    </>
    )
  }

export default ProductInfo;