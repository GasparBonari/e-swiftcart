import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
  </React.StrictMode>,
)
