import React from 'react';

import '../../components/Card/Card.scss'

export default function CardList(props) {
return <ul className="card__list">{props.children}</ul>
}