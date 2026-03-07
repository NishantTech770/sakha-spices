// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// // import toast from "react-hot-toast";
// import "./style.css";

// const INITIAL = { email: "", password: "" };

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(INITIAL);
//   const [loading, setLoading]   = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   const handleInputChanges = (e) => {
//     setFormData(curr => ({ ...curr, [e.target.name]: e.target.value }));
//   };

//   const handleSuccess = (msg) => toast.success(msg, { position: "top-center" });
//   const handleError   = (err) => toast.error(err,   { position: "top-left"  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("localhost:8080/api/login", formData);
//       if (res.data.success) {
//         // store token/user however your backend returns them
//         if (res.data.token) localStorage.setItem("token", res.data.token);
//         if (res.data.user)  localStorage.setItem("user", JSON.stringify(res.data.user));
//         handleSuccess(res.data.message);
//         setTimeout(() => navigate("/"), 1000);
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
//             "Every spice tells<br />a story of the earth."
//           </blockquote>
//           <div className="auth-panel__ornament">✦ ✦ ✦</div>
//           <div className="auth-panel__stats">
//             <div className="auth-panel__stat">
//               <div className="auth-panel__stat-num">30+</div>
//               <div className="auth-panel__stat-label">Products</div>
//             </div>
//             <div className="auth-panel__stat">
//               <div className="auth-panel__stat-num">2</div>
//               <div className="auth-panel__stat-label">Brands</div>
//             </div>
//             <div className="auth-panel__stat">
//               <div className="auth-panel__stat-num">100%</div>
//               <div className="auth-panel__stat-label">Pure</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Right form side ── */}
//       <div className="auth-form-side">
//         <div className="auth-card">

//           <div className="auth-card__header">
//             <h1 className="auth-card__title">Welcome Back</h1>
//             <p className="auth-card__sub">
//               New here?{" "}
//               <Link to="/signup" className="auth-link">Create an account →</Link>
//             </p>
//           </div>

//           <form className="auth-form" onSubmit={handleSubmit} noValidate>

//             <div className="auth-field">
//               <label className="auth-field__label" htmlFor="li-email">Email Address</label>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">✉️</span>
//                 <input
//                   id="li-email" name="email" type="email" required
//                   placeholder="raj@example.com"
//                   className="auth-field__input"
//                   value={formData.email}
//                   onChange={handleInputChanges}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="auth-field">
//               <div className="auth-field__label-row">
//                 <label className="auth-field__label" htmlFor="li-password">Password</label>
//                 <a href="#" className="auth-link auth-link--sm">Forgot password?</a>
//               </div>
//               <div className="auth-field__wrap">
//                 <span className="auth-field__icon">🔒</span>
//                 <input
//                   id="li-password" name="password"
//                   type={showPass ? "text" : "password"}
//                   required placeholder="Enter your password"
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
//                 : "Sign In →"
//               }
//             </button>

//           </form>

//           <div className="auth-card__divider"><span>or continue with</span></div>

//           <div className="auth-card__socials">
//             <button type="button" className="auth-social-btn">
//               <span>🌐</span> Google
//             </button>
//             <button type="button" className="auth-social-btn">
//               <span>📘</span> Facebook
//             </button>
//           </div>

//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import "./style.css"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm]         = useState({ email: "", password: "" })
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
      const { data } = await axios.post("http://localhost:8080/api/login", form)
      localStorage.setItem("user", JSON.stringify(data))
      toast.success("Login successful!")
      if (data.user?.role === "admin") {
        navigate("/admin/dashboard")
      } else {
        navigate("/")
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed"
      toast.error(msg)
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
            "Every spice tells<br />a story of the earth."
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

      {/* ── Right form ── */}
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
                className="auth-input"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
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
                : "Sign In →"}
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
  )
}

export default Login