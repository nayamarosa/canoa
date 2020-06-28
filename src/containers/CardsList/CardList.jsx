import React from 'react';
import { useHistory } from "react-router-dom";

import '../../components/Card/Card.scss';
import Card from '../../components/Card';

const CardList = ({products}) => {
  let history = useHistory();
  const handleProductCode = (e, code) => {
    e.preventDefault()
    history.push('/produto/' + code);
  }

  return (
    <ul className="container card__list">
      {products.map(product => 
        product.id !== "NaN" 
        ? <Card product={product} 
        key={product.code_color} 
        onClick={(e) => handleProductCode(e, product.code_color)}/>
      : false 
      )} 
    </ul>
  )
}

export default CardList
