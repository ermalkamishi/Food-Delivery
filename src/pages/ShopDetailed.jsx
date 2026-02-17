import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data";
import { reviews } from "../reviews";
import { CartContext } from "./CartContext";
import "./ShopDetailed.css";

function ShopDetailed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState(null);

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

  const fetchItemDetails = async (itemName) => {
    setLoadingDetails(true);
    setDetails(null);
    setError(null);
    setSelectedItem(itemName);
    setShowModal(true);

    try {
      // User requested to explore API key as much as possible
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(itemName)}&addRecipeInformation=true&addRecipeNutrition=true&number=1&apiKey=1e38e7f2da8441bdb2106aad38e7dc09`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setDetails(data.results[0]);
      } else {
        setError("We couldn't find specific ingredients for this item, but it sure tastes good!");
      }
    } catch (err) {
      setError("Unable to connect to the food database. Please try again later.");
    } finally {
      setLoadingDetails(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setDetails(null);
    setSelectedItem(null);
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
              <div className="hero-stats">
                <span className="hero-rating">⭐ {restaurant.rating}</span>
                <span className="hero-reviews">({restaurant.reviewsCount}+ Reviews)</span>
                <span className="hero-moods">{restaurant.moods?.join(" • ")}</span>
              </div>
              <p className="hero-desc">{restaurant.shortDescription}</p>
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
                // Seed some ratings for items
                const itemRating = (4 + Math.random()).toFixed(1);
                return (
                  <div key={index} className={`menu-card ${quantity > 0 ? "active-card" : ""}`}>
                    <div className="menu-card-image-container">
                      <img
                        src={`https://placehold.co/400x300?text=${encodeURIComponent(item.name)}`}
                        alt={item.name}
                        className="menu-card-img"
                      />
                      <button
                        className="view-details-btn"
                        onClick={() => fetchItemDetails(item.name)}
                      >
                        View Details ℹ️
                      </button>
                    </div>
                    <div className="menu-info">
                      <div className="item-rating">
                        <span className="star">★</span>
                        <span>{itemRating}</span>
                      </div>
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

          <div className="customer-reviews-section">
            <h2>What People Are Saying</h2>
            <div className="reviews-list">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="detail-review-card">
                  <div className="review-header">
                    <span className="reviewer-name">{review.name}</span>
                    <span className="review-stars">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="review-text">"{review.text}"</p>
                </div>
              ))}
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
                <div className="cart-total">
                  <span>Total</span>
                  <span>
                    ${cartItems
                      .filter((i) => i.restaurantId === restaurant.id)
                      .reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
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

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-effect" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            {loadingDetails ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Fetching food secrets...</p>
              </div>
            ) : error ? (
              <div className="error-msg">
                <p>{error}</p>
                <button className="modal-btn" onClick={closeModal}>Back to Menu</button>
              </div>
            ) : details ? (
              <div className="item-details">
                <img src={details.image} alt={selectedItem} className="details-img" />
                <h2>{selectedItem}</h2>
                <div className="details-scroll-content">
                  <div className="details-section">
                    <h3>🌿 Ingredients</h3>
                    <ul className="ingredients-list">
                      {details.extendedIngredients?.map((ing, i) => (
                        <li key={i}>{ing.original}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="details-section">
                    <h3>📊 Nutrition (per serving)</h3>
                    <div className="nutrition-grid">
                      {details.nutrition?.nutrients.slice(0, 4).map((n, i) => (
                        <div key={i} className="nutrition-item">
                          <span className="n-label">{n.name}</span>
                          <span className="n-value">{n.amount}{n.unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="details-section">
                    <h3>💡 Fun Fact</h3>
                    <p dangerouslySetInnerHTML={{ __html: details.summary?.split('. ')[0] + '.' }} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopDetailed;
