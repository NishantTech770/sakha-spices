// // // import { useState, useEffect } from "react";
// // // import { NavLink, useLocation } from "react-router-dom";
// // // import "./style.css";

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen]         = useState(false);
// // //   const [scrolled, setScrolled]         = useState(false);
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // //   const [mobileDropdown, setMobileDropdown] = useState(false);
// // //   const location = useLocation();

// // //   // Close mobile menu on route change
// // //   useEffect(() => {
// // //     setMenuOpen(false);
// // //     setMobileDropdown(false);
// // //   }, [location.pathname]);

// // //   // Scroll shadow
// // //   useEffect(() => {
// // //     const onScroll = () => setScrolled(window.scrollY > 50);
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   const isProductActive =
// // //     location.pathname.startsWith("/products");

// // //   return (
// // //     <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
// // //       <div className="navbar__inner">

// // //         {/* ── Logo ── */}
// // //         <NavLink to="/" className="navbar__logo">
// // //           <img src="/assets/logo.png" alt="Sakha Spices" />
// // //         </NavLink>

// // //         {/* ── Desktop Links ── */}
// // //         <nav className="navbar__links">
// // //           <NavLink
// // //             to="/"
// // //             end
// // //             className={({ isActive }) =>
// // //               `navbar__link ${isActive ? "navbar__link--active" : ""}`
// // //             }
// // //           >
// // //             Home
// // //           </NavLink>

// // //           <NavLink
// // //             to="/about-us"
// // //             className={({ isActive }) =>
// // //               `navbar__link ${isActive ? "navbar__link--active" : ""}`
// // //             }
// // //           >
// // //             About Us
// // //           </NavLink>

// // //           {/* Products Dropdown */}
// // //           <div
// // //             className="navbar__dropdown"
// // //             onMouseEnter={() => setDropdownOpen(true)}
// // //             onMouseLeave={() => setDropdownOpen(false)}
// // //           >
// // //             <button
// // //               className={`navbar__link navbar__link--btn ${
// // //                 isProductActive || dropdownOpen ? "navbar__link--active" : ""
// // //               }`}
// // //             >
// // //               Our Products
// // //               <svg
// // //                 className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
// // //                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
// // //                 strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
// // //               >
// // //                 <polyline points="6 9 12 15 18 9" />
// // //               </svg>
// // //             </button>

// // //             <div className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}>
// // //               <NavLink to="/products/sakha" className="navbar__dropdown-item">
// // //                 <span>🌿</span> Sakha
// // //               </NavLink>
// // //               <NavLink to="/products/shrinath-ji" className="navbar__dropdown-item">
// // //                 <span>✨</span> Shrinath Ji
// // //               </NavLink>
// // //             </div>
// // //           </div>

// // //           <NavLink
// // //             to="/blogs"
// // //             className={({ isActive }) =>
// // //               `navbar__link ${isActive ? "navbar__link--active" : ""}`
// // //             }
// // //           >
// // //             Blogs
// // //           </NavLink>

// // //           <NavLink
// // //             to="/contact-us"
// // //             className={({ isActive }) =>
// // //               `navbar__link navbar__link--cta ${isActive ? "navbar__link--cta-active" : ""}`
// // //             }
// // //           >
// // //             Contact Us
// // //           </NavLink>
// // //         </nav>

// // //         {/* ── Hamburger ── */}
// // //         <button
// // //           className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //           aria-label="Toggle menu"
// // //         >
// // //           <span />
// // //           <span />
// // //           <span />
// // //         </button>
// // //       </div>

// // //       {/* ── Mobile Menu ── */}
// // //       <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
// // //         <NavLink to="/" end className={({ isActive }) =>
// // //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// // //         }>
// // //           Home
// // //         </NavLink>

// // //         <NavLink to="/about-us" className={({ isActive }) =>
// // //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// // //         }>
// // //           About Us
// // //         </NavLink>

// // //         {/* Mobile Products Accordion */}
// // //         <button
// // //           className={`navbar__mobile-link navbar__mobile-link--btn ${
// // //             isProductActive ? "navbar__mobile-link--active" : ""
// // //           }`}
// // //           onClick={() => setMobileDropdown(!mobileDropdown)}
// // //         >
// // //           Our Products
// // //           <svg
// // //             className={`navbar__chevron ${mobileDropdown ? "navbar__chevron--open" : ""}`}
// // //             viewBox="0 0 24 24" fill="none" stroke="currentColor"
// // //             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
// // //           >
// // //             <polyline points="6 9 12 15 18 9" />
// // //           </svg>
// // //         </button>

// // //         <div className={`navbar__mobile-sub ${mobileDropdown ? "navbar__mobile-sub--open" : ""}`}>
// // //           <NavLink to="/products/sakha" className="navbar__mobile-sublink">
// // //             🌿 Sakha
// // //           </NavLink>
// // //           <NavLink to="/products/shrinath-ji" className="navbar__mobile-sublink">
// // //             ✨ Shrinath Ji
// // //           </NavLink>
// // //         </div>

