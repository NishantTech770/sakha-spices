import { Link, useNavigate } from "react-router-dom";
import "./about.css";

/* ── Images from Unsplash ── */
const IMGS = {
  heroBg:    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80",
  story:     "https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=900&q=85",
  storyRnd:  "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
  brand1:    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  brand2:    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80",
};

/* ── Data ── */
const STATS = [
  { num: "2021",  label: "Year Established" },
  { num: "50+",   label: "Team Members" },
  { num: "2",     label: "Premium Brands" },
  { num: "100%",  label: "Pure & Natural" },
];

const VALUES = [
  {
    icon: "🌾",
    title: "Farm Direct Sourcing",
    text: "We work hand-in-hand with farmers across India's finest spice-growing regions — Rajasthan, Kerala, Andhra Pradesh — cutting out middlemen to ensure freshness and fair prices.",
  },
  {
    icon: "🔬",
    title: "Strict Quality Control",
    text: "Every batch undergoes rigorous lab testing and multi-point quality checks before it reaches you. Export-ready standards applied to every product, every time.",
  },
  {
    icon: "✨",
    title: "Purity Promise",
    text: "No artificial colours, no fillers, no adulterants. What you see on the label is exactly what's inside — whole spices cleaned, graded and ground with integrity.",
  },
  {
    icon: "⚙️",
    title: "Modern Technology",
    text: "Our facility uses state-of-the-art cleaning, drying, grading and packaging machinery that preserves the natural aroma, colour and essential oils of every spice.",
  },
  {
    icon: "🌿",
    title: "Hygiene First",
    text: "We maintain food-grade hygiene standards across the entire production floor. Our packaging line is nitrogen-flushed to seal freshness at its peak.",
  },
  {
    icon: "📦",
    title: "Export Ready",
    text: "With international-grade standards and documentation in place, Shyam Sakha Industries is fully equipped to cater to domestic and global spice markets.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "Founded with a Vision",
    text: "Shyam Sakha Industries Pvt. Ltd. was established with a clear mission — to bring purity and consistency to India's spice industry.",
  },
  {
    year: "2022",
    title: "Sakha Brand Launched",
    text: "Our flagship consumer brand Sakha was introduced, offering premium whole spices and powders to households across Rajasthan.",
  },
  {
    year: "2023",
    title: "Shrinath Ji Brand Introduced",
    text: "Honouring sacred tradition, the Shrinath Ji brand was born — a range of garam masala blends crafted from age-old Rajasthani recipes.",
  },
  {
    year: "2024",
    title: "Modern Plant Commissioned",
    text: "Invested in advanced cleaning, grading and nitrogen-flush packaging lines to achieve export-ready quality standards at scale.",
  },
  {
    year: "2025",
    title: "Growing Across India",
    text: "With a team of 50+ professionals and a turnover trajectory of ₹25–100 Crore, we continue to expand our reach and range.",
  },
];

