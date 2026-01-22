import { Link, useNavigate } from "react-router-dom";
import myImage from "../assets/header_icon.png";
import { useContext, useState } from "react";
import { CartContext } from "../pages/CartContext";
import { auth } from "../firebase";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header({ user }) {
  const { cartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    await auth.signOut();
    closeMobileMenu();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <div className="logo-wrapper">
            <img src={myImage} alt="TastyWay" className="logo-icon" />
          </div>
          <span className="logo-text">TastyWay</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-item" onClick={closeMobileMenu}>Home</Link>
          <Link to="/shop" className="nav-item" onClick={closeMobileMenu}>Menu</Link>
          <Link to="/about" className="nav-item" onClick={closeMobileMenu}>Our Story</Link>
          <Link to="/contact" className="nav-item" onClick={closeMobileMenu}>Contact</Link>

          <div className="mobile-nav-actions">
            <Link to="/cart" className="mobile-cart-link" onClick={closeMobileMenu}>
              Cart ({cartItems.length})
            </Link>

            {user ? (
              <button className="mobile-logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            ) : (
              <button
                className="mobile-login-btn"
                onClick={() => {
                  navigate("/login");
                  closeMobileMenu();
                }}
              >
                Login
              </button>
            )}
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <Link to="/cart" className="cart-btn-header">
            <span className="cart-icon">🛍️</span>
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
          {user ? (
            <div className="user-profile">
              <div className="user-avatar">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <button className="logout-btn-header" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          ) : (
            <button
              className="logout-btn-header"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
