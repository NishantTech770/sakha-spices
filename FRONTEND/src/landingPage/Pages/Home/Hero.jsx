// import { Link } from "react-router-dom";
// import "./home.css";

// /* ── Unsplash image URLs (spice-themed, free to use) ── */
// const IMGS = {
//   hero:      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=80",
//   legacy:    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=900&q=80",
//   legacyRnd: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
//   prod1:     "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
//   prod2:     "https://images.unsplash.com/photo-1601050690117-94f5f7a08b58?w=600&q=80",
//   prod3:     "https://images.unsplash.com/photo-1628621791446-8b35d1cfe580?w=600&q=80",
//   prod4:     "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80",
//   cta:       "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=1400&q=80",
// };

// /* ── Data ── */
// const PRODUCTS = [
//   {
//     img: IMGS.prod1,
//     tag: "Sakha",
//     brand: "Sakha Range",
//     name: "Haldi Powder",
//     desc: "Stone-ground turmeric with deep colour & earthy warmth.",
//     icon: "🌿",
//   },
//   {
//     img: IMGS.prod2,
//     tag: "Sakha",
//     brand: "Sakha Range",
//     name: "Lal Mirch",
//     desc: "Sun-dried red chillies, bold heat with vibrant colour.",
//     icon: "🌶️",
//   },
//   {
//     img: IMGS.prod3,
//     tag: "Shrinath Ji",
//     brand: "Shrinath Ji Range",
//     name: "Garam Masala",
//     desc: "A sacred blend of 12 whole spices, slow-roasted to perfection.",
//     icon: "✨",
//   },
//   {
//     img: IMGS.prod4,
//     tag: "Shrinath Ji",
//     brand: "Shrinath Ji Range",
//     name: "Dhaniya Powder",
//     desc: "Freshly milled coriander with a citrusy, nutty aroma.",
//     icon: "🪴",
//   },
// ];

// const STEPS = [
//   {
//     num: "01",
//     title: "Sourced from Origin",
//     text: "We trace every spice to its native farmland — Rajasthan, Kerala, Gujarat.",
//   },
//   {
//     num: "02",
//     title: "Cleaned & Graded",
//     text: "Triple-cleaned and hand-sorted to ensure only the finest make the cut.",
//   },
//   {
//     num: "03",
//     title: "Cold-Ground",
//     text: "Low-heat stone grinding preserves volatile oils, colour and natural aroma.",
//   },
//   {
//     num: "04",
//     title: "Sealed Fresh",
//     text: "Nitrogen-flushed packaging locks in freshness from mill to your kitchen.",
//   },
// ];

// const REVIEWS = [
//   {
//     text: "Sakha's Haldi has completely changed my cooking. The colour and aroma are unlike anything I've bought before. Truly authentic.",
//     name: "Priya Sharma",
//     city: "Jaipur, Rajasthan",
//     init: "PS",
//   },
//   {
//     text: "I've been using Shrinath Ji Garam Masala for three years now. There is no substitute — the fragrance alone is worth it.",
//     name: "Rajesh Mehta",
//     city: "Ahmedabad, Gujarat",
//     init: "RM",
//   },
//   {
//     text: "Finally a spice brand that takes purity seriously. No fillers, no artificial colour. My family refuses to use anything else.",
//     name: "Sunita Agarwal",
//     city: "Udaipur, Rajasthan",
//     init: "SA",
//   },
// ];

// const MARQUEE_ITEMS = [
//   "100% Pure Spices", "No Artificial Colours", "Farm to Kitchen",
//   "Stone-Ground Daily", "ISO Certified", "Trusted Since 2005",
//   "100% Pure Spices", "No Artificial Colours", "Farm to Kitchen",
//   "Stone-Ground Daily", "ISO Certified", "Trusted Since 2005",
// ];

// /* ════════════════════════════════════════════════
//    Component
// ════════════════════════════════════════════════ */
// const Home = () => {
//   return (
//     <div className="home">

//       {/* ── 1. HERO ───────────────────────────── */}
//       <section className="hero">
//         <div className="hero__left">
//           <p className="hero__eyebrow">✦ Sakha Spices &amp; Shrinath Ji &nbsp;•&nbsp; Est. 2005</p>

//           <h1 className="hero__title">
//             Where <em>Tradition</em><br />
//             Meets the<br />
//             Finest Spice
//           </h1>

//           <p className="hero__desc">
//             Two beloved brands. One promise — spices as pure as your grandmother
//             used, grown in India's finest farms and ground fresh for your kitchen.
//           </p>

