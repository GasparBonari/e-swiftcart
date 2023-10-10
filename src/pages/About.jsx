import React, { useEffect } from 'react';
import '../styles/aboutPage.css';
import Team from '../images/people.png';
import Features from '../components/Features';

function About() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 1.5;

      document.querySelector('.about-image').style.backgroundPositionY = `-${parallaxValue}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <div className="about-image">
            <div className="animation-text"><h4>Who We Are...</h4></div>
        </div>

        <div className="container-about">
            <div className="text-container">
              <h1 className="home-title">
                <span>Your Swift Journey</span>
                <span>into Seamless Shopping</span>
              </h1>
              <p>At SwiftCart, we believe in making every click count. 
                Our mission is to redefine your e-commerce experience by 
                providing a curated selection of high-quality products, an 
                intuitive shopping interface, and unparalleled customer service. 
                We are more than an online store; we are a community that values 
                efficiency, style, and convenience.</p>
            </div>
            <div className="image-container">
                <img src={Team} alt="Team image" />
            </div>
        </div>

        <Features />
    </>
  );
}

export default About;