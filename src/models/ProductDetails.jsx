import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import StarRating from '../components/StarRating';
import ProductTabs from '../components/ProductTabs';
import '../styles/productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('additionalInfo');

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

    console.log(productDetails)
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'additionalInfo':
        return (
          <ul>
            <li>Weight: 00 gr</li>
            <li>Dimensions: 00 x 00 x 00 cm</li>
            <li>Material: Lorem ipsum dolor sit amet, consetetur sadipscing</li>
            {/* Add additional information as needed */}
          </ul>
        );
      case 'description':
        return <p>{productDetails.description}</p>;
      case 'reviews':
        return (
          <div>
            <p>Review 1</p>
            <p>Review 2</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (

    <>
      <div className='product-container'>
        <div className="product-images">
          {/* Display the selected image above the slider in a bigger size */}
          {selectedImage && (
            <div className="selected-image">
              <img src={selectedImage} alt="Selected Product" />
            </div>
          )}

          {/* Slider for product images */}
          <div className="image-slider-vertical">
            {productDetails.images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='product-information'>
          <h1>{productDetails.title}</h1>
          <h3>${productDetails.price}</h3>

          <div className="star-rating">
            <StarRating rating={productDetails.rating} />
          </div>
          
          <p className='info'>{productDetails.description}</p>

          <div className="quantity-counter">
            <div className="quantity-controls">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>
                -
              </button>
            </div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="quantity-input"
            />
            <div className="quantity-controls">
              <button onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          <button>Add to Cart</button>

          <p>Category: {productDetails.category}</p>
          <p>Brand: {productDetails.brand}</p>
        </div>
      </div>

      <div className='tab-container'>
        {/* Tabs */}
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;