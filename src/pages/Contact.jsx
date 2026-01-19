import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="contact-content-card">
        <div className="contact-info-col">
          <h2>Get in Touch</h2>
          <p className="contact-desc">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Visit Us</h3>
              <p>Metodija Mitevksi 33/5, Skopje</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Call Us</h3>
              <p>+389 70 554 333</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <h3>Email Us</h3>
              <p>support@tastyway.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="premium-contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-msg-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-section-premium">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.3162398124762!2d21.433123151357837!3d42.023832619348575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415195beb73fd%3A0x25495d7604637ca8!2sHigh%20School%20%22Zef%20Lush%20Marku%22!5e0!3m2!1sen!2smk!4v1768514502689!5m2!1sen!2smk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="TastyWay Location">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
