import React, { useState } from 'react';

import './NavFilter.scss';

const NavFilter = (props) => {
  const [active, setActive] = useState(null);

  const handleActiveFilter = (e) => {
    e.preventDefault();
    let activeFilter = e.target;
    let activeFilterText = activeFilter.textContent;
    let filterText = document.querySelector('.nav-filter__name');
    filterText.innerHTML = activeFilterText

    activeFilter.classList.add("nav-filter__item--active");
    setActive(e.target);

    if (active !== e.target) {
      setActive(e.target);
    }
    if (active) {
      active.classList.remove("nav-filter__item--active");
    }
  }

  return (
    <>
    <nav className="nav-filter">
      <ul className="nav-filter__list">
        <li className="nav-filter__item">
          <a href="/" onClick={(e) => handleActiveFilter(e)}>
            <h2>Coleção nova</h2>
          </a>
        </li>
        <li className="nav-filter__item">
          <a href="/" onClick={(e) => handleActiveFilter(e)}>
            <h2>Promoções</h2>
          </a>
        </li>
      </ul>
    </nav>
    <h3 className="container nav-filter__name">&ensp;</h3>
    </>
  )
}

export default NavFilter;