import React, { useEffect, useState } from 'react';
import ProductCard from '../models/ProductCard/ProductCard';
import { fetchProducts } from '../api';
import NavegationCategory from '../components/NavegationCategory/NavegationCategory';
import SortProducts from '../components/SortProducts/SortProducts';
import '../styles/productsPage.css';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('smartphones');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryToFetch = selectedCategory;
        const limit = 0;
        const productsData = await fetchProducts(limit, 0, categoryToFetch);
        setProducts(productsData.products);
      } catch (error) {
        console.error('Something went wrong calling API', error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 1.5;

      document.querySelector('.products-image').style.backgroundPositionY = `-${parallaxValue}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSortChange = (option) => {
    if (option === sortOption) {
    } else {
      setSortOption(option);
    }
  };

  const sortedProducts = () => {
    const sorted = [...filterProductsByCategory()];

    switch (sortOption) {
      case 'default':
        return sorted;
      case 'higherPrice':
        return sorted.sort((a, b) => b.price - a.price);
      case 'lowerPrice':
        return sorted.sort((a, b) => a.price - b.price);
      default:
        return sorted;
    }
  };

  const filterProductsByCategory = () => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  return (
    <>
      <div className="products-image">
        <div className="animation-text">
          <h4>Our products</h4>
        </div>
      </div>

      <div className="flex-container">
        <div className="navigation-container">
          <NavegationCategory onSelectCategory={setSelectedCategory} />
        </div>
        <div className='list-products'>
          <SortProducts sortOption={sortOption} onSortChange={handleSortChange} />

          <div className="container">
            {sortedProducts().map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;