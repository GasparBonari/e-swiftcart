import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../api';
import MobileMenu from '../MobileMenu/MobileMenu';
import './navBar.css';
import closeImage from '../../images/close.png';
import HamburgerIcon from '../../images/hamburger-icon.png';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleShoppingCart, cartItemsCount }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Fetch products from API when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts(0, 0);
        setProducts(productsData.products);
      } catch (error) {
        console.log('Something went wrong calling API', error);
      }
    }
    fetchData();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={Logo} className='logo-img' alt="Logo" />
        </Link>
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

      <div className='right-side'>
        {/* Show cart item count and handle click event */}
        <div className='checkout-bag' onClick={toggleShoppingCart}>
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className='item-count'>{cartItemsCount}</span>
        </div>

        <div className={`navbar-search-container ${searchVisible ? 'show-search' : ''}`}>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Display list of products */}
          {searchTerm && (
            <div className="product-list">
              <ul>
                {filteredProducts.map(product => (
                <li key={product.id}>
                  {/* Link to the product page */}
                  <a href={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
                    {product.title}
                  </a>
                </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;