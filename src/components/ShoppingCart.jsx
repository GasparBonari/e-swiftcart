import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/shoppingCart.css';

const ShoppingCart = ({ cartItems, toggleShoppingCart }) => {
  return (
    <div className="shopping-cart-overlay">
      <div className="shopping-cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <FontAwesomeIcon icon={faTimes} onClick={toggleShoppingCart} className="close-icon" />
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="cart-footer">
          {/* Add additional cart summary information if needed */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
