import React from 'react';
import '../styles/header.css';

function Header()
{
  return (
    <header className="header-container background-fixed">

      <div id="background-wrap">
          <div className="x1">
            <div className="cloud"></div>
          </div>

          <div className="x2">
            <div className="cloud"></div>
          </div>

          <div className="x3">
            <div className="cloud"></div>
          </div>

          <div className="x4">
            <div className="cloud"></div>
          </div>

          <div className="x5">
            <div className="cloud"></div>
          </div>
      </div>

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