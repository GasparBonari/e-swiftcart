import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductDetails from './models/ProductDetails/ProductDetails.jsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx';
import Products from './pages/Products';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

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

  const onCloseProductDetails = () => {
    setSelectedProduct(null);
  };
  
  const toggleShoppingCart = () => {
    setShoppingCartVisible(!shoppingCartVisible);
  };

  const addToCart = (product) => {
    // Check if the product with the same details already exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
  
    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCartItems(updatedCart);
    } else {
      // If the product does not exist, add it to the cart
      setCartItems([...cartItems, product]);
    }
  };

  const deleteFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
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
            element={<Products addToCart={addToCart}/>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>

        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            addToCart={addToCart} 
            onClose={onCloseProductDetails} 
          />
        )}

        {shoppingCartVisible && (
          <ShoppingCart 
            cartItems={cartItems}
            toggleShoppingCart={toggleShoppingCart}
            deleteFromCart={deleteFromCart}
          />
        )}

        <Footer />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);