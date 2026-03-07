import { useState } from "react";
import "./blog.css";

/* ── All unique Unsplash spice/food images ── */
const IMGS = {
  hero:  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80", // spice flat lay overhead
  feat:  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=1000&q=80", // turmeric roots & powder
  b1:    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80",  // spice farm
  b2:    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&q=80",  // red chilli pile
  b3:    "https://images.unsplash.com/photo-1612257416648-a6d8ed764c6e?w=700&q=80",  // garam masala blend
  b4:    "https://images.unsplash.com/photo-1599909533731-d3b3a85f47ba?w=700&q=80",  // spice packaging quality
  b5:    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&q=80",  // mortar pestle ayurveda
  b6:    "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=700&q=80",  // spice jars storage
};

/* ── Featured Post ── */
const FEATURED = {
  img:      IMGS.feat,
  tag:      "Spice Knowledge",
  date:     "March 2025",
  readTime: "6 min read",
  title:    "Why Stone-Ground Turmeric Is Worlds Apart from Factory Powder",
  excerpt:  "Most turmeric sold today is high-heat milled, stripping away the volatile oils that give it colour, aroma and its celebrated health benefits. We break down exactly what stone-grinding preserves — and why it matters for your kitchen.",
};

/* ── Blog Posts ── */
const BLOGS = [
  {
    img:      IMGS.b1,
    tag:      "Sourcing",
    date:     "Feb 2025",
    readTime: "4 min read",
    title:    "How We Source Directly from Rajasthan's Spice Farms",
    excerpt:  "A behind-the-scenes look at how Shyam Sakha Industries builds direct relationships with farmers to guarantee freshness and traceability in every batch.",
    author:   "Sakha Team",
    init:     "ST",
  },
  {
    img:      IMGS.b2,
    tag:      "Red Chilli",
    date:     "Jan 2025",
    readTime: "5 min read",
    title:    "Decoding Lal Mirch: Which Variety Is Right for Your Dish?",
    excerpt:  "Byadgi, Kashmiri, Teja — India grows dozens of chilli varieties. We explain the differences in heat, colour and flavour to help you pick the right one.",
    author:   "Sakha Team",
    init:     "ST",
  },
  {
    img:      IMGS.b3,
    tag:      "Garam Masala",
    date:     "Dec 2024",
    readTime: "7 min read",
    title:    "The Sacred 12-Spice Blend Behind Shrinath Ji Garam Masala",
    excerpt:  "Every ingredient in our Shrinath Ji blend carries a story rooted in Rajasthani tradition. Here's what goes in, why it goes in, and how it's slow-roasted.",
    author:   "Sakha Team",
    init:     "ST",
  },
  {
    img:      IMGS.b4,
    tag:      "Quality",
    date:     "Nov 2024",
    readTime: "4 min read",
    title:    "What Does 'Export Ready' Actually Mean for a Spice Brand?",
    excerpt:  "We walk through the lab tests, moisture controls and packaging standards that make a spice batch export-ready — and why those same standards benefit you.",
    author:   "Sakha Team",
    init:     "ST",
  },
  {
    img:      IMGS.b5,
    tag:      "Health",
    date:     "Oct 2024",
    readTime: "5 min read",
    title:    "Spices as Medicine: The Ayurvedic Roots of Your Kitchen Staples",
    excerpt:  "Long before they flavoured food, spices like haldi, jeera and ajwain were prescribed as remedies. A look at the ancient science behind everyday ingredients.",
    author:   "Sakha Team",
    init:     "ST",
  },
  {
    img:      IMGS.b6,
    tag:      "Tips",
    date:     "Sep 2024",
    readTime: "3 min read",
    title:    "5 Signs Your Spices Have Lost Their Potency (And What to Do)",
    excerpt:  "Faded colour, flat aroma, dull flavour — your spices are trying to tell you something. Here's how to spot degraded spices and store them properly.",
    author:   "Sakha Team",
    init:     "ST",
  },
];

const CATEGORIES = ["All", "Spice Knowledge", "Sourcing", "Quality", "Health", "Tips", "Garam Masala", "Red Chilli"];

