import React from 'react';

import '../../components/Card/Card.scss';
import Card from '../../components/Card';

const CardList = ({products}) => {
  return (
    <ul className="container card__list">
      {products.map(product => <Card product={product} key={product.code_color}/>)} 
    </ul>
  )
}

export default CardList
