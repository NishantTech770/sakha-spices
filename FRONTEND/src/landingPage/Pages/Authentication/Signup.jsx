import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
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
      await axios.post("https://sakha-spices-backend.vercel.app/api/signup", {
        ...form,
        phone: Number(form.phone),
      });
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      toast.error("Failed to create account! Try again.");
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
            "Pure from the farm,
            <br />
            straight to your kitchen."
          </blockquote>
          <div className="auth-left__ornament">✦ ✦ ✦</div>
          <div className="auth-left__badges">
            <span className="auth-left__badge">100% Natural</span>
            <span className="auth-left__badge">Farm Sourced</span>
            <span className="auth-left__badge">Est. 2021</span>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card__top-bar" />

          <h2 className="auth-card__title">Create Account</h2>
          <p className="auth-card__subtitle">Join the Sakha family today</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-name">
                Full Name
              </label>
              <input
                id="s-name"
                type="text"
                name="name"
                placeholder="Rajesh Sharma"
                required
                className="auth-input"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-email">
                Email Address
              </label>
              <input
                id="s-email"
                type="email"
                name="email"
                placeholder="raj@example.com"
                required
                className="auth-input"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-phone">
                Phone Number
              </label>
              <input
                id="s-phone"
                type="tel"
                name="phone"
                placeholder="9876543210"
                required
                className="auth-input"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-pass">
                Password
              </label>
              <div className="auth-input-wrap">
                <input
                  id="s-pass"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  required
                  className="auth-input auth-input--has-eye"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="auth-eye"
                  tabIndex={-1}
                  onClick={() => setShowPass((p) => !p)}
                >
                  {showPass ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="auth-dot" />
                  <span className="auth-dot" />
                  <span className="auth-dot" />
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </form>

          <p className="auth-card__footer">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default Signup;
