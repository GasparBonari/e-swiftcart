import React, { useState } from 'react';
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

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <React.StrictMode>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/products"
            element={<Products onProductClick={handleProductClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {selectedProduct && (
          <ProductDetails product={selectedProduct} onClose={onCloseProductDetails} />
        )}

        <Footer />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);