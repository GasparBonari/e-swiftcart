import React from 'react';
import ProductCard from '../../models/ProductCard/ProductCard';


function LatestProducts({ products, addToCart }) {
  if (!products) return <p>Loading...</p>;

  const last12Products = products.slice(5, 17);

  return (
    <>
      <h2 className='second-title'>Latest Products</h2>
      <div className="container">
        {last12Products.map(product => 
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        )}
      </div>
    </>
  );
}

export default LatestProducts;