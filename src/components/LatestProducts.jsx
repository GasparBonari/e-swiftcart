import React from 'react';
import ProductSlider from '../models/ProductSlider';
import { FaCartPlus } from 'react-icons/fa';


function LatestProducts({ products }) {
  if (!products) return <p>Loading...</p>;

  const last12Products = products.slice(5, 17);

  return (
    <>
      <h2>Latest Products</h2>
      <div className="product-slider-container">
        {last12Products.map((product) => (
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
    </>
  );
}

export default LatestProducts;