import React from 'react';
import '../styles/header.css';
import headerImage from '../images/header.jpg';

function Header()
{
  return (
    <header className="header-container">
      <img src={headerImage} alt="Header Image" className="header-image" />
      <div className="header-content">
        <h1>SwiftCart</h1>
        <p>The web to find any product you want</p>
        <div className="button-container">
          <button>Find Out</button>
          <button>About Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;