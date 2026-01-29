import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx'
import '../styles/pages/checkout/checkout.css';
import '../styles/pages/checkout/checkout-header.css';
import { Link } from 'react-router-dom';

function Checkout() {
    const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext)

    if (cartItems.length === 0) {
        return (
            <div>
                <div className="checkout-page">
                    <div className="page-title">Review your order</div>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <p>Your cart is empty</p>
                        <Link to="/" style={{ color: '#0066c0', textDecoration: 'underline' }}>
                            Continue shopping
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
           <div>


            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item-container">
                                <div className="delivery-date">
                                    Delivery date: Tuesday, June 21
                                </div>

                                <div className="cart-item-details-grid">
                                    <img className="product-image"
                                        src={item.image} />

                                    <div className="cart-item-details">
                                        <div className="product-name">
                                            {item.name}
                                        </div>
                                        <div className="product-price">
                                            ${item.price.toFixed(2)}
                                        </div>
                                        <div className="product-quantity">
                                            <span>
                                                Quantity: <span className="quantity-label">{item.quantity}</span>
                                            </span>
                                            <span 
                                                className="delete-quantity-link link-primary"
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Delete
                                            </span>
                                        </div>
                                </div>

                                <div className="delivery-options">
                                    <div className="delivery-options-title">
                                        Choose a delivery option:
                                    </div>
                                    <div className="delivery-option">
                                        <input type="radio" checked
                                            className="delivery-option-input"
                                            name="delivery-option-1" />
                                        <div>
                                            <div className="delivery-option-date">
                                                Tuesday, June 21
                                            </div>
                                            <div className="delivery-option-price">
                                                FREE Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="delivery-option">
                                        <input type="radio"
                                            className="delivery-option-input"
                                            name="delivery-option-1" />
                                        <div>
                                            <div className="delivery-option-date">
                                                Wednesday, June 15
                                            </div>
                                            <div className="delivery-option-price">
                                                $4.99 - Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="delivery-option">
                                        <input type="radio"
                                            className="delivery-option-input"
                                            name="delivery-option-1" />
                                        <div>
                                            <div className="delivery-option-date">
                                                Monday, June 13
                                            </div>
                                            <div className="delivery-option-price">
                                                $9.99 - Shipping
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                        <div className="promo-code-container">
                    </div>
                                </div>
                        
                    ))
                }
                        </div>
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">${getTotalPrice().toFixed(2)}</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>                                   
      </div>
    )
}

export default Checkout