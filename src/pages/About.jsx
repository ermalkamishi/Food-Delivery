import { Link } from "react-router-dom";
import "./About.css";
import logo from "../assets/tastyway-logo.png";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>About TastyWay</h1>
          <p>Delivering more than just food — delivering happiness.</p>
        </div>
      </div>

      <div className="about-container">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At TastyWay, we believe that everyone deserves quick, convenient, and
            delicious meals. Our mission is to connect food lovers with their
            favorite restaurants, delivering fresh and tasty dishes right to your
            door — fast, safe, and hassle-free.
          </p>
        </div>

        <div className="values-section">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">🥬</div>
              <h3>Freshness First</h3>
              <p>Only delivering meals that meet our high-quality standards.</p>
            </div>
            <div className="value-card">
              <div className="icon">😊</div>
              <h3>Customer Satisfaction</h3>
              <p>Your happiness and satisfaction is our top priority.</p>
            </div>
            <div className="value-card">
              <div className="icon">🏘️</div>
              <h3>Supporting Local</h3>
              <p>Helping local restaurants and businesses reach more customers.</p>
            </div>
            <div className="value-card">
              <div className="icon">🚀</div>
              <h3>Innovation</h3>
              <p>Using the latest technology to make ordering simple and fast.</p>
            </div>
          </div>
        </div>

        <div className="about-footer-cta">
          <div className="cta-content">
            <h3>Ready to Taste the Difference?</h3>
            <p>
              Join thousands of happy customers enjoying the best food delivery
              experience.
            </p>
            <Link to="/shop">
              <button className="cta-button">Order Now</button>
            </Link>
          </div>
          <div className="cta-image">
            <img src={logo} alt="TastyWay Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
