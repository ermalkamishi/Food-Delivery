import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setMessage("");
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Account created for ${userCredential.user.email}`);

      setEmail("");
      setPassword("");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage("Signup failed. Try a different email.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" autoComplete="off">

          <input type="text" name="fake-email" autoComplete="username" hidden />
          <input type="password" name="fake-password" autoComplete="new-password" hidden />

          <label className="auth-label">Email</label>
          <input
            type="email"
            name="signup-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            autoComplete="off"
            required
          />

          <label className="auth-label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="signup-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            autoComplete="new-password"
            required
            minLength={6}
          />

          <div className="auth-options">
            <label className="auth-checkbox">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          <button onClick={handleSignup} className="auth-button primary">
            Sign Up
          </button>

          <p className="auth-footer">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="auth-link">
              Login
            </span>
          </p>
        </form>

        <p className="auth-message">{message}</p>
      </div>
    </div>
  );
}

export default SignUpPage;
