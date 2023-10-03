import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Header from '../components/Header';
import Brands from '../components/Brands';
import Offers from '../components/Offers';
import LatestProducts from '../components/LatestProducts';
import LimitedOffer from '../components/LimitedOffer';
import Features from '../components/Features';

function Home() 
{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try
      {
        const productsData = await fetchProducts(0, 0);
        setProducts(productsData.products);
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
      <LatestProducts products={products} />
      <LimitedOffer />
      <Features />
    </div>
  );
}

export default Home;