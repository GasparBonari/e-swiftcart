// Products.jsx
import React, { useEffect, useState } from 'react';
import ProductSlider from '../models/ProductSlider';
import { fetchProducts } from '../api';
import Navigation from '../components/NavegationCategory';
import '../styles/productsPage.css';
import { FaCartPlus } from 'react-icons/fa';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('smartphones'); // Set default category to 'smartphones'

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryToFetch = selectedCategory;
        const limit = 0; // Set your desired limit
        const productsData = await fetchProducts(limit, 0, categoryToFetch);
        setProducts(productsData.products);
      } catch (error) {
        console.error('Something went wrong calling API', error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const filterProductsByCategory = () => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  return (
    <div className="flex-container">
      <div className="navigation-container">
        <Navigation onSelectCategory={setSelectedCategory} />
      </div>
      <div className="container-products">
        {filterProductsByCategory().map((product) => (
          <div key={product.id} className="product-slider">
            <div className="circle-button">
              <FaCartPlus className="cart-icon" />
            </div>
            
            <ProductSlider images={product.images} />
            <div className="product-details">
              <p className="product-price">${product.price}</p>
              <h3 className="product-title">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;