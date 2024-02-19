import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Header from '../components/Header/Header';
import Brands from '../components/Brands/Brands';
import Offers from '../components/Offers/Offers';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import LimitedOffer from '../components/LimitedOffer/LimitedOffer';
import Features from '../components/Features/Features';
import TestimonialSlider from '../components/Testimonials/Testimonials';

function Home({ addToCart }) 
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
      <LatestProducts products={products} addToCart={addToCart} />
      <LimitedOffer />
      <TestimonialSlider />
      <Features />
    </div>
  );
}

export default Home;