//           <div className="hero__actions">
//             <Link to="/products/sakha" className="btn-primary">
//               Explore Products →
//             </Link>
//             <Link to="/about-us" className="btn-ghost">
//               Our Story
//             </Link>
//           </div>

//           <div className="hero__stats">
//             <div>
//               <div className="hero__stat-num">18+</div>
//               <div className="hero__stat-label">Years of Trust</div>
//             </div>
//             <div>
//               <div className="hero__stat-num">50+</div>
//               <div className="hero__stat-label">Spice Varieties</div>
//             </div>
//             <div>
//               <div className="hero__stat-num">2</div>
//               <div className="hero__stat-label">Premium Brands</div>
//             </div>
//           </div>
//         </div>

//         <div className="hero__right">
//           <img src={IMGS.hero} alt="Premium Indian spices" className="hero__img-main" />
//           <div className="hero__img-overlay" />
//           <div className="hero__badge">
//             <div className="hero__badge-icon">🏆</div>
//             <div>
//               <div className="hero__badge-title">ISO 9001 Certified</div>
//               <div className="hero__badge-sub">Quality Guaranteed</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── 2. MARQUEE ────────────────────────── */}
//       <div className="marquee-strip">
//         <div className="marquee-track">
//           {MARQUEE_ITEMS.map((item, i) => (
//             <span className="marquee-item" key={i}>
//               <span className="marquee-dot" />
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ── 3. LEGACY / ABOUT ─────────────────── */}
//       <section className="legacy">
//         <div className="legacy__inner">
//           <div className="legacy__img-wrap">
//             {/* Rotating text circle */}
//             <div className="legacy__circle-text">
//               <svg viewBox="0 0 100 100" width="100" height="100">
//                 <defs>
//                   <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
//                 </defs>
//                 <text fontSize="10.5" fontFamily="Jost, sans-serif" fontWeight="600" letterSpacing="3.5">
//                   <textPath href="#circle">PURE · AUTHENTIC · TRADITIONAL ·&nbsp;</textPath>
//                 </text>
//               </svg>
//             </div>
//             <img src={IMGS.legacy} alt="Spices at origin" className="legacy__img-main" />
//             <img src={IMGS.legacyRnd} alt="Spice detail" className="legacy__img-accent" />
//           </div>

//           <div className="legacy__content">
//             <div className="section-label">Our Heritage</div>
//             <h2 className="legacy__title">
//               Rooted in the<br /><span>Flavours of India</span>
//             </h2>
//             <p className="legacy__text">
//               Sakha Spices was born from a simple belief — that every Indian kitchen
//               deserves spices sourced with integrity and milled with care. Over 18 years
//               we've built two brand pillars that homemakers across Rajasthan trust.
//             </p>
//             <p className="legacy__text">
//               <strong>Sakha</strong> delivers everyday staples with premium quality.
//               <strong> Shrinath Ji</strong> honours sacred tradition through blends
//               crafted from age-old Rajasthani recipes.
//             </p>

//             <div className="legacy__features">
//               {[
//                 "Sourced directly from origin farms",
//                 "Zero artificial colour or preservatives",
//                 "Stone-ground to retain natural oils",
//                 "Nitrogen-sealed for lasting freshness",
//               ].map((f, i) => (
//                 <div className="legacy__feature" key={i}>
//                   <span className="legacy__feature-dot" />
//                   {f}
//                 </div>
//               ))}
//             </div>

//             <Link to="/about-us" className="btn-primary" style={{ display: "inline-flex", marginTop: "0.5rem" }}>
//               Read Our Story →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── 4. PRODUCTS ───────────────────────── */}
//       <section className="products">
//         <div className="products__inner">
//           <div className="products__header">
//             <div>
//               <div className="section-label" style={{ color: "var(--gold-lt)" }}>
//                 Our Range
//               </div>
//               <h2 className="products__title">
//                 Two Brands,<br /><em>One Standard</em> of Purity
//               </h2>
//             </div>
//             <Link to="/products/sakha" className="products__link">
//               View All Products →
//             </Link>
//           </div>

//           <div className="products__grid">
//             {PRODUCTS.map((p, i) => (
//               <div className="product-card" key={i}>
//                 <div className="product-card__img-wrap">
//                   <img src={p.img} alt={p.name} className="product-card__img" />
//                   <span className="product-card__tag">{p.tag}</span>
//                 </div>
//                 <div className="product-card__body">
//                   <div className="product-card__brand">{p.brand}</div>
//                   <div className="product-card__name">{p.name}</div>
//                   <div className="product-card__desc">{p.desc}</div>
//                   <div className="product-card__footer">
//                     <span className="product-card__cta">
//                       Explore →
//                     </span>
//                     <span className="product-card__icon">{p.icon}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 5. PROCESS ────────────────────────── */}
//       <section className="process">
//         <div className="process__inner">
//           <div className="process__header">
//             <div className="section-label" style={{ justifyContent: "center" }}>How We Work</div>
//             <h2 className="process__title">
//               From Farm to Your<br /><em>Kitchen, Pure</em>
//             </h2>
//             <p className="process__sub">
//               Every packet of Sakha Spices passes through a rigorous
//               4-step journey to ensure what reaches you is flawless.
//             </p>
//           </div>

