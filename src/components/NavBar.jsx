import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import '../styles/navBar.css'
import closeImage from '../images/close.png';
import HamburgerIcon from '../images/hamburger-icon.png';
import Logo from '../images/logo.png';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img href="/" src={Logo}></img>
      </div>

      {/* Conditional rendering of the hamburger or close icon */}
      {menuVisible ? (
        /* Close Icon for Small Screens */
        <div className="close" onClick={toggleMenu}>
          <img src={closeImage} alt="Close Icon" />
        </div>
      ) : (
        /* Hamburger Icon for Small Screens */
        <div className="hamburger" onClick={toggleMenu}>
          <img src={HamburgerIcon} alt="Hamburger Icon" />
        </div>
      )}

      {/* Render the MobileMenu component */}
      <MobileMenu isOpen={menuVisible} onClose={toggleMenu} />

      <ul className={`navbar-links ${menuVisible ? 'hide' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className={`navbar-search ${searchVisible ? 'show-search' : ''}`}>
        <input type="text" placeholder="Search" />
        <button type="submit">Go</button>
      </div>
    </nav>
  );
}

export default Navbar;