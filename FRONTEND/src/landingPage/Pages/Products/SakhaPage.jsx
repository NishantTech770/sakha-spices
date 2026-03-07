// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./products.css";

// /* ── Unique Unsplash images for each product ── */
// const PRODUCTS = [
//   {
//     img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
//     category: "Whole Spice", name: "Whole Jeera (Cumin)", badge: "Best Seller",
//     desc: "Hand-cleaned cumin seeds sourced from Rajasthan farms. Intense aroma, superior colour — perfect for tadka and biryanis.",
//     sizes: ["100g", "250g", "500g", "1kg"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
//     category: "Powder", name: "Lal Mirch Powder", badge: "Hot Pick",
//     desc: "Stone-ground red chilli powder with deep colour and balanced heat. No fillers, no artificial colour.",
//     sizes: ["100g", "200g", "500g"], pure: "No Additives",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80",
//     category: "Powder", name: "Haldi (Turmeric) Powder", badge: "Pure",
//     desc: "High-curcumin turmeric milled at low temperature to preserve volatile oils, colour and medicinal value.",
//     sizes: ["100g", "250g", "500g", "1kg"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1599909533731-d3b3a85f47ba?w=600&q=80",
//     category: "Powder", name: "Dhaniya (Coriander) Powder", badge: "Fresh Ground",
//     desc: "Slow-roasted coriander seeds milled to a fragrant powder. Rich earthy flavour, zero moisture.",
//     sizes: ["100g", "250g", "500g"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80",
//     category: "Whole Spice", name: "Kali Mirch (Black Pepper)", badge: null,
//     desc: "Bold, pungent whole peppercorns sourced and graded for uniform size and peak piperine content.",
//     sizes: ["50g", "100g", "250g"], pure: "Export Grade",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
//     category: "Whole Spice", name: "Methi Dana (Fenugreek)", badge: null,
//     desc: "Clean, dry-sorted fenugreek seeds with characteristic bitterness. Essential for pickles and dals.",
//     sizes: ["100g", "250g", "500g"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
//     category: "Blend", name: "Sakha Kitchen King Masala", badge: "New",
//     desc: "An everyday all-purpose masala blend, perfectly balanced for vegetables, paneer and curries.",
//     sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1601050690117-94f5f7a08b58?w=600&q=80",
//     category: "Blend", name: "Sakha Chaat Masala", badge: null,
//     desc: "Tangy, spicy and aromatic — our chaat masala brings the taste of street food to your home kitchen.",
//     sizes: ["50g", "100g", "200g"], pure: "No Additives",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1628621791446-8b35d1cfe580?w=600&q=80",
//     category: "Whole Spice", name: "Ajwain (Carom Seeds)", badge: null,
//     desc: "Sharp and distinctively aromatic carom seeds, cleaned and graded. Widely used in Indian breads and snacks.",
//     sizes: ["50g", "100g", "250g"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80",
//     category: "Powder", name: "Amchur (Dry Mango) Powder", badge: null,
//     desc: "Sun-dried raw mango powder with a bright sour punch. Adds depth to marinades, chutneys and curries.",
//     sizes: ["100g", "200g"], pure: "100% Pure",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1612257416648-a6d8ed764c6e?w=600&q=80",
//     category: "Blend", name: "Sakha Sabzi Masala", badge: null,
//     desc: "A daily-use vegetable masala crafted for North Indian home cooking — rich, warming and aromatic.",
//     sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
//     category: "Whole Spice", name: "Rai (Mustard Seeds)", badge: null,
//     desc: "Small, sharp mustard seeds with a nutty bite. Cleaned and sorted for superior popping performance in tadka.",
//     sizes: ["100g", "250g", "500g"], pure: "100% Pure",
//   },
// ];

// const CATEGORIES = ["All", "Whole Spice", "Powder", "Blend"];

// const SakhaPage = () => {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

//   return (
//     <div className="sakha-page page-content">