// // //         <NavLink to="/blogs" className={({ isActive }) =>
// // //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// // //         }>
// // //           Blogs
// // //         </NavLink>

// // //         <NavLink to="/contact-us" className={({ isActive }) =>
// // //           `navbar__mobile-link navbar__mobile-link--cta ${isActive ? "navbar__mobile-link--active" : ""}`
// // //         }>
// // //           Contact Us
// // //         </NavLink>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;

// // import { useState, useEffect } from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import "./style.css";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen]             = useState(false);
// //   const [scrolled, setScrolled]             = useState(false);
// //   const [dropdownOpen, setDropdownOpen]     = useState(false);
// //   const [mobileDropdown, setMobileDropdown] = useState(false);
// //   const location = useLocation();

// //   const isHome = location.pathname === "/";

// //   // transparent only on home + not scrolled
// //   const isTransparent = isHome && !scrolled;

// //   // Close mobile menu on route change
// //   useEffect(() => {
// //     setMenuOpen(false);
// //     setMobileDropdown(false);
// //   }, [location.pathname]);

// //   // Reset scroll state when page changes
// //   useEffect(() => {
// //     setScrolled(window.scrollY > 50);
// //   }, [location.pathname]);

// //   // Scroll listener
// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   const isProductActive = location.pathname.startsWith("/products");

// //   return (
// //     <header
// //       className={`navbar ${isTransparent ? "navbar--transparent" : "navbar--solid"}`}
// //     >
// //       <div className="navbar__inner">

// //         {/* ── Logo ── */}
// //         <NavLink to="/" className="navbar__logo">
// //           <img src="/assets/logo.png" alt="Sakha Spices" />
// //         </NavLink>

// //         {/* ── Desktop Links ── */}
// //         <nav className="navbar__links">
// //           <NavLink to="/" end
// //             className={({ isActive }) =>
// //               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
// //             }
// //           >
// //             Home
// //           </NavLink>

// //           <NavLink to="/about-us"
// //             className={({ isActive }) =>
// //               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
// //             }
// //           >
// //             About Us
// //           </NavLink>

// //           {/* Products Dropdown */}
// //           <div
// //             className="navbar__dropdown"
// //             onMouseEnter={() => setDropdownOpen(true)}
// //             onMouseLeave={() => setDropdownOpen(false)}
// //           >
// //             <button
// //               className={`navbar__link navbar__link--btn
// //                 ${isTransparent ? "navbar__link--light" : ""}
// //                 ${isProductActive || dropdownOpen ? "navbar__link--active" : ""}
// //               `}
// //             >
// //               Our Products
// //               <svg
// //                 className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
// //                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
// //                 strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
// //               >
// //                 <polyline points="6 9 12 15 18 9" />
// //               </svg>
// //             </button>

// //             <div className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}>
// //               <NavLink to="/products/sakha" className="navbar__dropdown-item">
// //                 <span>🌿</span> Sakha
// //               </NavLink>
// //               <NavLink to="/products/shrinath-ji" className="navbar__dropdown-item">
// //                 <span>✨</span> Shrinath Ji
// //               </NavLink>
// //             </div>
// //           </div>

// //           <NavLink to="/blogs"
// //             className={({ isActive }) =>
// //               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
// //             }
// //           >
// //             Blogs
// //           </NavLink>

// //           <NavLink to="/contact-us"
// //             className={({ isActive }) =>
// //               `navbar__link navbar__link--cta ${isActive ? "navbar__link--cta-active" : ""}`
// //             }
// //           >
// //             Contact Us
// //           </NavLink>
// //         </nav>

// //         {/* ── Hamburger ── */}
// //         <button
// //           className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""} ${isTransparent ? "navbar__hamburger--light" : ""}`}
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Toggle menu"
// //         >
// //           <span /><span /><span />
// //         </button>
// //       </div>

// //       {/* ── Mobile Menu ── */}
// //       <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
// //         <NavLink to="/" end className={({ isActive }) =>
// //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// //         }>Home</NavLink>

// //         <NavLink to="/about-us" className={({ isActive }) =>
// //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// //         }>About Us</NavLink>

// //         <button
// //           className={`navbar__mobile-link navbar__mobile-link--btn ${isProductActive ? "navbar__mobile-link--active" : ""}`}
// //           onClick={() => setMobileDropdown(!mobileDropdown)}
// //         >
// //           Our Products
// //           <svg
// //             className={`navbar__chevron ${mobileDropdown ? "navbar__chevron--open" : ""}`}
// //             viewBox="0 0 24 24" fill="none" stroke="currentColor"
// //             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
// //           >
// //             <polyline points="6 9 12 15 18 9" />
// //           </svg>
// //         </button>

