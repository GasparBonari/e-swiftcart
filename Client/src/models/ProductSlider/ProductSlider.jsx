import React from 'react';
import Slider from 'react-slick';

function ProductSlider({ images }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index} className="product-slider-item">
          <img src={image} alt={`Product ${index + 1}`} className="product-image" />
        </div>
      ))}
    </Slider>
  );
}

export default ProductSlider;