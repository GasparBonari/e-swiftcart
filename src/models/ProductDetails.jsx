import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api'; // Update this import with your actual API function

const ProductDetails = ({ onClose }) => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts(0, 0);
        const product = productsData.products.find(product => String(product.id) === id);

        if (product) {
          setProductDetails(product);
        } else {
          console.error('Product not found.');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchData();
  }, [id]);

  if (!productDetails) {
    // You can add a loading indicator here
    return <div>Loading...</div>;
  }

  console.log(productDetails.title);

  return (
    <div className="product-detail">
      <h2>{productDetails.title}</h2>
      {/* Display other product details */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;
