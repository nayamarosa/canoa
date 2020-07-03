import React from 'react';
import { useHistory } from "react-router-dom";

import CardItem from '../../components/CardItem';

const CardList = ({products}) => {
  let history = useHistory();
  const handleProductCode = (e, code) => {
    e.preventDefault()
    history.push('/produto/' + code);
  }
  
  return (
    <ul className="container card__list">
      {products.map(product => <CardItem product={product} 
        key={product.code_color} 
        onClick={(e) => handleProductCode(e, product.code_color)}/>
      )} 
    </ul>
  )
}

export default CardList
