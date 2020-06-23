import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

import Routes from '../../routes';
import './App.scss';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;

<!-- function App() {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => res.json())
      .then(data => {
        setProducts(data);
        setProductsFilter(data);
      });
  }, []);

  return (
    <>
      <Header products={productsFilter}/>
      <Banner 
        classNameBanner="banner__hero"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter />
      <CardList products={products}>
      </CardList>
    </>
    );
  }
  
  export default App; -->
