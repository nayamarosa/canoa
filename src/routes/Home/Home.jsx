import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { fetchCatalog } from '../../actions/catalog';

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';

const Home = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCatalog())
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

const mapStateToProps = (state)=>{
  return {
      products: state.products
        }
  }



export default connect(mapStateToProps)(Home)