import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // You may need to install the FontAwesome library

function Navbar() {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">E-Commerce Store</a>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="navbar-search">
            <input type="text" placeholder="Search" />
            <button type="submit"><i className="fas fa-search"></i></button>
          </div>

          <div className="navbar-cart">
            <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;