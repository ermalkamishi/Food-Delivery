import { Link } from "react-router-dom";
import { restaurants } from "../data.jsx";
import myImage from "../assets/food-picture-homepage.avif";
import "./Homepage.css";
import { useEffect, useRef, useState } from "react";

function Home() {
  const stats = [
    { id: 1, label: "Orders Delivered", value: 1500 },
    { id: 2, label: "Satisfied Customers", value: 500 },
    { id: 3, label: "Partner Restaurants", value: 25 },
  ];

  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-content">
            <span className="badge">🍒 More than just food</span>
            <h1>
              Claim Your Best <br />
              <span className="highlight">Meal Today</span>
            </h1>
            <p>
              Craving something tasty? With TastyWay, your favorite meals are
              delivered straight to your door in minutes. Fresh, fast, and
              fabulously delicious.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn-primary">Order Now</Link>
              <a className="btn-secondary" href="https://youtu.be/IlZ51zeabhM?si=Upx3kxkR76B9iMtw" target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-blob"></div>
            <img src={myImage} alt="Delicious food" />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Fastest Delivery</h3>
          <p>We promise to deliver within 30 minutes or it's free.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🥗</div>
          <h3>Fresh Food</h3>
          <p>Your food is prepared fresh upon order, every time.</p>
        </div>
        <div className="feature-card">
          <div className="icon">💬</div>
          <h3>24/7 Support</h3>
          <p>We are here to help you with your order anytime.</p>
        </div>
      </div>
      <div className="famous">
        <h1>Our Most Famous Go-To’s</h1>
        <p>
          Looking for something delicious? Check out our most popular go-to meals — tried, tested, and guaranteed to satisfy your cravings.
        </p>
        <div className="restaurant-list">
          {restaurants.slice(0, 3).map((restaurant) => (
            <Link key={restaurant.id} to={`/shop/${restaurant.id}`} className="homepage-link">
              <div className="restaurant-card">
                <img src={restaurant.icon} alt={restaurant.name} className="restaurant-icon" />
                <h1 className="restaurant-name">{restaurant.name}</h1>
                <h3 className="restaurant-short">{restaurant.shortDescription}</h3>
                <p className="restaurant-highlights">
                  Popular: {restaurant.highlights.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="stats-section">
        {stats.map((stat) => (
          <Counter key={stat.id} end={stat.value} label={stat.label} />
        ))}
      </div>

      <div className="pre-footer">
        <h1>Hungry? Let TastyWay Deliver Your Favorites!</h1>
        <Link to="/shop" className="btn-primary">Order Now</Link>
      </div>
    </div>
  );
}

function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setCount(Math.floor(start));
          }, 16);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [end]);

  return (
    <div className="counter" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

export default Home;
