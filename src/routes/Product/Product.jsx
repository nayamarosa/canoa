import React, { useState, useEffect, useContext } from 'react';
import { useLocation} from "react-router-dom";

import { ProductsContext } from '../../containers/context';

import ProductGroup from '../../containers/ProductGroup';

export default function Product() {
  const products = useContext(ProductsContext);
  const [filteredProductSelected, setFilteredProductSelected] = useState([]);

  let location = useLocation();
  let pathname = location.pathname;
  let productCode = pathname.split("/")[2]
  useEffect(() => {
    const filter = products.filter((product) => product.code_color.includes(productCode));
  
    setFilteredProductSelected(filter)     
  }, [location.pathname, products])


  return (
    <ProductGroup productSelected={filteredProductSelected} /> 
    );
  }  