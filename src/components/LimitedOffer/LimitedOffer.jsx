import React from 'react';
import './limitedOffer.css';

// Define your component
function LimitedOffer() {
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
            <h3>Buy These products At 20% Discount, Use Code OFF20</h3>
            <button>Show Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitedOffer;