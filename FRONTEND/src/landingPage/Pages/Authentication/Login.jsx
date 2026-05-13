import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./style.css";

const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://sakha-spices-2.onrender.com/api/login",
        form,
      );

      localStorage.setItem("token", data.token);

      const decoded = decodeToken(data.token);
      if (decoded) {
        localStorage.setItem("user", JSON.stringify(decoded));
      }

      toast.success("Login successful!");

      if (decoded?.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      toast.error(msg);
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-blob auth-blob--1" />
      <div className="auth-blob auth-blob--2" />

      <div className="auth-left">
        <div className="auth-left__inner">
          <div className="auth-left__brand">
            <span>🌿</span>
            <span className="auth-left__brand-name">Sakha Spices</span>
          </div>
          <blockquote className="auth-left__quote">
            "Every spice tells
            <br />a story of the earth."
          </blockquote>
          <div className="auth-left__ornament">✦ ✦ ✦</div>
          <div className="auth-left__stats">
            <div className="auth-left__stat">
              <div className="auth-left__stat-num">30+</div>
              <div className="auth-left__stat-label">Products</div>
            </div>
            <div className="auth-left__stat">
              <div className="auth-left__stat-num">2</div>
              <div className="auth-left__stat-label">Brands</div>
            </div>
            <div className="auth-left__stat">
              <div className="auth-left__stat-num">100%</div>
              <div className="auth-left__stat-label">Pure</div>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card__top-bar" />
          <h2 className="auth-card__title">Welcome Back</h2>
          <p className="auth-card__subtitle">Sign in to your Sakha account</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className="auth-field">
              <label className="auth-field__label" htmlFor="l-email">Email Address</label>
              <input
                id="l-email" type="email" name="email"
                placeholder="raj@example.com" required
                className="auth-input" value={form.email}
                onChange={handleChange} disabled={loading}
              />
            </div>

            <div className="auth-field">
              <div className="auth-field__label-row">
                <label className="auth-field__label" htmlFor="l-pass">Password</label>
                <a href="#" className="auth-forgot">Forgot password?</a>
              </div>
              <div className="auth-input-wrap">
                <input
                  id="l-pass" name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password" required
                  className="auth-input auth-input--has-eye"
                  value={form.password} onChange={handleChange} disabled={loading}
                />
                <button type="button" className="auth-eye" tabIndex={-1}
                  onClick={() => setShowPass((p) => !p)}>
                  {showPass ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? (
                <><span className="auth-dot" /><span className="auth-dot" /><span className="auth-dot" /></>
              ) : "Sign In →"}
            </button>
          </form>

          <p className="auth-card__footer">
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">Create Account</Link>
          </p>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default Login;