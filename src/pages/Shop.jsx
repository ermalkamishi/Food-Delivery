import { Link } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../data";
import { reviews } from "../reviews";
import "./Shop.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeMood, setActiveMood] = useState("All");

  const moods = [
    { name: "All", icon: "🍱" },
    { name: "Cheat Day", icon: "🍔" },
    { name: "Healthy Vibes", icon: "🥗" },
    { name: "Quick Fix", icon: "🚀" },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(search.toLowerCase());
    const matchesMood = activeMood === "All" || (restaurant.moods && restaurant.moods.includes(activeMood));
    return matchesSearch && matchesMood;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="shop-wrapper">
      <div className="shop-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>Explore Our Menu</h1>
          <p>Find the best food from top-rated restaurants near you.</p>
        </div>
      </div>

      <div className="shop-container">
        <div className="mood-filter-section">
          <h3>What's your mood?</h3>
          <div className="mood-buttons">
            {moods.map((mood) => (
              <button
                key={mood.name}
                className={`mood-btn ${activeMood === mood.name ? "active" : ""}`}
                onClick={() => {
                  setActiveMood(mood.name);
                  setVisibleCount(8); // Reset pagination on filter change
                }}
              >
                <span className="mood-icon">{mood.icon}</span>
                <span className="mood-name">{mood.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="restaurant-list">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants
              .slice(0, visibleCount)
              .map((restaurant) => (
                <Link
                  key={restaurant.id}
                  to={`/shop/${restaurant.id}`}
                  className="shop-link"
                >
                  <div className="restaurant-card">
                    <div className="card-image">
                      {restaurant.icon ? (
                        <img src={restaurant.icon} alt={restaurant.name} />
                      ) : (
                        <div className="placeholder-icon">🍽️</div>
                      )}
                    </div>
                    <div className="card-info">
                      <div className="card-rating">
                        <span className="rating-star">★</span>
                        <span className="rating-value">{restaurant.rating}</span>
                        <span className="rating-count">({restaurant.reviewsCount}+ reviews)</span>
                      </div>
                      <h2>{restaurant.name}</h2>
                      <span className="cuisine-tag">{restaurant.shortDescription}</span>
                      <p className="highlights">
                        <strong>Popular:</strong> {restaurant.highlights.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <div className="no-results">
              <h3>No restaurants found 😢</h3>
              <p>Try searching for something else!</p>
            </div>
          )}
        </div>

        {visibleCount < filteredRestaurants.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More Restaurants 🍕
            </button>
          </div>
        )}

        <div className="shop-reviews">
          <h1>What Our Customers Say</h1>
          <p className="reviews-subtitle">
            Real reviews from real food lovers.
          </p>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-quote">“</div>
                <p className="review-text">{review.text}</p>

                <div className="review-footer">
                  <div className="reviewer-info">
                    <span className="review-name">{review.name}</span>
                    <span className="review-stars">
                      {"★".repeat(review.rating)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
