import React from 'react';
import '../styles/offers.css';
import offer1 from '../images/offer1.png';
import offer2 from '../images/offer2.png';
import offer3 from '../images/offer3.png';

function Offers() {
  return (
    <div className="image-container">
      <div className="image-item">
        <div className="image-overlay">
          <img src={offer1} className="image" alt="Offer 1" />
          <p className="overlay-text">Check our best sellers</p>
        </div>
      </div>

      <div className="image-item">
        <div className="image-overlay">
          <img src={offer2} className="image" alt="Offer 2" />
          <p className="overlay-text">20% off in our products</p>
        </div>
      </div>

      <div className="image-item">
        <div className="image-overlay">
          <img src={offer3} className="image" alt="Offer 3" />
          <p className="overlay-text">Subscribe to our newsletter</p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
