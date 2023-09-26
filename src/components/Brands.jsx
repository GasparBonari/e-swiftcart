import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/brands.css';
import logo1 from '../images/logos/logoipsum-1.svg';
import logo2 from '../images/logos/logoipsum-2.svg';
import logo3 from '../images/logos/logoipsum-3.svg';
import logo4 from '../images/logos/logoipsum-4.svg';
import logo5 from '../images/logos/logoipsum-5.svg';
import logo6 from '../images/logos/logoipsum-6.svg';
import logo7 from '../images/logos/logoipsum-7.svg';
import logo8 from '../images/logos/logoipsum-8.svg';
import logo9 from '../images/logos/logoipsum-9.svg';
import logo10 from '../images/logos/logoipsum-10.svg';

function Brands() 
{
  // Settings for the carousel
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 2000, // Reduce the speed to create a smoother transition
    autoplaySpeed: 100,
    cssEase: 'linear',
    pauseOnHover: true,
    dots: false,
    arrows: false,
  };

  // Array of logo images
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brands;