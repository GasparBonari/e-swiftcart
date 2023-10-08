import React from 'react';
import ProductSlider from '../models/ProductSlider';
import { FaCartPlus } from 'react-icons/fa';


function LatestProducts({ products }) {
  if (!products) return <p>Loading...</p>;

  const last12Products = products.slice(5, 17);

  return (
    <>
      <h2>Latest Products</h2>
      <div className="container">
        {last12Products.map(product => 
          <div className="card" key={product.id}>
            <div className="imgBx">
              <ProductSlider images={product.images} />
            </div>

            <div className="contentBx">
              <h2>{product.title}</h2>

              <div className="size">${product.price}</div>

              <FaCartPlus className="cart-icon" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LatestProducts;