import React from 'react';
import ProductCard from '../models/ProductCard';


function LatestProducts({ products }) {
  if (!products) return <p>Loading...</p>;

  const last12Products = products.slice(5, 17);

  return (
    <>
      <h2>Latest Products</h2>
      <div className="container">
        {last12Products.map(product => 
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </>
  );
}

export default LatestProducts;