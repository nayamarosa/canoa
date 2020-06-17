import React, { useState, useEffect } from 'react';

import '../../components/Card/Card.scss'

import Card from '../../components/Card';

// export default function CardList(props) {
// return <ul className="container card__list">{props.children}</ul>
// }

export default function CardList({products}) {
    return (
        <ul className="container card__list">
            {products.map(product => <Card product={product} key={product.style} />)} 
        </ul>
    )
}
