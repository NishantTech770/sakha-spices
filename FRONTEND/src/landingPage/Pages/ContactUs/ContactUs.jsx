// import { useState } from "react";
// import "./ContactUs.css";

// const INFO_CARDS = [
//   {
//     icon: "📍",
//     label: "Our Location",
//     value: "Shyam Sakha Industries Pvt. Ltd.",
//     sub: "Rajasthan, India",
//   },
//   {
//     icon: "📞",
//     label: "Call Us",
//     value: "+91 XXXXX XXXXX",
//     sub: "Mon – Sat, 9 AM – 6 PM",
//   },
//   {
//     icon: "✉️",
//     label: "Email Us",
//     value: "info@sakhaspiecs.com",
//     sub: "We reply within 24 hours",
//   },
//   {
//     icon: "🕐",
//     label: "Business Hours",
//     value: "Mon – Sat: 9 AM – 6 PM",
//     sub: "Sunday: Closed",
//   },
// ];

// const FAQS = [
//   {
//     q: "Do you supply spices in bulk for businesses?",
//     a: "Yes! We cater to retailers, distributors and food businesses across India. Please fill the enquiry form and mention your requirement — our team will get back to you within 24 hours.",
//   },
//   {
//     q: "What brands do you manufacture under?",
//     a: "We produce and market spices under two brands — Sakha (everyday premium staples) and Shrinath Ji (traditional garam masala blends). Both maintain the same export-ready quality standards.",
//   },
//   {
//     q: "Are your spices free from artificial colour and preservatives?",
//     a: "Absolutely. Every product is 100% natural — no artificial colour, no preservatives, no fillers. We rely on purity and sourcing quality to deliver vibrant colour and aroma.",
//   },
//   {
//     q: "Can I visit your manufacturing facility?",
//     a: "We welcome scheduled visits from buyers and distributors. Please reach out via the contact form or call us to arrange a facility tour at a mutually convenient time.",
//   },
//   {
//     q: "Do you export spices internationally?",
//     a: "We are export-ready with international food-grade packaging and documentation standards. Contact us to discuss export enquiries.",
//   },
// ];

// const ContactUs = () => {
//   const [form, setForm] = useState({
//     firstName: "", lastName: "", email: "",
//     phone: "", enquiry: "", message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);
//   const [openFaq, setOpenFaq]     = useState(null);

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise(r => setTimeout(r, 1400));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   return (
//     <div className="contact-page page-content">

//       {/* ── 1. PAGE HEADER — no image, pure typography ── */}
//       <section className="contact-header">
//         <div className="contact-header__inner">
//           <p className="contact-header__eyebrow">✦ Shyam Sakha Industries Pvt. Ltd.</p>
//           <h1 className="contact-header__title">
//             Let's <em>Connect</em>
//           </h1>
//           <p className="contact-header__sub">
//             Reach out for bulk enquiries, partnerships, or just to say hello.
//             We're happy to hear from you.
//           </p>
//         </div>
//       </section>

//       {/* ── 2. MAIN: INFO + FORM ── */}
//       <section className="contact-main">
//         <div className="contact-main__inner">

//           {/* Left — Info */}
//           <div className="contact-info">
//             <div className="contact-label">Get in Touch</div>
//             <h2 className="contact-info__title">
//               We'd Love to<br /><em>Hear From You</em>
//             </h2>
//             <p className="contact-info__text">
//               Whether you're a distributor, retailer, home buyer or simply
//               curious about our products — fill the form or reach us directly
//               through the details below.
//             </p>

//             <div className="contact-info__cards">
//               {INFO_CARDS.map((c, i) => (
//                 <div className="contact-info-card" key={i}>
//                   <div className="contact-info-card__icon">{c.icon}</div>
//                   <div>
//                     <div className="contact-info-card__label">{c.label}</div>
//                     <div className="contact-info-card__value">{c.value}</div>
//                     <div className="contact-info-card__sub">{c.sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social */}
//             <div className="contact-social">
//               {[
//                 { icon: "📘", label: "Facebook"  },
//                 { icon: "📸", label: "Instagram" },
//                 { icon: "💼", label: "LinkedIn"  },
//                 { icon: "🐦", label: "Twitter"   },
//               ].map((s, i) => (
//                 <a key={i} href="#" className="contact-social__link" title={s.label}>
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right — Form */}
//           <div className="contact-form-wrap">
//             {submitted ? (
//               <div className="contact-success">
//                 <div className="contact-success__icon">✅</div>
//                 <h3 className="contact-success__title">Message Sent!</h3>
//                 <p className="contact-success__text">
//                   Thank you for reaching out. Our team will get back to you
//                   within 24 hours.
//                 </p>
//                 <div className="contact-success__badge">
//                   ✦ &nbsp;Sakha Spices — Est. 2021
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <h3 className="contact-form__heading">Send Us a Message</h3>
//                 <p className="contact-form__sub">All fields marked * are required</p>