//       {/* ── 1. HEADER ── */}
//       <section className="sakha-header">
//         <div className="sakha-header__inner">
//           <div className="sakha-header__left">
//             <div className="sakha-header__eyebrow">🌿 Sakha Brand &nbsp;·&nbsp; Shyam Sakha Industries</div>
//             <h1 className="sakha-header__title">
//               Sakha
//               <em>Spices</em>
//             </h1>
//             <p className="sakha-header__sub">
//               Everyday premium spices — sourced directly from farms,
//               cleaned, graded and packed with care. Pure. Simple. Trusted.
//             </p>
//           </div>

//           <div className="sakha-header__stats">
//             <div>
//               <div className="sakha-stat__num">30+</div>
//               <div className="sakha-stat__label">Products</div>
//             </div>
//             <div>
//               <div className="sakha-stat__num">100%</div>
//               <div className="sakha-stat__label">Pure</div>
//             </div>
//             <div>
//               <div className="sakha-stat__num">2021</div>
//               <div className="sakha-stat__label">Est.</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── 2. FILTER BAR ── */}
//       <div className="sakha-filters">
//         <div className="sakha-filters__inner">
//           {CATEGORIES.map(cat => (
//             <button
//               key={cat}
//               className={`sakha-filter-btn ${active === cat ? "sakha-filter-btn--active" : ""}`}
//               onClick={() => setActive(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── 3. GRID ── */}
//       <section className="sakha-grid-section">
//         <div className="sakha-grid-section__inner">
//           <p className="sakha-grid-count">{filtered.length} products</p>
//           <div className="sakha-grid">
//             {filtered.map((p, i) => (
//               <div className="sakha-card" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
//                 <div className="sakha-card__img-wrap">
//                   <img src={p.img} alt={p.name} className="sakha-card__img" />
//                   {p.badge && <span className="sakha-card__badge">{p.badge}</span>}
//                   <span className="sakha-card__pure">{p.pure}</span>
//                 </div>
//                 <div className="sakha-card__body">
//                   <div className="sakha-card__cat">{p.category}</div>
//                   <div className="sakha-card__name">{p.name}</div>
//                   <p className="sakha-card__desc">{p.desc}</p>
//                   <div className="sakha-card__footer">
//                     <div className="sakha-card__sizes">
//                       {p.sizes.map(s => <span className="sakha-card__size" key={s}>{s}</span>)}
//                     </div>
//                     <button className="sakha-card__enquire">Enquire</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── 4. CTA ── */}
//       <section className="sakha-cta">
//         <div className="sakha-cta__inner">
//           <h2 className="sakha-cta__title">Need a <em>Bulk Order?</em></h2>
//           <p className="sakha-cta__text">
//             We supply retailers, distributors and food businesses across India.
//             Get in touch and our team will respond within 24 hours.
//           </p>
//           <Link to="/contact-us" className="sakha-cta__btn">Contact Us →</Link>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default SakhaPage;


import { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

/* ── Sakha real product pouch images ── */
const PRODUCTS = [
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-2-Pouch.png",
    category: "Whole Spice", name: "Whole Jeera (Cumin)", badge: "Best Seller",
    desc: "Hand-cleaned cumin seeds sourced from Rajasthan farms. Intense aroma, superior colour — perfect for tadka and biryanis.",
    sizes: ["100g", "250g", "500g", "1kg"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-3-Pouch.png",
    category: "Whole Spice", name: "Kali Mirch (Black Pepper)", badge: null,
    desc: "Bold, pungent whole peppercorns sourced and graded for uniform size and peak piperine content.",
    sizes: ["50g", "100g", "250g"], pure: "Export Grade",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-4-Pouch.png",
    category: "Whole Spice", name: "Laung (Cloves)", badge: null,
    desc: "Hand-selected whole cloves with a powerful eugenol aroma. Used in biryanis, teas and traditional masala preparations.",
    sizes: ["25g", "50g", "100g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-5-Pouch.png",
    category: "Whole Spice", name: "Ajwain (Carom Seeds)", badge: null,
    desc: "Sharp and distinctively aromatic carom seeds, cleaned and graded. Widely used in Indian breads and snacks.",
    sizes: ["50g", "100g", "250g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-6-Pouch.png",
    category: "Whole Spice", name: "Methi Dana (Fenugreek)", badge: null,
    desc: "Clean, dry-sorted fenugreek seeds with characteristic bitterness. Essential for pickles and dals.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-7-Pouch.png",
    category: "Whole Spice", name: "Rai (Mustard Seeds)", badge: null,
    desc: "Small, sharp mustard seeds with a nutty bite. Cleaned and sorted for superior popping performance in tadka.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-8-Pouch.png",
    category: "Whole Spice", name: "Elaichi (Cardamom)", badge: "Premium",
    desc: "Fragrant green cardamom pods sourced from high-altitude farms. Essential for mithai, chai and Mughlai cuisine.",
    sizes: ["25g", "50g", "100g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-9-Pouch.png",
    category: "Whole Spice", name: "Dalchini (Cinnamon Sticks)", badge: null,
    desc: "True Ceylon cinnamon quills with a delicate sweetness and warmth. Prized for both culinary and medicinal use.",
    sizes: ["50g", "100g", "250g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-10-Pouch.png",
    category: "Powder", name: "Lal Mirch Powder", badge: "Hot Pick",
    desc: "Stone-ground red chilli powder with deep colour and balanced heat. No fillers, no artificial colour.",
    sizes: ["100g", "200g", "500g"], pure: "No Additives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-11-Pouch.png",
    category: "Powder", name: "Haldi (Turmeric) Powder", badge: "Pure",
    desc: "High-curcumin turmeric milled at low temperature to preserve volatile oils, colour and medicinal value.",
    sizes: ["100g", "250g", "500g", "1kg"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-12-Pouch.png",
    category: "Powder", name: "Dhaniya (Coriander) Powder", badge: "Fresh Ground",
    desc: "Slow-roasted coriander seeds milled to a fragrant powder. Rich earthy flavour, zero moisture.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-13-Pouch.png",
    category: "Powder", name: "Amchur (Dry Mango) Powder", badge: null,
    desc: "Sun-dried raw mango powder with a bright sour punch. Adds depth to marinades, chutneys and curries.",
    sizes: ["100g", "200g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-14-Pouch.png",
    category: "Powder", name: "Jeera (Cumin) Powder", badge: null,
    desc: "Freshly ground cumin powder with an earthy, warm aroma. A pantry essential for everyday Indian cooking.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-15-Pouch.png",
    category: "Powder", name: "Kali Mirch (Black Pepper) Powder", badge: null,
    desc: "Freshly milled black pepper powder — pungent, sharp and full of natural piperine. No blending, no fillers.",
    sizes: ["50g", "100g", "250g"], pure: "Export Grade",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-16-Pouch.png",
    category: "Blend", name: "Sakha Kitchen King Masala", badge: "New",
    desc: "An everyday all-purpose masala blend, perfectly balanced for vegetables, paneer and curries.",
    sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-17-Pouch.png",
    category: "Blend", name: "Sakha Chaat Masala", badge: null,
    desc: "Tangy, spicy and aromatic — our chaat masala brings the taste of street food to your home kitchen.",
    sizes: ["50g", "100g", "200g"], pure: "No Additives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-18-Pouch.png",
    category: "Blend", name: "Sakha Sabzi Masala", badge: null,
    desc: "A daily-use vegetable masala crafted for North Indian home cooking — rich, warming and aromatic.",
    sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-19-Pouch.png",
    category: "Blend", name: "Sakha Garam Masala", badge: null,
    desc: "A balanced, warming garam masala blend of 10 slow-roasted spices. Perfect finishing touch for any dish.",
    sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-20-Pouch.png",
    category: "Blend", name: "Sakha Biryani Masala", badge: "Popular",
    desc: "An aromatic blend of 16 spices precision-ground for perfectly fragrant biryani every time.",
    sizes: ["50g", "100g", "200g"], pure: "No Additives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-21-Pouch.png",
    category: "Blend", name: "Sakha Chai Masala", badge: null,
    desc: "A warming blend of ginger, cardamom, cinnamon and pepper — crafted for the perfect cup of masala chai.",
    sizes: ["50g", "100g", "200g"], pure: "No Preservatives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-22-Pouch.png",
    category: "Blend", name: "Sakha Pav Bhaji Masala", badge: null,
    desc: "A tangy, buttery and vibrant spice blend for the iconic Mumbai street food — now in your home kitchen.",
    sizes: ["100g", "200g"], pure: "No Additives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-23-Pouch.png",
    category: "Blend", name: "Sakha Meat Masala", badge: null,
    desc: "Bold and deeply spiced masala blend designed for slow-cooked mutton, chicken and lamb dishes.",
    sizes: ["100g", "200g", "500g"], pure: "No Preservatives",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-24-Pouch.png",
    category: "Whole Spice", name: "Til (Sesame Seeds)", badge: null,
    desc: "Clean white sesame seeds, sun-dried and sorted. Rich in natural oils — used in chutneys, sweets and breads.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
  {
    img: "/assets/sakhaImages/Sakha-100g-Q-13-10-2023-25-Pouch.png",
    category: "Whole Spice", name: "Saunf (Fennel Seeds)", badge: null,
    desc: "Plump, aromatic fennel seeds with a natural sweetness. Used as a mouth freshener and in Indian cooking.",
    sizes: ["100g", "250g", "500g"], pure: "100% Pure",
  },
];

const CATEGORIES = ["All", "Whole Spice", "Powder", "Blend"];

const SakhaPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <div className="sakha-page page-content">

      {/* ── 1. HEADER ── */}
      <section className="sakha-header">
        <div className="sakha-header__inner">
          <div className="sakha-header__left">
            <div className="sakha-header__eyebrow">🌿 Sakha Brand &nbsp;·&nbsp; Shyam Sakha Industries</div>
            <h1 className="sakha-header__title">
              Sakha
              <em>Spices</em>
            </h1>
            <p className="sakha-header__sub">
              Everyday premium spices — sourced directly from farms,
              cleaned, graded and packed with care. Pure. Simple. Trusted.
            </p>
          </div>

          <div className="sakha-header__stats">
            <div>
              <div className="sakha-stat__num">30+</div>
              <div className="sakha-stat__label">Products</div>
            </div>
            <div>
              <div className="sakha-stat__num">100%</div>
              <div className="sakha-stat__label">Pure</div>
            </div>
            <div>
              <div className="sakha-stat__num">2021</div>
              <div className="sakha-stat__label">Est.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FILTER BAR ── */}
      <div className="sakha-filters">
        <div className="sakha-filters__inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`sakha-filter-btn ${active === cat ? "sakha-filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. GRID ── */}
      <section className="sakha-grid-section">
        <div className="sakha-grid-section__inner">
          <p className="sakha-grid-count">{filtered.length} products</p>
          <div className="sakha-grid">
            {filtered.map((p, i) => (
              <div className="sakha-card" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="sakha-card__img-wrap">
                  <img src={p.img} alt={p.name} className="sakha-card__img" />
                  {p.badge && <span className="sakha-card__badge">{p.badge}</span>}
                  <span className="sakha-card__pure">{p.pure}</span>
                </div>
                <div className="sakha-card__body">
                  <div className="sakha-card__cat">{p.category}</div>
                  <div className="sakha-card__name">{p.name}</div>
                  <p className="sakha-card__desc">{p.desc}</p>
                  <div className="sakha-card__footer">
                    <div className="sakha-card__sizes">
                      {p.sizes.map(s => <span className="sakha-card__size" key={s}>{s}</span>)}
                    </div>
                    <button className="sakha-card__enquire">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="sakha-cta">
        <div className="sakha-cta__inner">
          <h2 className="sakha-cta__title">Need a <em>Bulk Order?</em></h2>
          <p className="sakha-cta__text">
            We supply retailers, distributors and food businesses across India.
            Get in touch and our team will respond within 24 hours.
          </p>
          <Link to="/contact-us" className="sakha-cta__btn">Contact Us →</Link>
        </div>
      </section>

    </div>
  );
};

export default SakhaPage;