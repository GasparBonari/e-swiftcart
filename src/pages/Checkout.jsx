import React, { useState, useEffect } from 'react';
import CheckoutImage from '../images/checkout.png';
import '../styles/checkoutPage.css';

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    street: '',
    phoneNumber: '',
  });

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 1.5;

      document.querySelector('.checkout-image').style.backgroundPositionY = `-${parallaxValue}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="checkout-image"></div>

      <div className='checkout-main'>

        <img src={CheckoutImage}></img>

        <div className="checkout-container">
          <div className="checkout-form">
            <h2>Shipping Information</h2>
            <form>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />

            <label>Street:</label>
            <input type="text" name="street" value={formData.street} onChange={handleInputChange} required />

            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <table>
              <thead>
                  <tr>
                  <th>Product</th>
                  <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {cartItems.map((item) => (
                  <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                  </tr>
                  ))}
                  <tr>
                      <td>Shipping</td>
                      <td>Free</td>
                  </tr>
              </tbody>
            </table>
            <p>Total: ${totalAmount}</p>
            <button className="btn-3d">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
