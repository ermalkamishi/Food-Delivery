import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryReview.css";

function DeliveryReview() {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("Please select a rating before submitting.");
            return;
        }
        // Simulation of API call
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="review-wrapper">
                <div className="review-container glass-effect success-state">
                    <div className="success-icon">🎉</div>
                    <h1>Thank You!</h1>
                    <p>Your feedback helps us make every delivery faster and better.</p>
                    <button className="home-btn" onClick={() => navigate("/")}>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="review-wrapper">
            <div className="review-container glass-effect">
                <div className="review-header">
                    <h1>Rate Your Delivery</h1>
                    <p>How was your experience with our driver?</p>
                </div>

                <form onSubmit={handleSubmit} className="review-form">
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`star-btn ${star <= (hover || rating) ? "active" : ""}`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <div className="feedback-section">
                        <label htmlFor="comment">Additional Comments</label>
                        <textarea
                            id="comment"
                            placeholder="Tell us more about the delivery... (optional)"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="submit-review-btn">
                        Submit Review
                    </button>
                    <button type="button" className="skip-btn" onClick={() => navigate("/")}>
                        Skip for now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DeliveryReview;
