import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import StarRating from '../components/StarRating';
import ProductTabs from '../components/ProductTabs';
import User1 from '../images/user1.jpg';
import User2 from '../images/user2.jpg';
import '../styles/productDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('additionalInfo');

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      profilePicture: User2,
      comment: 'Great product! Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePicture: User1,
      comment: 'Awesome quality and fast shipping. Highly recommended!',
    },
  ];

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

  const [clicked, setClicked] = useState(false);

  const handleCartClick = () => {
    setClicked(true);
    addToCart(productDetails);
  };

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
          </ul>
        );
      case 'description':
        return <p>{productDetails.description}</p>;
      case 'reviews':
        return (
          <div>
            {reviews.map((review) => (
              <div key={review.id} className="review-container">
                <img src={review.profilePicture} alt={`${review.name}'s profile`} className="profile-picture"></img>
                <div className="review-details">
                  <p className="customer-name">{review.name}</p>
                  <p className="customer-comment">{review.comment}</p>
                </div>
              </div>
            ))}
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

          <div className='buy'>
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

            <button
              className={`cart-button ${clicked ? 'clicked' : ''}`}
              onClick={handleCartClick}
            >
              <span className="add-to-cart">Add</span>
              <span className="added">Added</span>
              <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
              <FontAwesomeIcon icon={faShoppingBag} className='bag'/>
            </button>
          </div>

          <p>Category: {productDetails.category}</p>
          <p>Brand: {productDetails.brand}</p>
        </div>
      </div>

      <div className='tab-container'>
        {/* Tabs */}
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className='tab-content'>
          {renderTabContent()}

          {/* Review Form */}
          {activeTab === 'reviews' && (
            <form className="review-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;