//                 <form className="contact-form" onSubmit={handleSubmit}>
//                   <div className="contact-form__row">
//                     <div className="contact-form__group">
//                       <label className="contact-form__label">First Name *</label>
//                       <input type="text" name="firstName" required
//                         placeholder="Raj" className="contact-form__input"
//                         value={form.firstName} onChange={handleChange} />
//                     </div>
//                     <div className="contact-form__group">
//                       <label className="contact-form__label">Last Name *</label>
//                       <input type="text" name="lastName" required
//                         placeholder="Sharma" className="contact-form__input"
//                         value={form.lastName} onChange={handleChange} />
//                     </div>
//                   </div>

//                   <div className="contact-form__row">
//                     <div className="contact-form__group">
//                       <label className="contact-form__label">Email *</label>
//                       <input type="email" name="email" required
//                         placeholder="raj@example.com" className="contact-form__input"
//                         value={form.email} onChange={handleChange} />
//                     </div>
//                     <div className="contact-form__group">
//                       <label className="contact-form__label">Phone</label>
//                       <input type="tel" name="phone"
//                         placeholder="+91 98765 43210" className="contact-form__input"
//                         value={form.phone} onChange={handleChange} />
//                     </div>
//                   </div>

//                   <div className="contact-form__group">
//                     <label className="contact-form__label">Enquiry Type *</label>
//                     <select name="enquiry" required className="contact-form__select"
//                       value={form.enquiry} onChange={handleChange}>
//                       <option value="" disabled>Select an option</option>
//                       <option value="bulk">Bulk / B2B Order</option>
//                       <option value="distribution">Distributorship</option>
//                       <option value="retail">Retail Enquiry</option>
//                       <option value="export">Export Enquiry</option>
//                       <option value="feedback">Product Feedback</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div className="contact-form__group">
//                     <label className="contact-form__label">Your Message *</label>
//                     <textarea name="message" required
//                       placeholder="Tell us about your requirement — product, quantity, location..."
//                       className="contact-form__textarea"
//                       value={form.message} onChange={handleChange} />
//                   </div>

//                   <button type="submit" className="contact-form__submit" disabled={loading}>
//                     {loading ? "Sending..." : "Send Message →"}
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ── 3. MAP ── */}
//       <section className="contact-map">
//         <div className="contact-map__inner">
//           <div>
//             <div className="contact-label" style={{ color: "var(--gold-lt)" }}>Find Us</div>
//             <h2 className="contact-map__title">
//               Visit Our<br /><em>Facility</em>
//             </h2>
//             <p className="contact-map__detail">
//               Our manufacturing and dispatch facility is located in Rajasthan.
//               We welcome scheduled visits from buyers and partners.
//             </p>
//             <div className="contact-map__address">
//               📍 Shyam Sakha Industries Pvt. Ltd.<br />
//               Rajasthan, India<br /><br />
//               📞 +91 XXXXX XXXXX<br />
//               ✉️ info@sakhaspiecs.com
//             </div>
//           </div>

//           <div className="contact-map__frame">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.674!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
//               allowFullScreen="" loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Sakha Spices Location"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── 4. FAQ ── */}
//       <section className="contact-faq">
//         <div className="contact-faq__inner">
//           <div className="contact-faq__header">
//             <div className="contact-label" style={{ justifyContent: "center" }}>
//               Common Questions
//             </div>
//             <h2 className="contact-faq__title">Frequently <em>Asked</em></h2>
//           </div>

