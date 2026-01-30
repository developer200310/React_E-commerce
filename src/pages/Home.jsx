import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import '../styles/pages/index.css';
import { products } from '../data/products.js';
function Home() {
    const { addToCart } = useContext(CartContext)
    const [addedItemId, setAddedItemId] = useState(null)


    const handleAddToCart = (product, quantity) => {
        addToCart({
            ...product,
            quantity: parseInt(quantity)
        })
        setAddedItemId(product.id)
        setTimeout(() => setAddedItemId(null), 1500)
    }

    return (
        <div>
            <div className="home-page">
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            isAdded={addedItemId === product.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ProductCard({ product, onAddToCart, isAdded }) {
    const [quantity, setQuantity] = useState('1')

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={`/public/${product.image}`} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`/public/images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            {isAdded && (
                <div className="added-to-cart">
                    <img src="/public/images/icons/checkmark.png" />
                    Added
                </div>
            )}

            <button
                className="add-to-cart-button button-primary"
                onClick={() => onAddToCart(product, quantity)}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Home
