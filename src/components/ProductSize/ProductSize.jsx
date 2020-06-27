import React from 'react';

import './ProductSize.scss';

import Input from '../base/Input';

export default function ProductSize({props}) {
  // console.log(props)
  return (
    <div className="product-size">
      <h5>Escolha o tamanho</h5>
      <form className="product-size__group">
        {
        props !== undefined
        ? props.map(sizeInfo => <Input info={sizeInfo} key={sizeInfo.sku}
          classNameInputGroup="input__size-position"
          classNameLabel={sizeInfo.available === false ? "input__size-label-notAvailable" : "input__size-label"}          
          label={sizeInfo.size}
          classNameInput={props.classNameInput}
          type={props.type}
          id={sizeInfo.size}
          name="size"
          value={sizeInfo.size}
        />)
      : false
      }
      </form>
    </div>
  )
}