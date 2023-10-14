import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import Slider from 'react-slick';
import '../styles/productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts(0, 0);
        const product = productsData.products.find(product => String(product.id) === id);

        if (product) {
          setProductDetails(product);
          // Set the initial selected image
          setSelectedImage(product.images[0]);
        } else {
          console.error('Product not found.');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchData();
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImage(productDetails.images[index]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: index => {
      // Update the selected image when the slider changes
      setSelectedImage(productDetails?.images[index]);
    },
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      {/* Display the selected image above the slider in a bigger size */}
      {selectedImage && (
        <div className="selected-image">
          <img src={selectedImage} alt="Selected Product" />
        </div>
      )}

      {/* Slider for product images */}
      <Slider {...settings} className="image-slider">
        {productDetails.images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <img src={image} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetails;