// Products.jsx
import React from 'react';
import Slider from 'react-slick';
import '../styles/products.css';

function Products({ products }) 
{
  if (!products) return <p>Loading...</p>;

  console.log(products)

  const last10Products = products.slice(5, 17);

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
    <>
        <h2>Latest Products</h2>
        <div className="product-slider-container">
            {last10Products.map((product) => (
            <div key={product.id} className="product-slider">
        
                <Slider {...sliderSettings}>
                    {product.images.map((image, index) => (
                    <div key={index} className="product-slider-item">
                        <img src={image} alt={`Product ${index + 1}`} className="product-image" />
                    </div>
                    ))}
                </Slider>
                <div className="product-details">
                    <p className="product-price">${product.price}</p>
                    <h3 className="product-title">{product.title}</h3>
                </div>
            </div>
            ))}
        </div>
    </>
  );
}

export default Products;
