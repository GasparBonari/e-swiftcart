import React from 'react';
import { Link } from 'react-router-dom';
import './limitedOffer.css';

// Define your component
function LimitedOffer() {

  const handleProductPage = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="ImageBackgroundWrap background-fixed">
      <div className="ImageInnerWrap">
        <div className="TextBackground">
          <div>
            <h2>Limited Time Offer</h2>
          </div>
          <div>
            <p>Special Edition</p>
          </div>
          <div>
            <h3>Buy These Products At 20% Discount, Use Code OFF20</h3>
            <Link to="/products">
              <button className='btn-3d' onClick={handleProductPage}>Show Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitedOffer;