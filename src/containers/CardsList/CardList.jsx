import React from 'react';

import '../../components/Card/Card.scss'

export default function CardList(props) {
return <ul className="container card__list">{props.children}</ul>
}