import React, { useEffect, useState } from 'react';
import Products from '../components/Slider';
import { fetchProducts } from '../api';
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
      <h1>Welcome to E-SwitfCart</h1>
      <Products />
    </div>
  );
}

export default Home;