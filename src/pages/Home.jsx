import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Header from '../components/Header';
import Brands from '../components/Brands';
import Offers from '../components/Offers';
import Products from '../components/Products';
import NewsLetter from '../components/Offer';

function Home() 
{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try
      {
        const productsData = await fetchProducts(0, 0);
        setProducts(productsData);
      } 
      catch (error) 
      {
        console.log('Something went wrong calling API', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Brands />
      <Offers />
      <Products products={products.products}/>
      <NewsLetter/>
    </div>
  );
}

export default Home;