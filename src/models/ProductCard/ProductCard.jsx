import React from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { FaCartPlus } from 'react-icons/fa';
import '../../styles/productCard.css';

function ProductCard({ product }) {
  return (
    <div className="card" key={product.id}>
      <div className="imgBx">
        <ProductSlider images={product.images} />
      </div>

      <div className="contentBx">
        <h2>{product.title}</h2>
        <div className="size">${product.price}</div>
        <FaCartPlus className="cart-icon" />
      </div>
    </div>
  );
}

export default ProductCard;