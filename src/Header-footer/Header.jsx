import { Link } from "react-router-dom";
import myImage from "../assets/header_icon.png";
import { useContext, useState } from "react";
import { CartContext } from "../pages/CartContext";
import { auth } from "../firebase";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

          {/* Mobile Only Actions in Nav */}
          <div className="mobile-nav-actions">
            <Link to="/cart" className="mobile-cart-link" onClick={closeMobileMenu}>
              Cart ({cartItems.length})
            </Link>
            <button className="mobile-logout-btn" onClick={() => { auth.signOut(); closeMobileMenu(); }}>
              Log Out
            </button>
          </div>
        </nav>

        <div className="header-actions desktop-only">
          <Link to="/cart" className="cart-btn-header">
            <span className="cart-icon">🛍️</span>
            {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
          </Link>

          <div className="user-profile">
            <div className="user-avatar">{auth.currentUser?.email?.charAt(0).toUpperCase()}</div>
            <button className="logout-btn-header" onClick={() => auth.signOut()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
