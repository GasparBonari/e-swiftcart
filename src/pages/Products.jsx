import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import '../styles/productsPage.css';

function Products() 
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

  console.log(products)


  return (
    <></>
  );
}

export default Products;