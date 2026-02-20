import { useState } from "react";
import { useLogin } from "../../context/login-context";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../../api/auth";
import "../../login.css";

const Login = () => {
  const { loginDispatch } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await userLogin(email, password)(loginDispatch);
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your Shop It account</p>

        <form onSubmit={onFormSubmit} className="login-form">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link to="/auth/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
