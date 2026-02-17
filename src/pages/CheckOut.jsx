import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import emailjs from "@emailjs/browser";
import "./CheckOut.css";

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    payment: "cash",
  });

  const [isRedirecting, setIsRedirecting] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price.replace("$", "")) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.address ||
      !form.city
    ) {
      alert("Please fill all required fields");
      return;
    }

    const serviceId = "service_b8l892x";
    const templateId = "template_yeycqy9";
    const publicKey = "B8pXmMKz0_LrstivF";

    const templateParams = {
      name: form.name,
      email: form.email,
      order_id: Date.now(),
      orders: cartItems.map(item => ({
        name: item.itemName,
        price: item.price,
        units: item.quantity,
        image_url: item.restaurantIcon
      })),
      cost: {
        shipping: "2.99",
        tax: "0.00",
        total: (totalPrice + 2.99).toFixed(2)
      },
      address: `${form.address}, ${form.city}`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        const orderId = templateParams.order_id;
        setIsRedirecting(true);
        clearCart();
        navigate(`/track/${orderId}`);
      }, (err) => {
        console.log('FAILED...', err);
        // Still navigate to tracker as the order is conceptually placed
        const orderId = templateParams.order_id;
        setIsRedirecting(true);
        clearCart();
        navigate(`/track/${orderId}`);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0 && !isRedirecting) {
      navigate("/");
    }
  }, [cartItems, navigate, isRedirecting]);

  useEffect(() => {
    if (auth.currentUser?.email) {
      setForm((prev) => ({
        ...prev,
        email: auth.currentUser.email,
      }));
    }
  }, []);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="checkout-wrapper">
      <div className="checkout-header">
        <button className="back-link" onClick={() => navigate("/cart")}>← Back to Cart</button>
        <h1>Secure Checkout</h1>
      </div>

      <div className="checkout-container">
        <div className="form-section">
          <form id="checkout-form" className="checkout-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <h3>📍 Delivery Details</h3>
              <div className="input-row">
                <div className="input-wrap margin-input">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-wrap">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 123 456 789"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{8,}"
                    title="Phone number must be at least 8 digits"
                  />
                </div>
              </div>

              <div className="input-wrap">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-wrap">
                <label>Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address, apartment, suite"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-wrap">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City / Town"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <h3>💳 Payment Method</h3>
              <div className="payment-options">
                <label className={`payment-card ${form.payment === 'cash' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={form.payment === "cash"}
                    onChange={handleChange}
                  />
                  <span>💵 Cash on Delivery</span>
                </label>

                <label className={`payment-card ${form.payment === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={form.payment === "card"}
                    onChange={handleChange}
                  />
                  <span>💳 Card (Soon)</span>
                </label>

                <label className={`payment-card ${form.payment === 'paypal' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={form.payment === "paypal"}
                    onChange={handleChange}
                  />
                  <span>🅿️ PayPal</span>
                </label>
              </div>
            </div>

          </form>
        </div>

        <div className="summary-sidebar">
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-items-list">
              {cartItems.map((item, index) => (
                <div key={item.id || index} className="checkout-item-row">
                  <div className="item-info-mini">
                    <span className="qty-mini">{item.quantity}x</span>
                    <span>{item.name}</span>
                  </div>
                  <span className="price-mini">${(Number(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="cost-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cost-row">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="cost-row total-row">
              <span>Total to Pay</span>
              <span>${(totalPrice + 2.99).toFixed(2)}</span>
            </div>

            <button type="submit" form="checkout-form" className="place-order-btn">
              Confirm Order (${(totalPrice + 2.99).toFixed(2)})
            </button>
            <p className="secure-text">🔒 Secure Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
