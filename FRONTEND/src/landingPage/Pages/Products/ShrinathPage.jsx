// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./products.css";

// /* ── All unique images ── */
// const PRODUCTS = [
//   {
//     img: "https://images.unsplash.com/photo-1612257416648-a6d8ed764c6e?w=700&q=80",
//     category: "Garam Masala", name: "Shrinath Ji Special Garam Masala", badge: "Signature",
//     desc: "A 12-spice slow-roasted blend crafted from a traditional Rajasthani recipe. Rich, warming and ceremonial — the heart of ShrinathJi.",
//     sizes: ["100g", "200g", "500g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80",
//     category: "Whole Spice", name: "Laung (Cloves)", badge: null,
//     desc: "Hand-selected whole cloves with a powerful eugenol aroma. Used in biryanis, teas and traditional masala preparations.",
//     sizes: ["25g", "50g", "100g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=700&q=80",
//     category: "Whole Spice", name: "Elaichi (Green Cardamom)", badge: "Premium",
//     desc: "Fragrant green cardamom pods sourced from high-altitude farms. Essential for mithai, chai and Mughlai cuisine.",
//     sizes: ["25g", "50g", "100g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=700&q=80",
//     category: "Blend", name: "Shrinath Ji Biryani Masala", badge: "Popular",
//     desc: "A layered aromatic blend of 18 spices, precision-ground for perfectly fragrant biryani every time.",
//     sizes: ["50g", "100g", "200g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=80",
//     category: "Blend", name: "Shrinath Ji Meat Masala", badge: null,
//     desc: "Bold and deeply spiced masala blend designed for slow-cooked mutton, chicken and lamb dishes.",
//     sizes: ["100g", "200g", "500g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&q=80",
//     category: "Whole Spice", name: "Kesar (Saffron Threads)", badge: "Rare",
//     desc: "Pure A-grade saffron threads with deep crimson colour and a rich floral aroma. Sourced from premium growers.",
//     sizes: ["1g", "2g", "5g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&q=80",
//     category: "Blend", name: "Shrinath Ji Chai Masala", badge: null,
//     desc: "A warming blend of ginger, cardamom, cinnamon and pepper — crafted for the perfect cup of masala chai.",
//     sizes: ["50g", "100g", "200g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1628621791446-8b35d1cfe580?w=700&q=80",
//     category: "Whole Spice", name: "Dalchini (Cinnamon Sticks)", badge: null,
//     desc: "True Ceylon cinnamon quills with a delicate sweetness and warmth. Prized for both culinary and medicinal use.",
//     sizes: ["50g", "100g", "250g"],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=700&q=80",
//     category: "Blend", name: "Shrinath Ji Pav Bhaji Masala", badge: null,
//     desc: "A tangy, buttery and vibrant spice blend for the iconic Mumbai street food — now brought to your home kitchen.",
//     sizes: ["100g", "200g"],
//   },
// ];

// const CATEGORIES = ["All", "Garam Masala", "Whole Spice", "Blend"];

// const ShrinathPage = () => {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

//   return (
//     <div className="shrinath-page page-content">

//       {/* ── 1. HEADER ── */}
//       <section className="shrinath-header">
//         <div className="shrinath-header__border" />
//         <div className="shrinath-header__inner">
//           <span className="shrinath-header__ornament">✦</span>
//           <p className="shrinath-header__eyebrow">Shyam Sakha Industries Pvt. Ltd. &nbsp;·&nbsp; Traditional Blends</p>

//           <h1 className="shrinath-header__title">Shrinath Ji</h1>
//           <p className="shrinath-header__subtitle">Where Tradition Meets Pure Aroma</p>

//           <div className="shrinath-header__divider">
//             <span className="shrinath-header__divider-line" />
//             <span className="shrinath-header__divider-gem">✦ ✦ ✦</span>
//             <span className="shrinath-header__divider-line" />
//           </div>

//           <p className="shrinath-header__sub">
//             Heritage spice blends crafted from age-old Rajasthani recipes.
//             Slow-roasted, stone-ground, and packed with reverence for tradition.
//           </p>

