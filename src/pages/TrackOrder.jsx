import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TrackOrder.css";

const steps = [
    { id: 1, label: "Order Received", icon: "📝", duration: 3000 },
    { id: 2, label: "Chef is Cooking", icon: "👨‍🍳", duration: 5000 },
    { id: 3, label: "Driver is on the way", icon: "🚴", duration: 7000 },
    { id: 4, label: "Arrived!", icon: "🍕", duration: 0 },
];

function TrackOrder() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (currentStep < steps.length) {
            const duration = steps[currentStep - 1].duration || 5000;
            const interval = 50;
            const increment = (interval / duration) * 100;

            const timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        setCurrentStep((step) => Math.min(step + 1, steps.length));
                        return 0;
                    }
                    return prev + increment;
                });
            }, interval);

            return () => clearInterval(timer);
        }
    }, [currentStep]);

    // Safe access to step data
    const activeStep = steps[currentStep - 1] || steps[steps.length - 1];

    return (
        <div className="track-wrapper">
            <div className="track-container glass-effect">
                <div className="track-header">
                    <h1>Track Your Order</h1>
                    <p className="order-id">Order ID: #{orderId || "FD-92831"}</p>
                </div>

                <div className="track-visual">
                    <div className="main-icon-container">
                        <span className="main-status-icon">{activeStep.icon}</span>
                    </div>
                    <h2 className="status-text">{activeStep.label}</h2>
                    <p className="status-subtext">
                        {currentStep === 1 && "We've got your order and the restaurant is confirming it!"}
                        {currentStep === 2 && "The kitchen is busy preparing your delicious meal!"}
                        {currentStep === 3 && "Your food is fresh and on its way to your doorstep!"}
                        {currentStep === 4 && "Enjoy your meal! Don't forget to rate us."}
                    </p>
                </div>

                <div className="track-timeline">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`timeline-step ${currentStep >= step.id ? "active" : ""} ${currentStep > step.id ? "completed" : ""}`}
                        >
                            <div className="step-circle">
                                {currentStep > step.id ? "✓" : step.icon}
                            </div>
                            <span className="step-label">{step.label}</span>
                            {index < steps.length - 1 && (
                                <div className="step-line">
                                    <div
                                        className="line-progress"
                                        style={{ width: currentStep > step.id ? "100%" : (currentStep === step.id ? `${progress}%` : "0%") }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="track-footer">
                    <button className="back-home-btn" onClick={() => navigate("/")}>
                        Back to Home
                    </button>
                    {currentStep === 4 && (
                        <button className="rate-btn" onClick={() => navigate("/delivery-review")}>
                            Review our Delivery ⭐
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TrackOrder;
