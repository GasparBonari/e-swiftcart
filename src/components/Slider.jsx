import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';

function Slider() {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  console.log(products)

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log("Something went wrong calling API", error);
      }
    }

    fetchData();
  }, []);

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <h1>Product List</h1>
      <div className="slider">
        {products.length > 0 && (
          <>
            <button onClick={prevProduct} className="slider-button">
              &lt; Previous
            </button>
            <div className="slide">
              <img src={products[currentProductIndex].image} alt={products[currentProductIndex].title} />
              <p>{products[currentProductIndex].title}</p>
            </div>
            <button onClick={nextProduct} className="slider-button">
              Next &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Slider;