//           {FAQS.map((faq, i) => (
//             <div key={i}
//               className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`}>
//               <button className="faq-item__trigger"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                 <span className="faq-item__q">{faq.q}</span>
//                 <span className="faq-item__icon">+</span>
//               </button>
//               <div className="faq-item__answer">
//                 <p>{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ContactUs;

// import { useState } from "react";
// import axios from "axios";
// import "./ContactUs.css";

// /* ─────────────────────────────────────────
//    Info cards (display only, no form field)
// ───────────────────────────────────────── */
// const INFO_CARDS = [
//   { icon: "📍", label: "Our Location",   value: "Shyam Sakha Industries Pvt. Ltd.", sub: "Rajasthan, India" },
//   { icon: "📞", label: "Call Us",        value: "+91 XXXXX XXXXX",                  sub: "Mon – Sat, 9 AM – 6 PM" },
//   { icon: "✉️", label: "Email Us",       value: "info@sakhaspiecs.com",             sub: "We reply within 24 hours" },
//   { icon: "🕐", label: "Business Hours", value: "Mon – Sat: 9 AM – 6 PM",          sub: "Sunday: Closed" },
// ];

// const FAQS = [
//   { q: "Do you supply spices in bulk for businesses?",       a: "Yes! We cater to retailers, distributors and food businesses across India. Fill the enquiry form and mention your requirement — our team will get back to you within 24 hours." },
//   { q: "What brands do you manufacture under?",             a: "We produce and market spices under two brands — Sakha (everyday premium staples) and Shrinath Ji (traditional garam masala blends). Both maintain export-ready quality standards." },
//   { q: "Are your spices free from artificial colour?",      a: "Absolutely. Every product is 100% natural — no artificial colour, no preservatives, no fillers. We rely on purity and sourcing quality to deliver vibrant colour and aroma." },
//   { q: "Can I visit your manufacturing facility?",          a: "We welcome scheduled visits from buyers and distributors. Please reach out via the contact form or call us to arrange a facility tour." },
//   { q: "Do you export spices internationally?",             a: "We are export-ready with international food-grade packaging and documentation standards. Contact us to discuss export enquiries." },
// ];

// /* ── Enum values must match backend schema exactly ── */
// const CATEGORY_OPTIONS = [
//   "Bulk / B2B Order",
//   "Distributoeship",   // matches backend enum (typo preserved)
//   "Retail Enquiry",
//   "Export Enquiry",
//   "Product Feedback",
//   "Other",
// ];

// /* ── Initial form state mirrors backend schema fields only ── */
// const INITIAL = { name: "", email: "", phone: "", category: "", message: "" };

// /* ═══════════════════════════════════════════════════════════ */
// const ContactUs = () => {
//   const [form, setForm]           = useState(INITIAL);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);
//   const [error, setError]         = useState("");
//   const [openFaq, setOpenFaq]     = useState(null);

//   const handleChange = (e) => {
//     setError("");
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       /* payload matches backend schema 1-to-1 */
//       await axios.post("localhost:8080/api/contact", {
//         name:     form.name.trim(),
//         email:    form.email.trim(),
//         phone:    form.phone.trim(),
//         category: form.category,
//         message:  form.message.trim(),
//       });
//       setSubmitted(true);
//     } catch (err) {
//       setError(
//         err?.response?.data?.message ||
//         err?.response?.data?.error   ||
//         "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="cu-page page-content">

//       {/* ══ 1. HERO HEADER ══ */}
//       <section className="cu-hero">
//         <div className="cu-hero__bg-text" aria-hidden="true">CONTACT</div>
//         <div className="cu-hero__inner">
//           <span className="cu-hero__tag">✦ Shyam Sakha Industries Pvt. Ltd.</span>
//           <h1 className="cu-hero__title">Let's <em>Connect</em></h1>
//           <p className="cu-hero__sub">
//             Bulk enquiries, partnerships, retail tie-ups or just a hello —
//             we're always happy to hear from you.
//           </p>
//         </div>
//         <div className="cu-hero__wave">
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
//             <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#faf9f6"/>
//           </svg>
//         </div>
//       </section>

