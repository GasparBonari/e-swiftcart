import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/testimonials.css';

const testimonials = [
  {
    quote: "I recently purchased a product from your online store, and I couldn't be happier! The quality exceeded my expectations, and the delivery was incredibly fast. I'll definitely be a repeat customer.",
    image: 'https://images.pexels.com/photos/12118422/pexels-photo-12118422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote: "I've been shopping with you for a while now, and I'm consistently impressed with the excellent service and high-quality products. Your website is user-friendly, and the customer support team is always helpful. Keep up the great work",
    image: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote: "Shopping on your website was a breeze! The variety of products, coupled with easy navigation, made my experience enjoyable. Plus, the checkout process was quick and hassle-free. Will recommend to friends and family!",
    image: 'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote: "The product I received was of exceptional quality. It's clear that your team pays attention to detail and prioritizes the satisfaction of your customers. I'm impressed and will certainly be shopping with you again.",
    image: 'https://images.pexels.com/photos/7656336/pexels-photo-7656336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonial = ({ quote, image }) => (
  <figure className="testimonial">
    <blockquote>
      {quote}
      <div className="arrow"></div>
    </blockquote>
    <img src={image} alt="testimonial" />
  </figure>
);

function TestimonialSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
  };

  return (
    <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;