//           <div className="shrinath-header__stats">
//             <div className="shrinath-stat">
//               <div className="shrinath-stat__num">20+</div>
//               <div className="shrinath-stat__label">Blends</div>
//             </div>
//             <div className="shrinath-stat">
//               <div className="shrinath-stat__num">12</div>
//               <div className="shrinath-stat__label">Spices per Blend</div>
//             </div>
//             <div className="shrinath-stat">
//               <div className="shrinath-stat__num">100%</div>
//               <div className="shrinath-stat__label">Natural</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── 2. FILTER BAR ── */}
//       <div className="shrinath-filters">
//         <div className="shrinath-filters__inner">
//           {CATEGORIES.map(cat => (
//             <button
//               key={cat}
//               className={`shrinath-filter-btn ${active === cat ? "shrinath-filter-btn--active" : ""}`}
//               onClick={() => setActive(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── 3. GRID ── */}
//       <section className="shrinath-grid-section">
//         <div className="shrinath-grid-section__inner">
//           <p className="shrinath-grid-count">{filtered.length} products</p>
//           <div className="shrinath-grid">
//             {filtered.map((p, i) => (
//               <div className="shrinath-card" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
//                 <div className="shrinath-card__img-wrap">
//                   <img src={p.img} alt={p.name} className="shrinath-card__img" />
//                   <div className="shrinath-card__img-overlay" />
//                   {p.badge && <span className="shrinath-card__badge">{p.badge}</span>}
//                 </div>
//                 <div className="shrinath-card__body">
//                   <div className="shrinath-card__rule" />
//                   <div className="shrinath-card__cat">{p.category}</div>
//                   <div className="shrinath-card__name">{p.name}</div>
//                   <p className="shrinath-card__desc">{p.desc}</p>
//                   <div className="shrinath-card__footer">
//                     <div className="shrinath-card__sizes">
//                       {p.sizes.map(s => <span className="shrinath-card__size" key={s}>{s}</span>)}
//                     </div>
//                     <button className="shrinath-card__enquire">Enquire</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 4. HERITAGE BANNER ── */}
//       <section className="shrinath-banner">
//         <div className="shrinath-banner__inner">
//           <span className="shrinath-banner__icon">🪔</span>
//           <h2 className="shrinath-banner__title">Rooted in Tradition</h2>
//           <p className="shrinath-banner__text">
//             Every Shrinath Ji blend honours recipes passed down through generations.
//             For bulk orders, retail partnerships or export enquiries — let's connect.
//           </p>
//           <Link to="/contact-us" className="shrinath-banner__btn">
//             Get in Touch →
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ShrinathPage;


import { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

/* ── Shrinath Ji real product pouch images ── */
const PRODUCTS = [
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Ajwain-1-Pouch.png",
    category: "Whole Spice", name: "Ajwain (Carom Seeds)", badge: null,
    desc: "Sharp and distinctively aromatic carom seeds, cleaned and graded. Widely used in Indian breads and snacks.",
    sizes: ["50g", "100g", "250g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Ajwain-Pouch.png",
    category: "Whole Spice", name: "Ajwain Premium Pack", badge: null,
    desc: "Premium carom seeds in our signature Shrinath Ji pouch. Aromatic, clean and freshness-sealed.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Backing-Soda-1-Pouch.png",
    category: "Baking", name: "Baking Soda", badge: null,
    desc: "Pure food-grade baking soda for leavening, tenderising meats and traditional kitchen uses.",
    sizes: ["100g", "200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Backing-Soda-Pouch.png",
    category: "Baking", name: "Baking Soda Premium Pack", badge: null,
    desc: "Our premium pack of food-grade baking soda — perfectly measured for daily cooking and baking needs.",
    sizes: ["200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Black Pepper-1-Pouch.png",
    category: "Whole Spice", name: "Kali Mirch (Black Pepper)", badge: null,
    desc: "Bold, pungent whole peppercorns graded for uniform size and peak piperine content.",
    sizes: ["50g", "100g", "250g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Black Pepper-Pouch.png",
    category: "Whole Spice", name: "Kali Mirch Premium Pack", badge: "Premium",
    desc: "Export-grade black pepper in our heritage Shrinath Ji pack. Intense aroma and superior heat.",
    sizes: ["100g", "250g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Black-Salt-1-Pouch.png",
    category: "Salt", name: "Kala Namak (Black Salt)", badge: null,
    desc: "Authentic Himalayan black salt with a distinctive sulphurous aroma. Essential for chaat and chaats.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Black-Salt-Pouch.png",
    category: "Salt", name: "Kala Namak Premium Pack", badge: null,
    desc: "Our premium black salt pack — finely ground, rich in minerals, sealed for lasting freshness.",
    sizes: ["200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Coriander-1-Pouch.png",
    category: "Whole Spice", name: "Elaichi (Green Cardamom)", badge: "Premium",
    desc: "Fragrant green cardamom pods sourced from high-altitude farms. Essential for mithai, chai and Mughlai cuisine.",
    sizes: ["25g", "50g", "100g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Coriander-Pouch.png",
    category: "Whole Spice", name: "Elaichi Premium Pack", badge: null,
    desc: "Heritage-packed green cardamom — hand-sorted pods with a full, intense floral fragrance.",
    sizes: ["50g", "100g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Coriander-1-Pouch.png",
    category: "Powder", name: "Dhaniya (Coriander) Powder", badge: null,
    desc: "Slow-roasted coriander seeds milled to a fragrant powder. Rich earthy flavour, zero moisture.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Coriander-Pouch.png",
    category: "Powder", name: "Dhaniya Premium Pack", badge: "Fresh Ground",
    desc: "Our heritage coriander powder — freshly ground at low temperature to preserve every note of aroma.",
    sizes: ["200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Cumin-1-Pouch.png",
    category: "Whole Spice", name: "Whole Jeera (Cumin)", badge: "Best Seller",
    desc: "Hand-cleaned cumin seeds sourced from Rajasthan farms. Intense aroma, superior colour — perfect for tadka.",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Cumin-Pouch.png",
    category: "Whole Spice", name: "Whole Jeera Premium Pack", badge: null,
    desc: "Premium cumin in our signature Shrinath Ji heritage pouch. Farm-sourced, hand-cleaned and sealed fresh.",
    sizes: ["250g", "500g", "1kg"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Fenugreek-1-Pouch.png",
    category: "Whole Spice", name: "Methi Dana (Fenugreek)", badge: null,
    desc: "Clean, dry-sorted fenugreek seeds with characteristic bitterness. Essential for pickles and dals.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Fenugreek-Pouch.png",
    category: "Whole Spice", name: "Methi Dana Premium Pack", badge: null,
    desc: "Heritage-packed fenugreek seeds — moisture-controlled and freshness-sealed for lasting quality.",
    sizes: ["200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Mustard-1-Pouch.png",
    category: "Whole Spice", name: "Rai (Mustard Seeds)", badge: null,
    desc: "Small, sharp mustard seeds with a nutty bite. Cleaned and sorted for superior popping in tadka.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Mustard-Pouch.png",
    category: "Whole Spice", name: "Rai Premium Pack", badge: null,
    desc: "Our premium mustard seed pack — uniform grade, perfectly dried and ready for tempering.",
    sizes: ["200g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Rock-Salt-1-Pouch.png",
    category: "Salt", name: "Sendha Namak (Rock Salt)", badge: null,
    desc: "Pure Himalayan rock salt — mineral-rich and unprocessed. Used in fasts and everyday cooking.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Rock-Salt-Pouch.png",
    category: "Salt", name: "Sendha Namak Premium Pack", badge: null,
    desc: "Our premium rock salt pack — naturally harvested, coarsely ground and sealed for purity.",
    sizes: ["250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Sesame-1-Pouch.png",
    category: "Whole Spice", name: "Til (Sesame Seeds)", badge: null,
    desc: "Clean white sesame seeds, sun-dried and sorted. Rich in natural oils — used in chutneys and sweets.",
    sizes: ["100g", "250g", "500g"],
  },
  {
    img: "/assets/shrinathImages/Shrinathji-Spices-Sesame-Pouch.png",
    category: "Whole Spice", name: "Til Premium Pack", badge: null,
    desc: "Premium sesame seeds in our heritage pouch — naturally gleaming, oil-rich and freshness-locked.",
    sizes: ["200g", "500g"],
  },
];

const CATEGORIES = ["All", "Whole Spice", "Powder", "Salt", "Baking"];

const ShrinathPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <div className="shrinath-page page-content">

      {/* ── 1. HEADER ── */}
      <section className="shrinath-header">
        <div className="shrinath-header__border" />
        <div className="shrinath-header__inner">
          <span className="shrinath-header__ornament">✦</span>
          <p className="shrinath-header__eyebrow">Shyam Sakha Industries Pvt. Ltd. &nbsp;·&nbsp; Traditional Blends</p>

          <h1 className="shrinath-header__title">Shrinath Ji</h1>
          <p className="shrinath-header__subtitle">Where Tradition Meets Pure Aroma</p>

          <div className="shrinath-header__divider">
            <span className="shrinath-header__divider-line" />
            <span className="shrinath-header__divider-gem">✦ ✦ ✦</span>
            <span className="shrinath-header__divider-line" />
          </div>

          <p className="shrinath-header__sub">
            Heritage spice blends crafted from age-old Rajasthani recipes.
            Slow-roasted, stone-ground, and packed with reverence for tradition.
          </p>

          <div className="shrinath-header__stats">
            <div className="shrinath-stat">
              <div className="shrinath-stat__num">20+</div>
              <div className="shrinath-stat__label">Blends</div>
            </div>
            <div className="shrinath-stat">
              <div className="shrinath-stat__num">12</div>
              <div className="shrinath-stat__label">Spices per Blend</div>
            </div>
            <div className="shrinath-stat">
              <div className="shrinath-stat__num">100%</div>
              <div className="shrinath-stat__label">Natural</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FILTER BAR ── */}
      <div className="shrinath-filters">
        <div className="shrinath-filters__inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`shrinath-filter-btn ${active === cat ? "shrinath-filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. GRID ── */}
      <section className="shrinath-grid-section">
        <div className="shrinath-grid-section__inner">
          <p className="shrinath-grid-count">{filtered.length} products</p>
          <div className="shrinath-grid">
            {filtered.map((p, i) => (
              <div className="shrinath-card" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="shrinath-card__img-wrap">
                  <img src={p.img} alt={p.name} className="shrinath-card__img" />
                  <div className="shrinath-card__img-overlay" />
                  {p.badge && <span className="shrinath-card__badge">{p.badge}</span>}
                </div>
                <div className="shrinath-card__body">
                  <div className="shrinath-card__rule" />
                  <div className="shrinath-card__cat">{p.category}</div>
                  <div className="shrinath-card__name">{p.name}</div>
                  <p className="shrinath-card__desc">{p.desc}</p>
                  <div className="shrinath-card__footer">
                    <div className="shrinath-card__sizes">
                      {p.sizes.map(s => <span className="shrinath-card__size" key={s}>{s}</span>)}
                    </div>
                    <button className="shrinath-card__enquire">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HERITAGE BANNER ── */}
      <section className="shrinath-banner">
        <div className="shrinath-banner__inner">
          <span className="shrinath-banner__icon">🪔</span>
          <h2 className="shrinath-banner__title">Rooted in Tradition</h2>
          <p className="shrinath-banner__text">
            Every Shrinath Ji blend honours recipes passed down through generations.
            For bulk orders, retail partnerships or export enquiries — let's connect.
          </p>
          <Link to="/contact-us" className="shrinath-banner__btn">
            Get in Touch →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ShrinathPage;