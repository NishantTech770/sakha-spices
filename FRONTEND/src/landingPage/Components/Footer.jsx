import { NavLink } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta-strip">
        <div className="footer__cta-inner">
          <div className="footer__cta-text">
            <span className="footer__cta-label">Pure. Aromatic. Trusted.</span>
            <h3 className="footer__cta-heading">
              Bring the Flavor of India Home
            </h3>
          </div>
          <NavLink to="/contact-us" className="footer__cta-btn">
            Get in Touch →
          </NavLink>
        </div>
      </div>

      <div className="footer__body">
        <div className="footer__bg-circle footer__bg-circle--1" />
        <div className="footer__bg-circle footer__bg-circle--2" />

        <div className="footer__grid">
          <div className="footer__brand">
            <NavLink to="/" className="footer__logo-link">
              <img
                src="/assets/logo.png"
                alt="Sakha Spices"
                className="footer__logo"
              />
            </NavLink>
            <p className="footer__tagline">
              From the heart of India's spice trails — pure, aromatic, and
              crafted with generations of tradition.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="#" className="footer__social-btn" aria-label="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <ul className="footer__links">
              {[
                { to: "/", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/blogs", label: "Blogs" },
                { to: "/contact-us", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === "/"} className="footer__link">
                    <span className="footer__link-arrow">→</span> {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Our Products</h4>
            <ul className="footer__links">
              <li>
                <NavLink
                  to="/products/sakha"
                  className="footer__link footer__link--product"
                >
                  <span className="footer__product-dot footer__product-dot--green" />
                  Sakha Range
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/shrinath-ji"
                  className="footer__link footer__link--product"
                >
                  <span className="footer__product-dot footer__product-dot--gold" />
                  Shrinath Ji Range
                </NavLink>
              </li>
            </ul>

            <h4 className="footer__col-title footer__col-title--mt">Legal</h4>
            <ul className="footer__links">
              <li>
                <NavLink to="/privacy-policy" className="footer__link">
                  <span className="footer__link-arrow">→</span> Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="footer__link">
                  <span className="footer__link-arrow">→</span> Terms of Use
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>Rajkot, Gujarat, India</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <a
                  href="mailto:hello@sakhaspices.com"
                  className="footer__contact-link"
                >
                  hello@sakhaspices.com
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919876543210" className="footer__contact-link">
                  +91 98765 43210
                </a>
              </li>
            </ul>

            <div className="footer__badge">
              <span className="footer__badge-icon">🌿</span>
              <div>
                <p className="footer__badge-title">100% Natural</p>
                <p className="footer__badge-sub">
                  No preservatives, no additives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-divider">
            <span className="footer__divider-line" />
            <span className="footer__bottom-brand">
              ❖ &nbsp; SAKHA SPICES &nbsp; ❖
            </span>
            <span className="footer__divider-line" />
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Sakha Spices. All rights reserved.
            &nbsp;·&nbsp; Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