//           <div className="process__steps">
//             {STEPS.map((s, i) => (
//               <div className="process__step" key={i}>
//                 <div className="process__step-num">{s.num}</div>
//                 <div className="process__step-title">{s.title}</div>
//                 <p className="process__step-text">{s.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 6. TESTIMONIALS ───────────────────── */}
//       <section className="testimonials">
//         <div className="testimonials__inner">
//           <div className="testimonials__header">
//             <div className="section-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
//               Happy Kitchens
//             </div>
//             <h2 className="testimonials__title">
//               What Our Families <em>Say</em>
//             </h2>
//           </div>

//           <div className="testimonials__grid">
//             {REVIEWS.map((r, i) => (
//               <div className="testi-card" key={i}>
//                 <div className="testi-card__quote">"</div>
//                 <div className="testi-card__stars">★★★★★</div>
//                 <p className="testi-card__text">{r.text}</p>
//                 <div className="testi-card__author">
//                   <div className="testi-card__avatar">{r.init}</div>
//                   <div>
//                     <div className="testi-card__name">{r.name}</div>
//                     <div className="testi-card__city">{r.city}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 7. CTA BANNER ─────────────────────── */}
//       <section className="cta-banner">
//         <img src={IMGS.cta} alt="Spices background" className="cta-banner__bg" />
//         <div className="cta-banner__overlay" />
//         <div className="cta-banner__content">
//           <div className="section-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
//             Get in Touch
//           </div>
//           <h2 className="cta-banner__title">
//             Ready to Taste<br /><em>True Purity?</em>
//           </h2>
//           <p className="cta-banner__text">
//             Whether you're a home cook or a business buyer, we'd love to
//             hear from you. Reach out and let's bring authentic flavour to your table.
//           </p>
//           <div className="cta-banner__actions">
//             <Link to="/contact-us" className="btn-primary">
//               Contact Us →
//             </Link>
//             <Link to="/products/sakha" className="btn-ghost">
//               Browse Products
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import "./home.css";

/* ── Unsplash image URLs ── */
const IMGS = {
  hero:      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=80",
  legacy:    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=900&q=80",
  legacyRnd: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
  prod1:     "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
  prod2:     "https://images.openai.com/static-rsc-3/_m3VY1RH0wvRkCxjhtQyr2Kutr8pCok_WGEnFHUSwHp5JazXGK0e-pya3QJ6W_JIDI4VUfmQ5MrCQw8frRzIt0U8OuSxaEnrayI4lXMOR-k?purpose=inline",
  prod3:     "https://images.openai.com/static-rsc-3/t9LqSTAQWZE2BFD44cQ1bZ7c2CrViFKx4D0wsgiNvmLp_IG5NW4k-R0BwPNHnsRC5TcQiMItT2XqkCKuhnKWhWFtv-cDlEI8jFr7p8sMqa0?purpose=inline",
  prod4:     "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80",
  cta:       "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=1400&q=80",
};

const PRODUCTS = [
  { img: IMGS.prod1, tag: "Sakha",       brand: "Sakha Range",       name: "Haldi Powder",  desc: "Stone-ground turmeric with deep colour & earthy warmth.",              icon: "🌿" },
  { img: IMGS.prod2, tag: "Sakha",       brand: "Sakha Range",       name: "Lal Mirch",     desc: "Sun-dried red chillies, bold heat with vibrant colour.",               icon: "🌶️" },
  { img: IMGS.prod3, tag: "Shrinath Ji", brand: "Shrinath Ji Range", name: "Garam Masala",  desc: "A sacred blend of 12 whole spices, slow-roasted to perfection.",      icon: "✨" },
  { img: IMGS.prod4, tag: "Shrinath Ji", brand: "Shrinath Ji Range", name: "Dhaniya Powder",desc: "Freshly milled coriander with a citrusy, nutty aroma.",               icon: "🪴" },
];