//       {/* ══ 2. INFO CARDS ROW ══ */}
//       <section className="cu-cards-row">
//         <div className="cu-cards-row__inner">
//           {INFO_CARDS.map((c, i) => (
//             <div className="cu-info-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
//               <div className="cu-info-card__icon">{c.icon}</div>
//               <div className="cu-info-card__label">{c.label}</div>
//               <div className="cu-info-card__value">{c.value}</div>
//               <div className="cu-info-card__sub">{c.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ══ 3. MAIN — LEFT INFO + RIGHT FORM ══ */}
//       <section className="cu-main">
//         <div className="cu-main__inner">

//           {/* ── Left panel ── */}
//           <aside className="cu-aside">
//             <span className="cu-aside__eyebrow">Get in Touch</span>
//             <h2 className="cu-aside__title">We'd Love to<br /><em>Hear From You</em></h2>
//             <p className="cu-aside__text">
//               Whether you're a distributor, retailer, or home cook curious about
//               our spices — drop us a message and we'll get back within 24 hours.
//             </p>

//             <div className="cu-aside__divider" />

//             <div className="cu-aside__detail">
//               <span className="cu-aside__detail-icon">📞</span>
//               <div>
//                 <div className="cu-aside__detail-label">Call Us</div>
//                 <div className="cu-aside__detail-val">+91 XXXXX XXXXX</div>
//               </div>
//             </div>
//             <div className="cu-aside__detail">
//               <span className="cu-aside__detail-icon">✉️</span>
//               <div>
//                 <div className="cu-aside__detail-label">Email</div>
//                 <div className="cu-aside__detail-val">info@sakhaspiecs.com</div>
//               </div>
//             </div>
//             <div className="cu-aside__detail">
//               <span className="cu-aside__detail-icon">📍</span>
//               <div>
//                 <div className="cu-aside__detail-label">Location</div>
//                 <div className="cu-aside__detail-val">Rajasthan, India</div>
//               </div>
//             </div>

//             <div className="cu-aside__socials">
//               {["📘","📸","💼","🐦"].map((ic, i) => (
//                 <a href="#" className="cu-aside__social" key={i}>{ic}</a>
//               ))}
//             </div>
//           </aside>

//           {/* ── Right — Form ── */}
//           <div className="cu-form-panel">
//             {submitted ? (
//               <div className="cu-success">
//                 <div className="cu-success__circle">✓</div>
//                 <h3 className="cu-success__title">Message Sent!</h3>
//                 <p className="cu-success__text">
//                   Thank you for reaching out. Our team will reply within 24 hours.
//                 </p>
//                 <div className="cu-success__stamp">✦ Sakha Spices — Est. 2021</div>
//               </div>
//             ) : (
//               <>
//                 <div className="cu-form-panel__header">
//                   <h3 className="cu-form-panel__title">Send Us a Message</h3>
//                   <p className="cu-form-panel__sub">All fields are required</p>
//                 </div>

//                 <form className="cu-form" onSubmit={handleSubmit} noValidate>

//                   {/* Name */}
//                   <div className="cu-field">
//                     <label className="cu-field__label" htmlFor="name">Full Name</label>
//                     <input
//                       id="name" name="name" type="text" required
//                       placeholder="e.g. Rajesh Sharma"
//                       className="cu-field__input"
//                       value={form.name} onChange={handleChange}
//                     />
//                   </div>

