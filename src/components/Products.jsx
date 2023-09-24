import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';

function Products() {
  const [products, setProducts] = useState([]);

  console.log(products)

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
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Products;