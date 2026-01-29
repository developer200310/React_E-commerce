import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import '../styles/shared/header.css'

function Header() {
    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src="/public/images/logo-white.png" />
                    <img className="mobile-logo"
                        src="/public/images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src="/public/images/icons/search-icon.png" />
                </button>
            </div>
            <div className='right-section'>
                <Link to="/" className='header-link orders-link'>Home</Link>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </Link>


                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="/public/images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    )
}

export default Header