//                   {/* Email + Phone row */}
//                   <div className="cu-field-row">
//                     <div className="cu-field">
//                       <label className="cu-field__label" htmlFor="email">Email</label>
//                       <input
//                         id="email" name="email" type="email" required
//                         placeholder="raj@example.com"
//                         className="cu-field__input"
//                         value={form.email} onChange={handleChange}
//                       />
//                     </div>
//                     <div className="cu-field">
//                       <label className="cu-field__label" htmlFor="phone">Phone</label>
//                       <input
//                         id="phone" name="phone" type="tel" required
//                         placeholder="+91 98765 43210"
//                         className="cu-field__input"
//                         value={form.phone} onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Category */}
//                   <div className="cu-field">
//                     <label className="cu-field__label" htmlFor="category">Enquiry Type</label>
//                     <div className="cu-field__select-wrap">
//                       <select
//                         id="category" name="category" required
//                         className="cu-field__select"
//                         value={form.category} onChange={handleChange}
//                       >
//                         <option value="" disabled>Select a category</option>
//                         {CATEGORY_OPTIONS.map(opt => (
//                           <option key={opt} value={opt}>{opt}</option>
//                         ))}
//                       </select>
//                       <span className="cu-field__select-arrow">▾</span>
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <div className="cu-field">
//                     <label className="cu-field__label" htmlFor="message">Message</label>
//                     <textarea
//                       id="message" name="message" required
//                       placeholder="Tell us about your requirement — product, quantity, location..."
//                       className="cu-field__textarea"
//                       value={form.message} onChange={handleChange}
//                     />
//                   </div>

//                   {/* Error */}
//                   {error && <div className="cu-form__error">⚠️ {error}</div>}

//                   <button type="submit" className="cu-form__submit" disabled={loading}>
//                     {loading
//                       ? <><span className="cu-form__dot" /><span className="cu-form__dot" /><span className="cu-form__dot" /></>
//                       : "Send Message →"
//                     }
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ══ 4. MAP ══ */}
//       <section className="cu-map">
//         <div className="cu-map__inner">
//           <div className="cu-map__text">
//             <span className="cu-map__eyebrow">Find Us</span>
//             <h2 className="cu-map__title">Visit Our<br /><em>Facility</em></h2>
//             <p className="cu-map__detail">
//               Our manufacturing and dispatch facility is in Rajasthan.
//               We welcome scheduled visits from buyers and partners.
//             </p>
//             <address className="cu-map__address">
//               📍 Shyam Sakha Industries Pvt. Ltd.<br />
//               Rajasthan, India<br /><br />
//               📞 +91 XXXXX XXXXX<br />
//               ✉️ info@sakhaspiecs.com
//             </address>
//           </div>
//           <div className="cu-map__frame">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.674!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
//               allowFullScreen loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Sakha Spices Location"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ══ 5. FAQ ══ */}
//       <section className="cu-faq">
//         <div className="cu-faq__inner">
//           <span className="cu-faq__eyebrow">Common Questions</span>
//           <h2 className="cu-faq__title">Frequently <em>Asked</em></h2>
//           <div className="cu-faq__list">
//             {FAQS.map((faq, i) => (
//               <div key={i} className={`cu-faq-item ${openFaq === i ? "cu-faq-item--open" : ""}`}>
//                 <button
//                   className="cu-faq-item__trigger"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <span>{faq.q}</span>
//                   <span className="cu-faq-item__icon">{openFaq === i ? "−" : "+"}</span>
//                 </button>
//                 <div className="cu-faq-item__body">
//                   <p>{faq.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ContactUs;

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./contactUs.css";

// ── Icons ──────────────────────────────────────────────────
const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e8821a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e8821a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 012 2.09 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e8821a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1a0a00"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── Sub-components ──────────────────────────────────────────
const InfoCard = ({ icon, label, value, href }) => (
  <a href={href} className="info-card">
    <div className="info-card__icon">{icon}</div>
    <div>
      <div className="info-card__label">{label}</div>
      <div className="info-card__value">{value}</div>
    </div>
  </a>
);

const Field = ({ label, children }) => (
  <div className="field-wrap">
    <label className="field-label">{label}</label>
    {children}
  </div>
);

// ── Category options — match backend enum exactly ───────────
const CATEGORIES = [
  "Bulk / B2B Order",
  "Distributoeship", // preserved from backend schema
  "Retail Enquiry",
  "Export Enquiry",
  "Product Feedback",
  "Other",
];

const INITIAL = { name: "", email: "", phone: "", category: "", message: "" };