/* ════════════════════════════════════════════
   Component
════════════════════════════════════════════ */
const AboutUs = () => {
  let navigate = useNavigate()

  const SakhaProducts = () =>  {
    navigate("/products/sakha")
  }

  const ShrinathProducts = () =>  {
    navigate("/products/shrinath-ji")
  }
  return (
    <div className="about-page page-content">

      {/* ── 1. HERO ── */}
      <section className="about-hero">
        <img src={IMGS.heroBg} alt="Spices" className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="about-hero__stripe" />
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">✦ Est. 2021 &nbsp;•&nbsp; Shyam Sakha Industries Pvt. Ltd.</p>
          <h1 className="about-hero__title">
            Our Story of<br /><em>Pure Spice</em>
          </h1>
          <p className="about-hero__sub">
            A fast-growing manufacturer rooted in quality, hygiene and the timeless
            tradition of Indian spices.
          </p>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <div className="about-stats">
        <div className="about-stats__inner">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="about-stat__num">{s.num}</div>
              <div className="about-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. STORY ── */}
      <section className="about-story">
        <div className="about-story__inner">

          {/* Image */}
          <div className="about-story__img-wrap">
            <div className="about-story__rotating">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="10" fontFamily="Jost, sans-serif" fontWeight="600"
                  letterSpacing="3.2" fill="#C8410B">
                  <textPath href="#circ">PURE · AUTHENTIC · TRUSTED ·&nbsp;</textPath>
                </text>
              </svg>
            </div>
            <img src={IMGS.story} alt="Our spice facility" className="about-story__img-main" />
            <img src={IMGS.storyRnd} alt="Spice detail" className="about-story__img-pill" />
          </div>

          {/* Text */}
          <div className="about-story__content">
            <div className="about-label">Who We Are</div>
            <h2 className="about-story__title">
              Crafting Spices with<br />
              <span>Passion & Purpose</span>
            </h2>
            <p className="about-story__text">
              <strong>Shyam Sakha Industries Pvt. Ltd.</strong> is a fast-growing and trusted
              manufacturer of premium whole spices and garam masala products. Established in
              <strong> 2021</strong>, we set out with a single-minded focus on purity,
              hygiene and consistency.
            </p>
            <p className="about-story__text">
              We work directly with farmers and use modern cleaning, drying, grading and
              packaging machinery that preserves the natural aroma and quality that Indian
              kitchens deserve. Every spice we produce is a promise — of authenticity,
              of care, of flavour that honours tradition.
            </p>
            <p className="about-story__text">
              Backed by strict quality checks and export-ready standards, our products are
              proudly marketed under two beloved brands — <strong>Sakha</strong> and
              <strong> Shrinath Ji</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. VALUES ── */}
      <section className="about-values">
        <div className="about-values__inner">
          <div className="about-values__header">
            <div className="about-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
              What Drives Us
            </div>
            <h2 className="about-values__title">
              Built on <em>Principles</em>,<br />Delivered with Pride
            </h2>
            <p className="about-values__sub">
              Six pillars that define every decision we make — from sourcing to packaging.
            </p>
          </div>

          <div className="about-values__grid">
            {VALUES.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <div className="value-card__title">{v.title}</div>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TIMELINE ── */}
      <section className="about-journey">
        <div className="about-journey__inner">
          <div className="about-journey__header">
            <div className="about-label" style={{ justifyContent: "center" }}>Our Journey</div>
            <h2 className="about-journey__title">
              Growing, <em>Year by Year</em>
            </h2>
          </div>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="timeline__item" key={i}>
                <div className="timeline__dot" />
                <div className="timeline__year">{t.year}</div>
                <div className="timeline__title">{t.title}</div>
                <p className="timeline__text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BRANDS ── */}
      <section className="about-brands">
        <div className="about-brands__inner">
          <div className="about-brands__header">
            <div className="about-label" style={{ justifyContent: "center" }}>Our Brands</div>
            <h2 className="about-brands__title">
              Two Names, <em>One Standard</em>
            </h2>
          </div>

          <div className="about-brands__grid">
            {/* Sakha */}
            <div className="brand-card" onClick={SakhaProducts}>
              <img src={IMGS.brand1} alt="Sakha Brand" className="brand-card__bg" />
              <div className="brand-card__overlay" />
              <div className="brand-card__content">
                <span className="brand-card__tag">Everyday Essentials</span>
                <div className="brand-card__name">Sakha</div>
                <p className="brand-card__desc">
                  Premium whole spices and powders for the everyday Indian kitchen.
                  Sourced pure, packed fresh, trusted daily.
                </p>
              </div>
            </div>

            {/* Shrinath Ji */}
            <div className="brand-card" onClick={ShrinathProducts}>
              <img src={IMGS.brand2} alt="Shrinath Ji Brand" className="brand-card__bg" />
              <div className="brand-card__overlay" />
              <div className="brand-card__content">
                <span className="brand-card__tag">Traditional Blends</span>
                <div className="brand-card__name">Shrinath Ji</div>
                <p className="brand-card__desc">
                  Sacred garam masala blends crafted from age-old Rajasthani recipes.
                  A tribute to tradition in every pinch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="about-cta">
        <div className="about-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
          Let's Connect
        </div>
        <h2 className="about-cta__title">
          Want to Know <em>More?</em>
        </h2>
        <p className="about-cta__text">
          Whether you're a buyer, distributor or simply curious — we'd love to
          tell you more about what we do and how we do it.
        </p>
        <div className="about-cta__actions">
          <Link to="/contact-us" className="btn-primary">Get in Touch →</Link>
          <Link to="/products/sakha" className="btn-ghost">Explore Products</Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;