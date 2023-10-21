import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home.jsx';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer';
import Products from './pages/Products';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ProductDetails from './models/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onCloseProductDetails = () => {
    setSelectedProduct(null);
  };
  
  const toggleShoppingCart = () => {
    setShoppingCartVisible(!shoppingCartVisible);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <React.StrictMode>
      <Router>
        <Navbar 
            toggleShoppingCart={toggleShoppingCart} 
            cartItemsCount={cartItems.length} 
          />

        <Routes>
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/products"
            element={<Products onProductClick={handleProductClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            addToCart={addToCart} 
            onClose={onCloseProductDetails} 
          />
        )}

        {/* Conditionally render the ShoppingCart */}
        {shoppingCartVisible && (
          <ShoppingCart 
            cartItems={cartItems} 
            toggleShoppingCart={toggleShoppingCart} 
          />
        )}

        <Footer />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);