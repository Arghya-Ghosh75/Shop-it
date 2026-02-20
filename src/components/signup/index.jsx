import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userSignup } from "../../api/signup";
import "../../login.css"; // reuse same styles

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await userSignup(name, email, password);
      alert("Account created successfully! Please login.");
      navigate("/auth/login");
    } catch (err) {
      setError("Signup failed. Try a different email.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Create Account ✨</h2>
        <p className="login-subtitle">Signup for Shop It</p>

        <form onSubmit={onFormSubmit} className="login-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>
          )}

          <button type="submit" className="login-btn">
            Signup
          </button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
