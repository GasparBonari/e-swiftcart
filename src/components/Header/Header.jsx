import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './header.css';
import imgBackground from "../../images/background.jpg"

function Header()
{
  return (
    <header className="header-container background-fixed">

      <img className='background-img' src={imgBackground}></img>

      <div id="background-wrap">
          <div className="x1">
            <div className="cloud"></div>
          </div>

          <div className="x2">
            <div className="cloud"></div>
          </div>

          <div className="x3">
            <div className="cloud"></div>
          </div>

          <div className="x4">
            <div className="cloud"></div>
          </div>

          <div className="x5">
            <div className="cloud"></div>
          </div>
      </div>

      <div className="header-title">
        <div className="title-wrapper">
          <h1 className="swift-title">
            <span data-text="Swift">Swift</span>
            <span data-text="Cart">Cart</span>
          </h1>
          <div className='container-btns-header'>
            <ScrollLink to="carousel-container" smooth={true} duration={500}>
              <button className='btn-3d btn-header'>Find Out</button>
            </ScrollLink>

            <Link to="/about">
              <button className='btn-3d btn-header'>About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;