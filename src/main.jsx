import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import to use 'Routes'
import './styles/index.css';
import Home from './pages/Home.jsx';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer';
import Products from './pages/Products'; // Import the Products component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </Router>
  </React.StrictMode>,
);