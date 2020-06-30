import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCatalog } from '../../actions/catalog';

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';

const Home = () => {
  
  const dispatch = useDispatch()
  // useEffect(() => async () => {
  //   await dispatch(fetchCatalog())
  // }, [dispatch])

  useEffect(() => () => {
    setTimeout(() => dispatch(fetchCatalog()), 1000)    
  }, [dispatch])

  const products = useSelector(store => store.catalog.products);

  return (
    <>
    {
      window.screen.width < 800 
      ? <Banner 
      classNameBanner="banner__hero"
      src="/main_banner-mobile.jpg"
      alt="Hero Banner"
      />
      : <Banner 
      classNameBanner="banner__hero"
      src="/main_banner-desktop.jpg"
      alt="Hero Banner"
      />
    }
      <NavFilter products={products} />
    </>
  );
}

export default Home;