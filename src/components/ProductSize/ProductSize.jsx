import React from 'react';

import './ProductSize.scss';

import Input from '../base/Input';

export default function ProductSize(props) {
  return (
    <div className="product-size">
      <h5>Escolha o tamanho</h5>
      <form className="product-size__group">
        <Input 
          classNameLabel="input__size-label"
          label="PP"
          classNameInput={props.classNameInput}
          type={props.type}
          id="PP"
          name="size"
          value="PP"
        />
        <Input 
          classNameLabel="input__size-label"
          label="P"

          classNameInput={props.classNameInput}
          type={props.type}
          id="P"
          name="size"
          value="P"
        />
        <Input
          classNameLabel="input__size-label"
          label="M"

          classNameInput={props.classNameInput}
          type={props.type}
          id="M"
          name="size"
          value="M"
        />
        <Input 
          classNameInputGroup="input__size-position"
          classNameLabel="input__size-label"
          label="G"

          classNameInput={props.classNameInput}
          type={props.type}
          id="G"
          name="size"
          value="G"
        />

        <Input 
          classNameLabel="input__size-label"
          label="GG"

          classNameInput={props.classNameInput}
          type={props.type}
          id="GG"
          name="size"
          value="GG"
        />
      </form>
    </div>
  )
}