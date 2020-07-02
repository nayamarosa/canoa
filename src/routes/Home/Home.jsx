import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { fetchCatalog } from '../../actions/catalog';

import Image from '../../components/base/Image';
import NavFilter from '../../containers/NavFilter';
import Loading from '../../components/base/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCatalog())
    }, 1000);
  }, [dispatch])

  const products = useSelector(store => store.catalog.products);

  const loadingFormat = () => {
    if(window.screen.width < 800) {
      return (
        <section className="loading__format-home">
          <div className="loading__format-home-nav"></div>
          <ul className="container loading__format-home-list">
            <li className="loading__format-home-item"></li>
            <li className="loading__format-home-item"></li>
          </ul>
        </section>
      )
    } else {
      return (
        <section className="loading__format-home">
          <div className="loading__format-home-nav"></div>
          <ul className="container loading__format-home-list">
            <li className="loading__format-home-item"></li>
            <li className="loading__format-home-item"></li>
            <li className="loading__format-home-item"></li>
            <li className="loading__format-home-item"></li>
          </ul>
        </section>
      )
    }
  }

  return (
    <>
    {
      window.screen.width < 800 
      ? <Image 
      classNameImage="image__hero"
      src="/main_banner-mobile.jpg"
      alt="Hero Banner"
      />
      : <Image 
      classNameImage="image__hero"
      src="/main_banner-desktop.jpg"
      alt="Hero Banner"
      />
    }
    {
      products === "Not found"
      ? <Loading format={loadingFormat()}/>
      : <NavFilter products={products} />
    }
    </>
  );
}

const mapStateToProps = (state)=>{
  return {
      products: state.products
        }
  }

export default connect(mapStateToProps)(Home)