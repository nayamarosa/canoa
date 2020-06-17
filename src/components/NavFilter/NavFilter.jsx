import React from 'react';

import './NavFilter.scss';

export default function NavFilter(props) {
  return (
    <>
    <nav className="nav-filter">
      <ul className="nav-filter__list">
        <li className="nav-filter__item">
          <a href="/">
            <h2 className="nav-filter__item--active">Coleção nova</h2>
          </a>
        </li>
        <li className="nav-filter__item">
          <a href="/">
            <h2>Promoções</h2>
          </a>
        </li>
      </ul>
    </nav>
    <h3 className="container nav-filter__name">{props.selectedFilterName}</h3>
    </>
  )
}