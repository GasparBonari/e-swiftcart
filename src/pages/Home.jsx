import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchProducts } from '../api';
import Brands from '../components/Brands';
import Offers from '../components/Offers';

function Home() {
  const [products, setProducts] = useState([]);

    useEffect(() => 
    {
        async function fetchData() {
        try {
            const productsData = await fetchProducts();
            setProducts(productsData);
        } catch (error) {
            console.log("Something went wrong calling API", error)
        }
        }
        fetchData();
    }, []);

  return (
    <div>
      <Header />
      <Brands />
      {/* <Offers /> */}
    </div>
  );
}

export default Home;