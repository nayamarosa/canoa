import React, { useState, useEffect } from 'react';
import { useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../actions/catalog';

import ProductGroup from '../../containers/ProductGroup';

export default function Product() {
  const products = useSelector(store => store.catalog.products);
  const [filteredProductSelected, setFilteredProductSelected] = useState([]);

  let location = useLocation();
  useEffect(() => {
    let pathname = location.pathname;
    let productCode = pathname.split("/")[2]
    const filter = products.filter((product) => product.code_color.includes(productCode));
  
    setFilteredProductSelected(filter)     
  }, [location.pathname, products])

  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProducts())
  }, [dispatch])

   return (
    <ProductGroup productSelected={filteredProductSelected} /> 
    );
  }  