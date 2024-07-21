import React, { useState } from 'react';
import '../styles/Cart.scss';
import location from '../assets/images/location-logo.png';
import book1 from '../assets/images/book1.jpg';

function Cart() {
  const [isAddressDetailsOpen, setIsAddressDetailsOpen] = useState(false);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const toggleAddressDetails = () => {
    setIsAddressDetailsOpen(!isAddressDetailsOpen);
  };

  const toggleOrderSummary = () => {
    setIsOrderSummaryOpen(!isOrderSummaryOpen);
  };

  const handleContinue = () => {
    setIsOrderSummaryOpen(true);
  };

  return (
    <div className="cart-container">
      <div className="cart-details">
        <div className="head">
          <h3>My cart (1)</h3>
          <div className="location">
            <button><img src={location} alt="location logo" />Use current location</button>
          </div>
        </div>
        <div className="cart-item">
          <img src={book1} alt="Don't Make Me Think" />
          <div className="item-details">
            <h4>Don't Make Me Think</h4>
            <span id='author-name'>by Steve Krug</span>
            <p className="price">Rs. 1500 <span className="original-price">Rs. 2000</span></p>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
              <button className="remove">Remove</button>
            </div>
          </div>
        </div>
        <div className="above-place-order">
          <button className="place-order">PLACE ORDER</button>
        </div>
      </div>
      <div className="cart-details">
        <div className="toggle-bar">
          <div className="toggle-bar-item">
            <button className="toggle-bar-title" onClick={toggleAddressDetails}>
              Address Details
            </button>
            <div className={`toggle-bar-content ${isAddressDetailsOpen ? 'open' : ''}`}>
              <div className="customer-details">
                <label>Full Name</label>
                <input type="text" />
                <label>Mobile Number</label>
                <input type="text"/>
                <label>Address</label>
                <textarea></textarea>
                <label>City/Town</label>
                <input type="text" />
                <label>State</label>
                <input type="text" />
                <label>Type</label>
                <div className="type-options">
                  <input type="radio" id="home" name="type" value="Home" />
                  <label htmlFor="home">Home</label>
                  <input type="radio" id="work" name="type" value="Work" checked />
                  <label htmlFor="work">Work</label>
                  <input type="radio" id="other" name="type" value="Other" />
                  <label htmlFor="other">Other</label>
                </div>
                <button className="continue" onClick={handleContinue}>CONTINUE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-details">
        <div className="toggle-bar">
          <div className="toggle-bar-item">
            <button className="toggle-bar-title" onClick={toggleOrderSummary}>
              Order Summary
            </button>
            <div className={`toggle-bar-content ${isOrderSummaryOpen ? 'open' : ''}`}>
              <div className="order-summary">
                <img src={book1} alt="Don't Make Me Think" />
                <div className="item-details">
                  <h4>Don't Make Me Think</h4>
                  <span>by Steve Krug</span>
                  <p className="price">Rs. 1500 <span className="original-price">Rs. 2000</span></p>
                </div>
              </div>
              <button className="checkout">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
