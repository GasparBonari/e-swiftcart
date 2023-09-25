import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
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
      <Header />
    </div>
  );
}

export default Home;