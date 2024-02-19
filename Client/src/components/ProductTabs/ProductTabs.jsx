import React from 'react';

const ProductTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="product-tabs">
      <button onClick={() => setActiveTab('additionalInfo')} className={activeTab === 'additionalInfo' ? 'active' : ''}>
        Additional Information
      </button>

      <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'active' : ''}>
        Description
      </button>
      
      <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>
        Reviews(2)
      </button>
    </div>
  );
};

export default ProductTabs;
