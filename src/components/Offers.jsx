import React from 'react';
import '../styles/offers.css';

function Offers({products})
{
    return (
      <div className="offers-container">
        <h2>Offers</h2>
        <div className="image-container">
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="image-item">
              <img src={product.image} alt={product.title} className="image" />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
};
  
export default Offers;