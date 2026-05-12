import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./contactUs.css";

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

const CATEGORIES = [
  "Bulk / B2B Order",
  "Distributoeship",
  "Retail Enquiry",
  "Export Enquiry",
  "Product Feedback",
  "Other",
];

const INITIAL = { name: "", email: "", phone: "", category: "", message: "" };

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

                <Field label="Full Name *">
                  <input
                    className={inputClass("name")}
                    placeholder="Rajesh Sharma"
                    value={form.name}
                    onChange={update("name")}
                    onFocus={() => setErrors((e) => ({ ...e, name: false }))}
                  />
                </Field>

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