// //         <div className={`navbar__mobile-sub ${mobileDropdown ? "navbar__mobile-sub--open" : ""}`}>
// //           <NavLink to="/products/sakha" className="navbar__mobile-sublink">🌿 Sakha</NavLink>
// //           <NavLink to="/products/shrinath-ji" className="navbar__mobile-sublink">✨ Shrinath Ji</NavLink>
// //         </div>

// //         <NavLink to="/blogs" className={({ isActive }) =>
// //           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
// //         }>Blogs</NavLink>

// //         <NavLink to="/contact-us" className={({ isActive }) =>
// //           `navbar__mobile-link navbar__mobile-link--cta ${isActive ? "navbar__mobile-link--active" : ""}`
// //         }>Contact Us</NavLink>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;






// import { useState, useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import "./style.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen]             = useState(false);
//   const [scrolled, setScrolled]             = useState(false);
//   const [dropdownOpen, setDropdownOpen]     = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(false);
//   const location = useLocation();
//   const dropdownRef = useRef(null);

//   const isHome = location.pathname === "/";
//   const isTransparent = isHome && !scrolled;

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMenuOpen(false);
//     setMobileDropdown(false);
//     setDropdownOpen(false);
//   }, [location.pathname]);

//   // Reset scroll state when page changes
//   useEffect(() => {
//     setScrolled(window.scrollY > 50);
//   }, [location.pathname]);

//   // Scroll listener
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const isProductActive = location.pathname.startsWith("/products");

//   return (
//     <header
//       className={`navbar ${isTransparent ? "navbar--transparent" : "navbar--solid"}`}
//     >
//       <div className="navbar__inner">

//         {/* ── Logo ── */}
//         <NavLink to="/" className="navbar__logo">
//           <img src="/assets/logo.png" alt="Sakha Spices" />
//         </NavLink>

//         {/* ── Desktop Links ── */}
//         <nav className="navbar__links">
//           <NavLink to="/" end
//             className={({ isActive }) =>
//               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink to="/about-us"
//             className={({ isActive }) =>
//               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
//             }
//           >
//             About Us
//           </NavLink>

//           {/* Products Dropdown — click to toggle */}
//           <div className="navbar__dropdown" ref={dropdownRef}>
//             <button
//               className={`navbar__link navbar__link--btn
//                 ${isTransparent ? "navbar__link--light" : ""}
//                 ${isProductActive || dropdownOpen ? "navbar__link--active" : ""}
//               `}
//               onClick={() => setDropdownOpen((prev) => !prev)}
//             >
//               Our Products
//               <svg
//                 className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
//                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                 strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
//               >
//                 <polyline points="6 9 12 15 18 9" />
//               </svg>
//             </button>

//             <div className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}>
//               <NavLink
//                 to="/products/sakha"
//                 className="navbar__dropdown-item"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 <span>🌿</span> Sakha
//               </NavLink>
//               <NavLink
//                 to="/products/shrinath-ji"
//                 className="navbar__dropdown-item"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 <span>✨</span> Shrinath Ji
//               </NavLink>
//             </div>
//           </div>

//           <NavLink to="/blogs"
//             className={({ isActive }) =>
//               `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
//             }
//           >
//             Blogs
//           </NavLink>

//           <NavLink to="/contact-us"
//             className={({ isActive }) =>
//             `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
//             }
//           >
//             Contact Us
//           </NavLink>
//           <NavLink to="/login"
//             className={({ isActive }) =>
//               `navbar__link navbar__link--cta ${isActive ? "navbar__link--cta-active" : ""}`
//             }
//           >
//             Login
//           </NavLink>
//         </nav>

//         {/* ── Hamburger ── */}
//         <button
//           className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""} ${isTransparent ? "navbar__hamburger--light" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span /><span /><span />
//         </button>
//       </div>

//       {/* ── Mobile Menu ── */}
//       <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
//         <NavLink to="/" end className={({ isActive }) =>
//           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
//         }>Home</NavLink>

//         <NavLink to="/about-us" className={({ isActive }) =>
//           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
//         }>About Us</NavLink>

//         <button
//           className={`navbar__mobile-link navbar__mobile-link--btn ${isProductActive ? "navbar__mobile-link--active" : ""}`}
//           onClick={() => setMobileDropdown(!mobileDropdown)}
//         >
//           Our Products
//           <svg
//             className={`navbar__chevron ${mobileDropdown ? "navbar__chevron--open" : ""}`}
//             viewBox="0 0 24 24" fill="none" stroke="currentColor"
//             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
//           >
//             <polyline points="6 9 12 15 18 9" />
//           </svg>
//         </button>

