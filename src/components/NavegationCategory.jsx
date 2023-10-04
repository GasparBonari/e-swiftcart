import React, { useState } from 'react';

function NavigationCategory({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  const isCategorySelected = (category) => selectedCategory === category;

  return (
    <div className="navigation">
      <p className={isCategorySelected('smartphones') ? 'selected' : ''} onClick={() => handleCategoryClick('smartphones')}>Smartphones</p>
      <p className={isCategorySelected('laptops') ? 'selected' : ''} onClick={() => handleCategoryClick('laptops')}>Laptops</p>
      <p className={isCategorySelected('furniture') ? 'selected' : ''} onClick={() => handleCategoryClick('furniture')}>Furniture</p>
      <p className={isCategorySelected('fragrances') ? 'selected' : ''} onClick={() => handleCategoryClick('fragrances')}>Fragrances</p>
      <p className={isCategorySelected('skincare') ? 'selected' : ''} onClick={() => handleCategoryClick('skincare')}>Skincare</p>
      <p className={isCategorySelected('groceries') ? 'selected' : ''} onClick={() => handleCategoryClick('groceries')}>Groceries</p>
      <p className={isCategorySelected('home-decoration') ? 'selected' : ''} onClick={() => handleCategoryClick('home-decoration')}>Home Decoration</p>
      <p className={isCategorySelected('womens-dresses') ? 'selected' : ''} onClick={() => handleCategoryClick('womens-dresses')}>Womens Dresses</p>
      <p className={isCategorySelected('tops') ? 'selected' : ''} onClick={() => handleCategoryClick('tops')}>Tops</p>
      <p className={isCategorySelected('womens-shoes') ? 'selected' : ''} onClick={() => handleCategoryClick('womens-shoes')}>Womens Shoes</p>
      <p className={isCategorySelected('womens-watches') ? 'selected' : ''} onClick={() => handleCategoryClick('womens-watches')}>Womens Watches</p>
      <p className={isCategorySelected('womens-bags') ? 'selected' : ''} onClick={() => handleCategoryClick('womens-bags')}>Womens Bags</p>
      <p className={isCategorySelected('womens-jewellery') ? 'selected' : ''} onClick={() => handleCategoryClick('womens-jewellery')}>Womens Jewellery</p>
      <p className={isCategorySelected('mens-shirts') ? 'selected' : ''} onClick={() => handleCategoryClick('mens-shirts')}>Mens Shirts</p>
      <p className={isCategorySelected('mens-shoes') ? 'selected' : ''} onClick={() => handleCategoryClick('mens-shoes')}>Mens Shoes</p>
      <p className={isCategorySelected('mens-watches') ? 'selected' : ''} onClick={() => handleCategoryClick('mens-watches')}>Mens Watches</p>
      <p className={isCategorySelected('sunglasses') ? 'selected' : ''} onClick={() => handleCategoryClick('sunglasses')}>Sunglasses</p>
      <p className={isCategorySelected('automotive') ? 'selected' : ''} onClick={() => handleCategoryClick('automotive')}>Automotive</p>
      <p className={isCategorySelected('motorcycle') ? 'selected' : ''} onClick={() => handleCategoryClick('motorcycle')}>Motorcycle</p>
      <p className={isCategorySelected('lighting') ? 'selected' : ''} onClick={() => handleCategoryClick('lighting')}>Lighting</p>
    </div>
  );
}

export default NavigationCategory;