import React from 'react';
import headerImage from '../images/header.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SwiftCart</h1>
        <p>The web to find any product you want</p>
        <div className="button-container">
          <button>Find Out</button>
          <button>About Us</button>
        </div>
      </div>
      <img
        src={headerImage}
        alt="Header Image"
        className="header-image"
      />
    </header>
  );
};

export default Header;