// ── Main Component ──────────────────────────────────────────
function ContactUs() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim()) e.email = true;
    if (!form.phone.trim()) e.phone = true;
    if (!form.category) e.category = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/message/send", {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        category: form.category,
        message: form.message.trim(),
      });
      toast.success(res.data?.message || "Message sent successfully!");
      setSubmitted(true);
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(
          error.response.data?.message ||
            "Invalid data. Please check your inputs.",
        );
      } else if (error.response?.status === 401) {
        toast.error("Unauthorized! Please log in and try again.");
      } else {
        toast.error("Internal Server Error! Please try again.");
      }
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (key) =>
    `contact-input${errors[key] ? " contact-input--error" : ""}`;

  return (
    <div className="contact-page">
      <div className="contact-blob contact-blob--1" />
      <div className="contact-blob contact-blob--2" />

      <main className="contact-grid" style={{ marginTop: "40px" }}>
        {/* ── Left ── */}
        <div className="contact-left">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow__line" />
            Get in touch
          </span>

          <h1 className="contact-heading">
            Let's start a<br />
            <span className="contact-heading__accent">
              conversation
              <span className="contact-heading__underline" />
            </span>
          </h1>

          <p className="contact-desc">
            Bulk enquiries, retail tie-ups, distributorship or just a hello —
            drop us a message and we'll get back within 24 hours.
          </p>

          <div className="contact-info-cards">
            <InfoCard
              icon={<MailIcon />}
              label="Email"
              value="info@sakhaspiecs.com"
              href="mailto:info@sakhaspiecs.com"
            />
            <InfoCard
              icon={<PhoneIcon />}
              label="Phone"
              value="+91 XXXXX XXXXX"
              href="tel:+91XXXXXXXXXX"
            />
            <InfoCard
              icon={<PinIcon />}
              label="Location"
              value="Rajasthan, India"
              href="#"
            />
          </div>
        </div>

        {/* ── Right ── */}
        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card__top-bar" />

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <CheckIcon />
                </div>
                <h3 className="contact-success__title">Message Sent!</h3>
                <p className="contact-success__body">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  className="contact-submit-btn"
                  style={{ width: "auto", padding: "0.9rem 2rem" }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm(INITIAL);
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-card__title">Send a Message</h2>
                <p className="contact-card__subtitle">
                  Fill out the form and our team will respond shortly.
                </p>

                {/* Name */}
                <Field label="Full Name *">
                  <input
                    className={inputClass("name")}
                    placeholder="Rajesh Sharma"
                    value={form.name}
                    onChange={update("name")}
                    onFocus={() => setErrors((e) => ({ ...e, name: false }))}
                  />
                </Field>

                {/* Email + Phone row */}
                <div className="contact-form-row">
                  <Field label="Email Address *">
                    <input
                      className={inputClass("email")}
                      type="email"
                      placeholder="raj@example.com"
                      value={form.email}
                      onChange={update("email")}
                      onFocus={() => setErrors((e) => ({ ...e, email: false }))}
                    />
                  </Field>
                  <Field label="Phone Number *">
                    <input
                      className={inputClass("phone")}
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={update("phone")}
                      onFocus={() => setErrors((e) => ({ ...e, phone: false }))}
                    />
                  </Field>
                </div>

                {/* Category */}
                <Field label="Enquiry Type *">
                  <div className="contact-select-wrap">
                    <select
                      className={`contact-input contact-input--select${errors.category ? " contact-input--error" : ""}`}
                      value={form.category}
                      onChange={update("category")}
                      onFocus={() =>
                        setErrors((e) => ({ ...e, category: false }))
                      }
                    >
                      <option value="" disabled>
                        Select a category…
                      </option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <span className="contact-select-arrow">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </Field>

                {/* Message */}
                <Field label="Message *">
                  <textarea
                    className={`${inputClass("message")} contact-input--textarea`}
                    placeholder="Tell us about your requirement — product, quantity, location..."
                    value={form.message}
                    onChange={update("message")}
                    onFocus={() => setErrors((e) => ({ ...e, message: false }))}
                  />
                </Field>

                <button
                  className="contact-submit-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  <span className="contact-submit-btn__dot" />
                  {loading ? "Sending…" : "Send Message"}
                  {!loading && <ArrowIcon />}
                </button>
              </>
            )}
          </div>
        </div>
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
}

export default ContactUs;
