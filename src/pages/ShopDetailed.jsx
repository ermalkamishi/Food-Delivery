import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data";
import { CartContext } from "./CartContext";
import "./ShopDetailed.css";

function ShopDetailed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  const restaurant = restaurants.find((res) => res.id === id);
  if (!restaurant) return <h2>Restaurant not found</h2>;

  const getQuantity = (itemName) => {
    const item = cartItems.find(
      (i) =>
        i.restaurantId === restaurant.id &&
        i.itemName === itemName
    );
    return item ? item.quantity : 0;
  };

  return (
    <div className="detailed-wrapper">
      <div className="restaurant-hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-info">
            <img
              src={restaurant.icon}
              alt={restaurant.name}
              className="hero-logo"
            />
            <div className="hero-text-content">
              <h1>{restaurant.name}</h1>
              <p className="hero-desc">
                {restaurant.shortDescription} •{" "}
                <span className="rating">⭐ 4.8 (500+)</span>
              </p>
              <div className="hero-tags">
                {restaurant.highlights.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a href="/shop">
              <button className="back-btn-hero">← Back to Shop</button>
            </a>
          </div>
        </div>
      </div>

      <div className="detailed-container">
        <div className="main-content">
          <div className="about-restaurant">
            <h2>About {restaurant.name}</h2>
            <p>{restaurant.longDescription}</p>
          </div>

          <div className="menu-section">
            <h2>Full Menu</h2>
            <div className="menu-grid">
              {restaurant.menu.map((item, index) => {
                const quantity = getQuantity(item.name);
                return (
                  <div key={index} className={`menu-card ${quantity > 0 ? "active-card" : ""}`}>
                    <div className="menu-info">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <div className="menu-action">
                      {quantity === 0 ? (
                        <button
                          className="add-btn"
                          onClick={() => addToCart(restaurant, item)}
                        >
                          Add +
                        </button>
                      ) : (
                        <div className="qty-controls">
                          <button
                            onClick={() => removeFromCart(restaurant.id, item.name)}
                          >
                            −
                          </button>
                          <span>{quantity}</span>
                          <button onClick={() => addToCart(restaurant, item)}>
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="cart-summary-card">
            <h3>Your Order</h3>
            {cartItems.filter((i) => i.restaurantId === restaurant.id).length === 0 ? (
              <div className="empty-cart-msg">
                <p>Your basket is empty. Add items to start your order!</p>
              </div>
            ) : (
              <div className="cart-preview-list">
                {cartItems
                  .filter((i) => i.restaurantId === restaurant.id)
                  .map((item, idx) => (
                    <div key={idx} className="cart-preview-item">
                      <span>
                        {item.quantity}x {item.itemName}
                      </span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                <div className="divider"></div>
                <button
                  className="checkout-btn"
                  onClick={() => navigate("/cart")}
                >
                  Go to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailed;
