// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./style.css";

// const INITIAL = { name: "", phone: "", email: "", password: "" };

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(INITIAL);
//   const [loading, setLoading]   = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   const handleInputChanges = (e) => {
//     setFormData(curr => ({ ...curr, [e.target.name]: e.target.value }));
//   };

//   const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });
//   const handleError   = (err) => toast.error(err,   { position: "bottom-left"  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("localhost:8080/api/signup", formData);
//       if (res.data.success) {
//         handleSuccess(res.data.message);
//         setTimeout(() => navigate("/login"), 1000);
//       } else {
//         handleError(res.data.message);
//       }
//     } catch (err) {
//       handleError(
//         err?.response?.data?.message ||
//         err?.response?.data?.error   ||
//         "Something went wrong!"
//       );
//     } finally {
//       setLoading(false);
//       setFormData(INITIAL);
//     }
//   };

//   return (
//     <div className="auth-page">

//       {/* ── Left decorative panel ── */}
//       <div className="auth-panel">
//         <div className="auth-panel__grain" />
//         <div className="auth-panel__blob auth-panel__blob--1" />
//         <div className="auth-panel__blob auth-panel__blob--2" />
//         <div className="auth-panel__blob auth-panel__blob--3" />
//         <div className="auth-panel__inner">
//           <div className="auth-panel__logo">
//             <span>🌿</span>
//             <span className="auth-panel__logo-text">Sakha Spices</span>
//           </div>
//           <blockquote className="auth-panel__quote">
//             "Pure from the farm,<br />straight to your kitchen."
//           </blockquote>
//           <div className="auth-panel__ornament">✦ ✦ ✦</div>
//           <div className="auth-panel__badges">
//             <span className="auth-panel__badge">100% Natural</span>
//             <span className="auth-panel__badge">Farm Sourced</span>
//             <span className="auth-panel__badge">Est. 2021</span>
//           </div>
//         </div>
//       </div>

//       {/* ── Right form side ── */}
//       <div className="auth-form-side">
//         <div className="auth-card">

//           <div className="auth-card__header">
//             <h1 className="auth-card__title">Create Account</h1>
//             <p className="auth-card__sub">
//               Already have an account?{" "}
//               <Link to="/login" className="auth-link">Sign in →</Link>
//             </p>
//           </div>

//           <form className="auth-form" onSubmit={handleSubmit} noValidate>

//             <div className="auth-field">
//               <label className="auth-field__label" htmlFor="su-name">Full Name</label>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">👤</span>
//                 <input
//                   id="su-name" name="name" type="text" required
//                   placeholder="Rajesh Sharma"
//                   className="auth-field__input"
//                   value={formData.name}
//                   onChange={handleInputChanges}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="auth-field">
//               <label className="auth-field__label" htmlFor="su-phone">Phone Number</label>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">📞</span>
//                 <input
//                   id="su-phone" name="phone" type="tel" required
//                   placeholder="9876543210"
//                   className="auth-field__input"
//                   value={formData.phone}
//                   onChange={handleInputChanges}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="auth-field">
//               <label className="auth-field__label" htmlFor="su-email">Email Address</label>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">✉️</span>
//                 <input
//                   id="su-email" name="email" type="email" required
//                   placeholder="raj@example.com"
//                   className="auth-field__input"
//                   value={formData.email}
//                   onChange={handleInputChanges}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="auth-field">
//               <label className="auth-field__label" htmlFor="su-password">Password</label>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">🔒</span>
//                 <input
//                   id="su-password" name="password"
//                   type={showPass ? "text" : "password"}
//                   required placeholder="Min. 8 characters"
//                   className="auth-field__input"
//                   value={formData.password}
//                   onChange={handleInputChanges}
//                   disabled={loading}
//                 />
//                 <button
//                   type="button" tabIndex={-1}
//                   className="auth-field__eye"
//                   onClick={() => setShowPass(p => !p)}
//                 >
//                   {showPass ? "🙈" : "👁️"}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className={`auth-submit${loading ? " auth-submit--loading" : ""}`}
//               disabled={loading}
//             >
//               {loading
//                 ? <><span className="auth-dot"/><span className="auth-dot"/><span className="auth-dot"/></>
//                 : "Create Account →"
//               }
//             </button>

//           </form>

//           <p className="auth-card__terms">
//             By signing up you agree to our{" "}
//             <a href="#" className="auth-link">Terms</a> &amp;{" "}
//             <a href="#" className="auth-link">Privacy Policy</a>.
//           </p>

//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import "./style.css"

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm]         = useState({ name: "", email: "", phone: "", password: "" })
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState("")
  const [showPass, setShowPass] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await axios.post("http://localhost:8080/api/signup", {
        ...form,
        phone: Number(form.phone),   // schema expects Number
      })
      toast.success("Account created successfully!")
      navigate("/login")
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed"
      toast.error("Failed to create account! Try again.")
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-blob auth-blob--1" />
      <div className="auth-blob auth-blob--2" />

      {/* ── Left decorative panel ── */}
      <div className="auth-left">
        <div className="auth-left__inner">
          <div className="auth-left__brand">
            <span>🌿</span>
            <span className="auth-left__brand-name">Sakha Spices</span>
          </div>
          <blockquote className="auth-left__quote">
            "Pure from the farm,<br />straight to your kitchen."
          </blockquote>
          <div className="auth-left__ornament">✦ ✦ ✦</div>
          <div className="auth-left__badges">
            <span className="auth-left__badge">100% Natural</span>
            <span className="auth-left__badge">Farm Sourced</span>
            <span className="auth-left__badge">Est. 2021</span>
          </div>
        </div>
      </div>

      {/* ── Right form ── */}
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card__top-bar" />

          <h2 className="auth-card__title">Create Account</h2>
          <p className="auth-card__subtitle">Join the Sakha family today</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-name">Full Name</label>
              <input
                id="s-name" type="text" name="name"
                placeholder="Rajesh Sharma" required
                className="auth-input"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-email">Email Address</label>
              <input
                id="s-email" type="email" name="email"
                placeholder="raj@example.com" required
                className="auth-input"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-phone">Phone Number</label>
              <input
                id="s-phone" type="tel" name="phone"
                placeholder="9876543210" required
                className="auth-input"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="auth-field">
              <label className="auth-field__label" htmlFor="s-pass">Password</label>
              <div className="auth-input-wrap">
                <input
                  id="s-pass" name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters" required
                  className="auth-input auth-input--has-eye"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <button type="button" className="auth-eye" tabIndex={-1}
                  onClick={() => setShowPass(p => !p)}>
                  {showPass ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading
                ? <><span className="auth-dot"/><span className="auth-dot"/><span className="auth-dot"/></>
                : "Create Account →"}
            </button>

          </form>

          <p className="auth-card__footer">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">Sign In</Link>
          </p>

        </div>
      </div>

      <Toaster position="bottom-right" />
    </div>
  )
}

export default Signup