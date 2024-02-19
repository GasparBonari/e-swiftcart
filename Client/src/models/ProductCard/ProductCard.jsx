import React from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { FaCartPlus } from 'react-icons/fa';
import '../../styles/productCard.css';

function ProductCard({ product, addToCart }) {

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      images: product.images,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="card" key={product.id}>
      <div className="imgBx">
        <ProductSlider images={product.images} />
      </div>

      <div className="contentBx">
        <h2>{product.title}</h2>
        <div className="price">${product.price}</div>
        <button className='btn-3d cart-icon' onClick={handleAddToCart}><FaCartPlus /></button>
      </div>
    </div>
  );
}

export default ProductCard;