const PROCESS_STEPS = [
  { icon: "🌾", num: "01", title: "Farmer Sourcing",               desc: "We partner directly with verified farmers across Rajasthan, Kerala and Gujarat to ensure origin-authentic produce." },
  { icon: "🤝", num: "02", title: "Direct Farm Procurement",       desc: "Spices are procured straight from farms — no middlemen, no compromise on freshness or traceability." },
  { icon: "🔍", num: "03", title: "Raw Material Inspection",       desc: "Every incoming batch undergoes rigorous sampling and lab-grade inspection before entering our facility." },
  { icon: "🧹", num: "04", title: "Cleaning & Dust Removal",       desc: "Multi-stage mechanical cleaning removes dust, foreign particles and impurities with precision machinery." },
  { icon: "⚖️", num: "05", title: "Sorting & Grade Segregation",   desc: "Spices are sorted by size, colour and quality grade to ensure only the finest move to the next stage." },
  { icon: "☀️", num: "06", title: "Drying & Moisture Control",     desc: "Controlled drying brings moisture to optimal levels, preserving aroma and preventing microbial growth." },
  { icon: "🧪", num: "07", title: "Quality Testing & Batch Approval", desc: "Each batch is tested for colour value, aroma potency and purity before it receives our QC approval stamp." },
  { icon: "📦", num: "08", title: "Hygienic Packing & Sealing",    desc: "Nitrogen-flushed, food-grade packing in our hygiene-controlled facility locks freshness at its peak." },
  { icon: "🏭", num: "09", title: "Warehouse Storage",             desc: "Finished goods are stored in temperature and humidity-controlled warehouses to maintain shelf quality." },
  { icon: "🚚", num: "10", title: "Branded Dispatch",              desc: "Orders are dispatched under the Sakha or Shrinath Ji brand, ready for retail shelves across India." },
];

const REVIEWS = [
  { text: "Sakha's Haldi has completely changed my cooking. The colour and aroma are unlike anything I've bought before. Truly authentic.", name: "Priya Sharma",   city: "Jaipur, Rajasthan",    init: "PS" },
  { text: "I've been using Shrinath Ji Garam Masala for three years now. There is no substitute — the fragrance alone is worth it.",       name: "Rajesh Mehta",   city: "Ahmedabad, Gujarat",   init: "RM" },
  { text: "Finally a spice brand that takes purity seriously. No fillers, no artificial colour. My family refuses to use anything else.",   name: "Sunita Agarwal", city: "Udaipur, Rajasthan",   init: "SA" },
];

const MARQUEE_ITEMS = [
  "100% Pure Spices", "No Artificial Colours", "Farm to Kitchen",
  "Stone-Ground Daily", "ISO Certified", "Trusted Since 2005",
  "100% Pure Spices", "No Artificial Colours", "Farm to Kitchen",
  "Stone-Ground Daily", "ISO Certified", "Trusted Since 2005",
];

