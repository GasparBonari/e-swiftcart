import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <FontAwesomeIcon icon={faShoppingBag}/>
      
      <div className="mobile-search">
        <input type="text" placeholder="Search" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>
    </div>
  );
}

export default MobileMenu;