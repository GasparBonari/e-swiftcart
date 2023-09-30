import React from 'react';
import '../styles/header.css';

function Header()
{
  return (
    <header className="header-container background-fixed">
      <div className="header-content">
        <h1>SwiftCart</h1>
        <p className="header-p">The web to find any product you want</p>
        <div className="button-container">
          <button>Find Out</button>
          <button>About Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;