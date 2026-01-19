import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      const serviceId = "service_b8l892x";
      const templateId = "template_mrityrs";
      const publicKey = "B8pXmMKz0_LrstivF";

      const templateParams = {
        email: newsletterEmail,
        name: "Subscriber",
        title: "Newsletter Subscription",
        message: "Thank you for subscribing to our newsletter! We will keep you updated."
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubscribed(true);
          setNewsletterEmail("");
        }, (err) => {
          console.log('FAILED...', err);
          alert("Failed to subscribe. Please try again later.");
        });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <span className="brand-text">TastyWay</span>
          </Link>
          <p className="brand-desc">
            Delicious meals delivered to your doorstep. Fresh, fast, and made with love.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Menu</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><FaMapMarkerAlt className="icon" /> Skopje, North Macedonia</li>
            <li><FaPhone className="icon" /> +389 70 554 333</li>
            <li><FaEnvelope className="icon" /> support@tastyway.com</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get the latest updates and delicious offers.</p>
          {subscribed ? (
            <div className="newsletter-success">
              <p>🎉 Thank you for keeping up with us!</p>
              <p>We will contact you with our latest offers soon.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">Go</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TastyWay. All rights reserved.</p>
        <p className="designer-credit">Designed with ❤️ by Ermal Kamishi</p>
      </div>
    </footer>
  );
};

export default Footer;
