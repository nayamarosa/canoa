import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCatalog } from '../../actions/catalog';

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';
import Loading from '../../components/base/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => () => {
    dispatch(fetchCatalog())
  }, [dispatch])

  // useEffect(() => () => {
  //   setTimeout(() => dispatch(fetchCatalog()), 1000)    
  // }, [dispatch])

  const products = useSelector(store => store.catalog.products);
  console.log(products)

  const loadingFormat = <section className="loading__format-home">
    <div className="loading__format-home-nav">
      <ul className="container loading__format-home-list">
        <li className="loading__format-home-item"></li>
        <li className="loading__format-home-item"></li>
        <li className="loading__format-home-item"></li>
        <li className="loading__format-home-item"></li>
      </ul>
    </div>
  </section>

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
    {
      products.length === 0
      ? <Loading format={loadingFormat}/>
      : <NavFilter products={products} />
    }
    </>
  );
}

export default Home;
