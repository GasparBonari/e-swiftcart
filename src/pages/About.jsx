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

        <div className="container">
            <div className="text-container">
                <h1>Team</h1>
                <p>Your Text Goes Here</p>
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