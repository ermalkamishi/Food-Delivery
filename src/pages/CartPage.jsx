import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + numericPrice * item.quantity;
  }, 0);


  return (
    <div className="cart-wrapper">
      <div className="cart-header-section">
        <h1>Your Shopping Cart</h1>
        <p>Review your delicious picks before checkout.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any food yet. Hungry?</p>
          <Link to="/shop">
            <button className="start-shopping-btn">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-row">
                  <div className="item-image">
                    <img src={item.restaurantIcon} alt={item.restaurantName} />
                  </div>
                  <div className="item-details">
                    <h3>{item.itemName}</h3>
                    <p className="restaurant-ref">from {item.restaurantName}</p>
                    <span className="unit-price">{item.price} each</span>
                  </div>
                  <div className="item-actions">

                    <span className="qty-badge">{item.quantity}x</span>
                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.restaurantId, item.itemName)
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="item-total-price">

                  </div>
                </div>
              ))}
            </div>
            <div className="cart-actions-row">
              <button className="clear-cart-text-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/shop" className="continue-shopping-link">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="cart-summary-section">
            <div className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>€2.99</span>
              </div>
              <div className="summary-row">
                <span>Service Fee</span>
                <span>€1.50</span>
              </div>
              <div className="divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>€{(totalPrice + 2.99 + 1.50).toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button className="checkout-btn-large">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
