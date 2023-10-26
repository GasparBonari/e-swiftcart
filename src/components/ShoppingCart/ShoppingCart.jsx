import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './shoppingCart.css';

const ShoppingCart = ({ cartItems, toggleShoppingCart, deleteFromCart }) => {
  return (
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
              <li key={index} className="cart-item-container">
                <div className="cart-item">
                  <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">${item.price}</span>
                  {item.quantity > 1 && <span className="cart-item-quantity">Qty: {item.quantity}</span>}
                </div>
                <div className="delete-button-container">
                  <button className="delete-button" onClick={() => deleteFromCart(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-footer">
        {/* Add additional cart summary information if needed */}
      </div>
    </div>
  );
};

export default ShoppingCart;
