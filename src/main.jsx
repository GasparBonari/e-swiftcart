import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <Footer/>
  </React.StrictMode>,
)
