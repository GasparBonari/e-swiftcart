import React from 'react';
import '../styles/header.css';

function Header()
{
  return (
    <header className="header-container background-fixed">

<div id="background-wrap">
    <div class="x1">
        <div class="cloud"></div>
    </div>

    <div class="x2">
        <div class="cloud"></div>
    </div>

    <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>

    <div class="x5">
        <div class="cloud"></div>
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