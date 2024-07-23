import React, { useState, useEffect } from 'react';
import '../styles/Cart.scss';
import location from '../assets/images/location-logo.png';
import book1 from '../assets/images/book1.jpg';
import BookService, { CartItem } from '../services/BookService';

function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isAddressDetailsOpen, setIsAddressDetailsOpen] = useState(false);
    const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
        fetchCartItems();
    }, [token]);

    const fetchCartItems = async () => {
        try {
            const response = await BookService.getCartItems(token);
            const data: CartItem[] = Array.isArray(response.result) ? response.result : [];
            setCartItems(data);
        } catch (error) {
            console.error("Error fetching cart items", error);
        }
    };

    const toggleAddressDetails = () => {
        setIsAddressDetailsOpen(!isAddressDetailsOpen);
    };

    const toggleOrderSummary = () => {
        setIsOrderSummaryOpen(!isOrderSummaryOpen);
    };

    const handleContinue = () => {
        setIsOrderSummaryOpen(true);
    };

    const handleQuantityChange = async (itemId: string, quantity: number) => {
        try {
            await BookService.updateCartItemQuantity(token, itemId, quantity);
            fetchCartItems();
        } catch (error) {
            console.error("Error updating cart item quantity", error);
        }
    };

    const handleRemoveItem = async (itemId: string) => {
        try {
            await BookService.removeCartItem(token, itemId);
            fetchCartItems();
        } catch (error) {
            console.error("Error removing cart item", error);
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-details">
                <div className="head">
                    <h3>My cart ({cartItems.length})</h3>
                    <div className="location">
                        <button><img src={location} alt="location logo" />Use current location</button>
                    </div>
                </div>
                {cartItems.map(item => (
                    <div key={item._id} className="cart-item">
                        <img src={item.product_id.bookImage || book1} alt={item.product_id.bookName} />
                        <div className="item-details">
                            <h4>{item.product_id.bookName}</h4>
                            <span id="author-name">by {item.product_id.author}</span>
                            <p className="price">Rs. {item.product_id.discountPrice} <span className="original-price">Rs. {item.product_id.price}</span></p>
                            <div className="quantity">
                                <button onClick={() => handleQuantityChange(item._id, item.quantityToBuy - 1)}>-</button>
                                <input type="text" value={item.quantityToBuy} readOnly />
                                <button onClick={() => handleQuantityChange(item._id, item.quantityToBuy + 1)}>+</button>
                                <button className="remove" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
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
                                    <input type="radio" id="work" name="type" value="Work" />
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
                            {cartItems.map(item => (
                                <div key={item._id} className="order-summary">
                                    <img src={item.product_id.bookImage || book1} alt={item.product_id.bookName} />
                                    <div className="item-details">
                                        <h4>{item.product_id.bookName}</h4>
                                        <span>by {item.product_id.author}</span>
                                        <p className="price">Rs. {item.product_id.discountPrice} <span className="original-price">Rs. {item.product_id.price}</span></p>
                                    </div>
                                </div>
                            ))}
                            <button className="checkout">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
