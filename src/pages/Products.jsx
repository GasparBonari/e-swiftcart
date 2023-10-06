import React, { useEffect, useState } from 'react';
import ProductSlider from '../models/ProductSlider';
import { fetchProducts } from '../api';
import NavegationCategory from '../components/NavegationCategory';
import SortProducts from '../components/SortProducts';
import '../styles/productsPage.css';
import { FaCartPlus } from 'react-icons/fa';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('smartphones');
  const [sortOption, setSortOption] = useState('default');
  const [sortOrder, setSortOrder] = useState(1);

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

  const handleSortChange = (option) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      setSortOption(option);
      setSortOrder(1);
    }
  };

  const sortedProducts = () => {
    const sorted = [...filterProductsByCategory()];

    switch (sortOption) {
      case 'default':
        return sorted;
      case 'higherPrice':
        return sorted.sort((a, b) => (b.price - a.price) * sortOrder);
      case 'lowerPrice':
        return sorted.sort((a, b) => (a.price - b.price) * sortOrder);
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
    <div className="flex-container">
      <div className="navigation-container">
        <NavegationCategory onSelectCategory={setSelectedCategory} />
      </div>
      <div className='try'>
        <SortProducts sortOption={sortOption} sortOrder={sortOrder} onSortChange={handleSortChange} />

        <div className="container-products">

          {sortedProducts().map((product) => (
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
    </div>
  );
}

export default Products;