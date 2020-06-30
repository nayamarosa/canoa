import React from 'react';

import Input from '../base/Input';

const ProductSize = (props) => {
  return (
    <div className="product-size">
      <h5>Escolha o tamanho</h5>
      {/* <p className="product-size-needed">* Por favor selecione um tamanho</p> */}
      <form className="product-size__group">
      {
        props.productSizes !== undefined 
        ? props.productSizes.map(sizeInfo => <Input 
          info={sizeInfo} 
          key={sizeInfo.sku}
          classNameInputGroup="input__size-position"
          classNameLabel={sizeInfo.available === false 
            ? "input__size-label input__size-label--not-available" 
            : "input__size-label"}          
          label={sizeInfo.size}
          classNameInput={props.classNameInput}
          type={props.type}
          id={sizeInfo.size}
          name="size"
          value={sizeInfo.size}
          disabled={sizeInfo.available === false ? true : false}
          onClick={props.onClick}
          />)
          : false
        }
      </form>
    </div>
  )
}

export default ProductSize;