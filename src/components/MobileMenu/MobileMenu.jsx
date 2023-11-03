import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function MobileMenu({ isOpen, onClose, products }) {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <FontAwesomeIcon icon={faShoppingBag}/>
      </ul>
      
      <div className="mobile-search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm && (
        <div className="product-list-mobile">
          <ul>
            {filteredProducts.map(product => (
            <li key={product.id}>
              <a href={`/product/${product.id}`}>
                {product.title}
              </a>
            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;