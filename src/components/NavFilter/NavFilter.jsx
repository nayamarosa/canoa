import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './NavFilter.scss';

import CardList from '../../containers/CardsList'

const NavFilter = ({products}) => {
  const [active, setActive] = useState('');
  const [productSaleList, setproductSaleList] = useState([]);

  useEffect(() => {
    let saleList = products.filter(product =>  
      product.on_sale
    )
    setproductSaleList(saleList)
  }, [products])

  const handleActiveFilter = (e) => {
    e.preventDefault();
    let activeFilter = e.target;
    let activeFilterText = activeFilter.textContent;
    let filterText = document.querySelector('.nav-filter__name');
    filterText.innerHTML = activeFilterText
    
    setActive(activeFilterText);
  }

  return (
    <>
    <nav className="nav-filter">
      <ul className="nav-filter__list">
        <li className="nav-filter__item">
          <Link to="/" onClick={(e) => handleActiveFilter(e)}>
            <h2 className={'nav-filter__item--active' && active === 'Promoções' ? '' : 'nav-filter__item--active'}>Coleção nova</h2>
          </Link>
        </li>
        <li className="nav-filter__item">
          <Link to="/" onClick={(e) => handleActiveFilter(e)}>
            <h2 className={active === 'Promoções' ? 'nav-filter__item--active' : ''}>Promoções</h2>
          </Link>
        </li>
      </ul>
    </nav>
    <h3 className="container nav-filter__name">Coleção nova</h3>
    { 
    active !== '' && active === 'Promoções'
    ? <CardList products={productSaleList}/> 
    : <CardList products={products}/>
    }
    </>
  )
}

export default NavFilter;