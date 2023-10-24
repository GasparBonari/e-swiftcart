import React from 'react';
import './footer.css'
import Logo from '../../images/logo.png';

function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="logo">
            <img href="/home" src={Logo}></img>
          <h2>Everything you want anytime, anywhere.</h2>
        </div>
      </div>
      <div className="footer-row">
        <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="footer-row">
        <div className="subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;