/* ════════════════════════════════════════════════ */
const Home = () => {
  return (
    <div className="home">

      {/* ── 1. HERO ── */}
      <section className="hero">
        <div className="hero__left">
          <p className="hero__eyebrow">✦ Sakha Spices &amp; Shrinath Ji &nbsp;•&nbsp; Est. 2021</p>
          <h1 className="hero__title">
            Where <em>Tradition</em><br />
            Meets the<br />
            Finest Spice
          </h1>
          <p className="hero__desc">
            Two beloved brands. One promise — spices as pure as your grandmother
            used, grown in India's finest farms and ground fresh for your kitchen.
          </p>
          <div className="hero__actions">
            <Link to="/products/sakha" className="btn-primary">Explore Products →</Link>
            <Link to="/about-us"       className="btn-ghost">Our Story</Link>
          </div>
          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">2021</div>
              <div className="hero__stat-label">Est. Year</div>
            </div>
            <div>
              <div className="hero__stat-num">50+</div>
              <div className="hero__stat-label">Spice Varieties</div>
            </div>
            <div>
              <div className="hero__stat-num">2</div>
              <div className="hero__stat-label">Premium Brands</div>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img src={IMGS.hero} alt="Premium Indian spices" className="hero__img-main" />
          <div className="hero__img-overlay" />
          <div className="hero__badge">
            <div className="hero__badge-icon">🏆</div>
            <div>
              <div className="hero__badge-title">Export Ready Quality</div>
              <div className="hero__badge-sub">Purity Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. LEGACY / ABOUT ── */}
      <section className="legacy">
        <div className="legacy__inner">
          <div className="legacy__img-wrap">
            <div className="legacy__circle-text">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="10.5" fontFamily="Jost, sans-serif" fontWeight="600" letterSpacing="3.5">
                  <textPath href="#circle">PURE · AUTHENTIC · TRADITIONAL ·&nbsp;</textPath>
                </text>
              </svg>
            </div>
            <img src={IMGS.legacy}    alt="Spices at origin" className="legacy__img-main" />
            <img src={IMGS.legacyRnd} alt="Spice detail"     className="legacy__img-accent" />
          </div>

          <div className="legacy__content">
            <div className="section-label">Our Heritage</div>
            <h2 className="legacy__title">
              Rooted in the<br /><span>Flavours of India</span>
            </h2>
            <p className="legacy__text">
              Shyam Sakha Industries Pvt. Ltd. was established in 2021 with a clear vision —
              to bring purity and consistency to India's spice industry. We work directly with
              farmers and use modern machinery that preserves the natural aroma and quality.
            </p>
            <p className="legacy__text">
              <strong>Sakha</strong> delivers everyday staples with premium quality.
              <strong> Shrinath Ji</strong> honours sacred tradition through blends
              crafted from age-old Rajasthani recipes.
            </p>
            <div className="legacy__features">
              {[
                "Sourced directly from origin farms",
                "Zero artificial colour or preservatives",
                "Stone-ground to retain natural oils",
                "Nitrogen-sealed for lasting freshness",
              ].map((f, i) => (
                <div className="legacy__feature" key={i}>
                  <span className="legacy__feature-dot" />
                  {f}
                </div>
              ))}
            </div>
            <Link to="/about-us" className="btn-primary" style={{ display: "inline-flex", marginTop: "0.5rem" }}>
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTS ── */}
      <section className="products">
        <div className="products__inner">
          <div className="products__header">
            <div>
              <div className="section-label" style={{ color: "var(--gold-lt)" }}>Our Range</div>
              <h2 className="products__title">
                Two Brands,<br /><em>One Standard</em> of Purity
              </h2>
            </div>
            <Link to="/products/sakha" className="products__link">View All Products →</Link>
          </div>
          <div className="products__grid">
            {PRODUCTS.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card__img-wrap">
                  <img src={p.img} alt={p.name} className="product-card__img" />
                  <span className="product-card__tag">{p.tag}</span>
                </div>
                <div className="product-card__body">
                  <div className="product-card__brand">{p.brand}</div>
                  <div className="product-card__name">{p.name}</div>
                  <div className="product-card__desc">{p.desc}</div>
                  <div className="product-card__footer">
                    <span className="product-card__cta">Explore →</span>
                    <span className="product-card__icon">{p.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MANUFACTURING PROCESS ── */}
      <section className="process">
        <div className="process__inner">
          <div className="process__header">
            <div className="section-label" style={{ justifyContent: "center" }}>
              From Farm to Brand
            </div>
            <h2 className="process__title">
              Our <em>Manufacturing</em><br />Process
            </h2>
            <p className="process__sub">
              Every packet you open has travelled through a precise 10-step journey —
              from a farmer's field to your kitchen shelf.
            </p>
          </div>

          {/* Timeline-style grid */}
          <div className="process__timeline">
            {PROCESS_STEPS.map((s, i) => (
              <div className="process__tl-item" key={i}>
                {/* connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="process__tl-connector" />
                )}
                <div className="process__tl-left">
                  <div className="process__tl-num">{s.num}</div>
                </div>
                <div className="process__tl-body">
                  <div className="process__tl-icon">{s.icon}</div>
                  <div>
                    <div className="process__tl-title">{s.title}</div>
                    <p className="process__tl-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <div className="testimonials__header">
            <div className="section-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
              Happy Kitchens
            </div>
            <h2 className="testimonials__title">What Our Families <em>Say</em></h2>
          </div>
          <div className="testimonials__grid">
            {REVIEWS.map((r, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-card__quote">"</div>
                <div className="testi-card__stars">★★★★★</div>
                <p className="testi-card__text">{r.text}</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">{r.init}</div>
                  <div>
                    <div className="testi-card__name">{r.name}</div>
                    <div className="testi-card__city">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ── */}
      <section className="cta-banner">
        <img src={IMGS.cta} alt="Spices background" className="cta-banner__bg" />
        <div className="cta-banner__overlay" />
        <div className="cta-banner__content">
          <div className="section-label" style={{ color: "var(--gold-lt)", justifyContent: "center" }}>
            Get in Touch
          </div>
          <h2 className="cta-banner__title">
            Ready to Taste<br /><em>True Purity?</em>
          </h2>
          <p className="cta-banner__text">
            Whether you're a home cook or a business buyer, we'd love to
            hear from you. Reach out and let's bring authentic flavour to your table.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact-us"     className="btn-primary">Contact Us →</Link>
            <Link to="/products/sakha" className="btn-ghost">Browse Products</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;