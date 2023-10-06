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

        <div className="flex justify-center items-center h-screen">

            <div className="flex-shrink-0 p-6">
                <h1 className="text-4xl font-bold">Your Text Here</h1>
                <p className="mt-4 text-gray-600">Additional text can go here...</p>
            </div>

            <div className="flex-shrink-0 p-6">
                <img src={Team} className="max-w-full h-auto"></img>
            </div>
        </div>

        <Features />
    </>
  );
}

export default About;