//         <div className={`navbar__mobile-sub ${mobileDropdown ? "navbar__mobile-sub--open" : ""}`}>
//           <NavLink to="/products/sakha" className="navbar__mobile-sublink">🌿 Sakha</NavLink>
//           <NavLink to="/products/shrinath-ji" className="navbar__mobile-sublink">✨ Shrinath Ji</NavLink>
//         </div>

//         <NavLink to="/blogs" className={({ isActive }) =>
//           `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
//         }>Blogs</NavLink>

//         <NavLink to="/contact-us" className={({ isActive }) =>
//         `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
//         }>Contact Us</NavLink>
//         <NavLink to="/login" className={({ isActive }) =>
//           `navbar__mobile-link navbar__mobile-link--cta ${isActive ? "navbar__mobile-link--active" : ""}`
//         }>Login</NavLink>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [user, setUser]                     = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isHome        = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  /* ── Read user from localStorage on mount + route change ── */
  useEffect(() => {
    const stored = localStorage.getItem("user");
    setUser(stored ? JSON.parse(stored) : null);
  }, [location.pathname]);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setMobileDropdown(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  /* ── Reset scroll state on page change ── */
  useEffect(() => {
    setScrolled(window.scrollY > 50);
  }, [location.pathname]);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Logout handler ── */
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const isProductActive = location.pathname.startsWith("/products");

  return (
    <>
      <header className={`navbar ${isTransparent ? "navbar--transparent" : "navbar--solid"}`}>
        <div className="navbar__inner">

          {/* ── Logo ── */}
          <NavLink to="/" className="navbar__logo">
            <img src="/assets/logo.png" alt="Sakha Spices" />
          </NavLink>

          {/* ── Desktop Links ── */}
          <nav className="navbar__links">
            <NavLink to="/" end
              className={({ isActive }) =>
                `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink to="/about-us"
              className={({ isActive }) =>
                `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
              }
            >
              About Us
            </NavLink>

            {/* Products Dropdown */}
            <div className="navbar__dropdown" ref={dropdownRef}>
              <button
                className={`navbar__link navbar__link--btn
                  ${isTransparent ? "navbar__link--light" : ""}
                  ${isProductActive || dropdownOpen ? "navbar__link--active" : ""}
                `}
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Our Products
                <svg
                  className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}>
                <NavLink
                  to="/products/sakha"
                  className="navbar__dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span>🌿</span> Sakha
                </NavLink>
                <NavLink
                  to="/products/shrinath-ji"
                  className="navbar__dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span>✨</span> Shrinath Ji
                </NavLink>
              </div>
            </div>

            <NavLink to="/blogs"
              className={({ isActive }) =>
                `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
              }
            >
              Blogs
            </NavLink>

            <NavLink to="/contact-us"
              className={({ isActive }) =>
                `navbar__link ${isTransparent ? "navbar__link--light" : ""} ${isActive ? "navbar__link--active" : ""}`
              }
            >
              Contact Us
            </NavLink>

            {/* ── Login / Logout toggle ── */}
            {user ? (
              <button
                className="navbar__link navbar__link--cta navbar__link--logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login"
                className={({ isActive }) =>
                  `navbar__link navbar__link--cta ${isActive ? "navbar__link--cta-active" : ""}`
                }
              >
                Login
              </NavLink>
            )}
          </nav>

          {/* ── Hamburger ── */}
          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""} ${isTransparent ? "navbar__hamburger--light" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) =>
            `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
          }>Home</NavLink>

          <NavLink to="/about-us" className={({ isActive }) =>
            `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
          }>About Us</NavLink>

          <button
            className={`navbar__mobile-link navbar__mobile-link--btn ${isProductActive ? "navbar__mobile-link--active" : ""}`}
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            Our Products
            <svg
              className={`navbar__chevron ${mobileDropdown ? "navbar__chevron--open" : ""}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div className={`navbar__mobile-sub ${mobileDropdown ? "navbar__mobile-sub--open" : ""}`}>
            <NavLink to="/products/sakha" className="navbar__mobile-sublink">🌿 Sakha</NavLink>
            <NavLink to="/products/shrinath-ji" className="navbar__mobile-sublink">✨ Shrinath Ji</NavLink>
          </div>

          <NavLink to="/blogs" className={({ isActive }) =>
            `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
          }>Blogs</NavLink>

          <NavLink to="/contact-us" className={({ isActive }) =>
            `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
          }>Contact Us</NavLink>

          {/* ── Mobile Login / Logout toggle ── */}
          {user ? (
            <button
              className="navbar__mobile-link navbar__mobile-link--cta navbar__mobile-link--logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className={({ isActive }) =>
              `navbar__mobile-link navbar__mobile-link--cta ${isActive ? "navbar__mobile-link--active" : ""}`
            }>Login</NavLink>
          )}
        </div>
      </header>

      <Toaster position="bottom-right" />
    </>
  );
};

export default Navbar;