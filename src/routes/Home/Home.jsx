import React, { useContext } from 'react';

import { ProductsContext } from '../../containers/context'

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';

export default function Home() {
  const products = useContext(ProductsContext)

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
