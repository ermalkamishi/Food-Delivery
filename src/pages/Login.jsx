import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();


  const checkoutMessage = location.state?.message;
  const redirectTo = location.state?.redirectTo || "/";

  useEffect(() => {
    setEmail("");
    setPassword("");


    if (checkoutMessage) {
      setMessage(checkoutMessage);
    } else {
      setMessage("");
    }
  }, [checkoutMessage]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate(redirectTo, { replace: true });
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        {message && <p className="auth-message">{message}</p>}

        <form className="auth-form" autoComplete="off">
          <input type="text" name="fake-email" autoComplete="username" hidden />
          <input
            type="password"
            name="fake-password"
            autoComplete="new-password"
            hidden
          />

          <label className="auth-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />

          <label className="auth-label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
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

          <button onClick={handleLogin} className="auth-button primary">
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="auth-button secondary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
