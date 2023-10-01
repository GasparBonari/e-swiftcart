import React from 'react';
import { GiWorld} from 'react-icons/gi';
import { BiSolidOffer, BiSolidLock} from 'react-icons/bi';
import { PiTShirtFill} from 'react-icons/pi';
import "../styles/features.css";

function Features(){
  return (
    <div className='icons'>
      <div className="icon-container giWorld">
        <GiWorld />
        <h2>Worldwide Shipping</h2>
        <p>We bring your favorite products to your doorstep, no matter where you are.</p>
      </div>

      <div className="icon-container biSolidOffer">
        <BiSolidOffer />
        <h2>Best Offers</h2>
        <p>Best Offers for exclusive deals and savings on top-notch items.</p>
      </div>

      <div className="icon-container biSolidLock">
        <BiSolidLock />
        <h2>Secure Payments</h2>
        <p>Ensure your transactions feeling safe and protected.</p>
      </div>

      <div className="icon-container piTShirtFill">
        <PiTShirtFill />
        <h2>Best Quality</h2>
        <p>We provide you with premium products that meet and exceed your expectations.</p>
      </div>
    </div>
  );
}

export default Features;