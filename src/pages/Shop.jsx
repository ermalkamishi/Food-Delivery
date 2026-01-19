import { Link } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../data";
import { reviews } from "../reviews";
import "./Shop.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

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