/* ════════════════════════════════════════════════
   Component
════════════════════════════════════════════════ */
const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === "All"
    ? BLOGS
    : BLOGS.filter(b => b.tag === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="blogs-page page-content">

      {/* ── 1. HERO ── */}
      <section className="blogs-hero">
        <img src={IMGS.hero} alt="Spices" className="blogs-hero__bg" />
        <div className="blogs-hero__overlay" />
        <div className="blogs-hero__content">
          <p className="blogs-hero__eyebrow">✦ Sakha Spices &nbsp;•&nbsp; Stories, Tips & Insights</p>
          <h1 className="blogs-hero__title">
            The Spice <em>Journal</em>
          </h1>
        </div>
      </section>

      {/* ── 2. FEATURED POST ── */}
      <section className="blogs-featured">
        <div className="blogs-featured__inner">
          <div className="blogs-featured__header">
            <h2 className="blogs-featured__title">Featured Story</h2>
            <a href="#all-posts" className="blogs-all-link">All Articles →</a>
          </div>

          <div className="featured-card">
            <div className="featured-card__img-wrap">
              <img src={FEATURED.img} alt={FEATURED.title} className="featured-card__img" />
              <div className="featured-card__img-overlay" />
            </div>
            <div className="featured-card__body">
              <div className="featured-card__meta">
                <span className="featured-card__tag">{FEATURED.tag}</span>
                <span className="featured-card__badge">✦ Featured</span>
                <span className="featured-card__date">{FEATURED.date}</span>
              </div>
              <h3 className="featured-card__heading">{FEATURED.title}</h3>
              <p className="featured-card__excerpt">{FEATURED.excerpt}</p>
              <a href="#" className="featured-card__cta">Read Full Article →</a>
              <div className="featured-card__read-time">⏱ {FEATURED.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CATEGORY FILTER + GRID ── */}
      <section className="blogs-grid-section" id="all-posts">
        <div className="blogs-grid-section__inner">

          {/* Category pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.4rem 1.1rem",
                  borderRadius: "50px",
                  border: activeCategory === cat ? "none" : "1px solid rgba(200,65,11,0.25)",
                  background: activeCategory === cat
                    ? "linear-gradient(135deg, #C8410B, #D4A017)"
                    : "transparent",
                  color: activeCategory === cat ? "#fff" : "#7A5C3A",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blogs-grid">
            {filtered.map((b, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-card__img-wrap">
                  <img src={b.img} alt={b.title} className="blog-card__img" />
                  <span className="blog-card__tag">{b.tag}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__date">{b.date}</span>
                    <span className="blog-card__read-time">⏱ {b.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{b.title}</h3>
                  <p className="blog-card__excerpt">{b.excerpt}</p>
                  <div className="blog-card__footer">
                    <div className="blog-card__author">
                      <div className="blog-card__avatar">{b.init}</div>
                      <span className="blog-card__author-name">{b.author}</span>
                    </div>
                    <div className="blog-card__arrow">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🌿</div>
              <p style={{ fontFamily: "'Jost', sans-serif" }}>No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. NEWSLETTER ── */}
      <section className="blogs-newsletter">
        <div className="blogs-newsletter__inner">
          <div className="blogs-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
            Stay Updated
          </div>
          <h2 className="blogs-newsletter__title">
            Fresh Stories,<br /><em>Straight to You</em>
          </h2>
          <p className="blogs-newsletter__text">
            Get new articles about spices, recipes and quality tips delivered
            to your inbox — no spam, just pure flavour.
          </p>

          {subscribed ? (
            <div style={{
              background: "rgba(212,160,23,0.12)",
              border: "1px solid rgba(212,160,23,0.3)",
              borderRadius: "12px",
              padding: "1rem 1.5rem",
              color: "var(--gold-lt)",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.9rem",
            }}>
              ✓ &nbsp;Thank you! You're on the list.
            </div>
          ) : (
            <form className="blogs-newsletter__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="blogs-newsletter__input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="blogs-newsletter__btn">Subscribe</button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blogs;