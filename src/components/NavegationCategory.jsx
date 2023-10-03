import React from 'react';

function NavigationCategory({ onSelectCategory }) {
  return (
    <div className="navigation">
      <p onClick={() => onSelectCategory('smartphones')}>Smartphones</p>
      <p onClick={() => onSelectCategory('laptops')}>Laptops</p>
      <p onClick={() => onSelectCategory('furniture')}>Furniture</p>
      <p onClick={() => onSelectCategory('fragrances')}>Fragrances</p>
      <p onClick={() => onSelectCategory('skincare')}>Skincare</p>
      <p onClick={() => onSelectCategory('groceries')}>Groceries</p>
      <p onClick={() => onSelectCategory('home-decoration')}>Home Decoration</p>
      <p onClick={() => onSelectCategory('groceries')}>Groceries</p>
      <p onClick={() => onSelectCategory('womens-dresses')}>Womens Dresses</p>
      <p onClick={() => onSelectCategory('tops')}>Womens Tops</p>
      <p onClick={() => onSelectCategory('womens-shoes')}>Womens Shoes</p>
      <p onClick={() => onSelectCategory('womens-watches')}>Womens Watches</p>
      <p onClick={() => onSelectCategory('womens-bags')}>Womens Bags</p>
      <p onClick={() => onSelectCategory('womens-jewellery')}>Womens Jewellery</p>
      <p onClick={() => onSelectCategory('mens-shirts')}>Mens Shirts</p>
      <p onClick={() => onSelectCategory('mens-shoes')}>Mens Shoes</p>
      <p onClick={() => onSelectCategory('mens-watches')}>Mens Watches</p>
      <p onClick={() => onSelectCategory('sunglasses')}>Sunglasses</p>
      <p onClick={() => onSelectCategory('automotive')}>Automotive</p>
      <p onClick={() => onSelectCategory('motorcycle')}>Motorcycle</p>
      <p onClick={() => onSelectCategory('lighting')}>Lighting</p>
    </div>
  );
}

export default NavigationCategory;