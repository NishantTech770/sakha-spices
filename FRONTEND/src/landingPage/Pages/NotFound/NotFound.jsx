import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Floating spice particles
  useEffect(() => {
    const spices = ["✦", "⁂", "✶", "⊹", "✧", "✦", "⊕"];
    const container = containerRef.current;
    if (!container) return;

    const particles = Array.from({ length: 18 }, (_, i) => {
      const el = document.createElement("span");
      el.className = "nf-particle";
      el.textContent = spices[i % spices.length];
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 4}s;
        animation-duration: ${4 + Math.random() * 4}s;
        font-size: ${10 + Math.random() * 14}px;
        opacity: ${0.08 + Math.random() * 0.15};
      `;
      container.appendChild(el);
      return el;
    });

    return () => particles.forEach(p => p.remove());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap');

        .nf-root {
          min-height: 100vh;
          background: #FDF6EC;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 2rem;
        }

        /* Background texture ring */
        .nf-root::before {
          content: '';
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          border: 1px solid rgba(200, 65, 11, 0.07);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .nf-root::after {
          content: '';
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 50%;
          border: 1px solid rgba(200, 65, 11, 0.10);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Warm radial glow */
        .nf-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,65,11,0.06) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Floating particles */
        .nf-particle {
          position: absolute;
          color: #C8410B;
          pointer-events: none;
          animation: nfFloat linear infinite;
          user-select: none;
        }
        @keyframes nfFloat {
          0%   { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50%  { transform: translateY(-24px) rotate(180deg); opacity: 0.2; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.1; }
        }

        /* Particles container */
        .nf-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Content */
        .nf-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 560px;
          animation: nfReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes nfReveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Big 404 */
        .nf-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(120px, 22vw, 200px);
          font-weight: 300;
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(200, 65, 11, 0.25);
          letter-spacing: -0.02em;
          position: relative;
          display: block;
          margin-bottom: 8px;
          user-select: none;
        }
        .nf-number::after {
          content: '404';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #C8410B 0%, #B8860B 60%, #C8410B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.18;
        }

        /* Divider */
        .nf-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
          margin: 0 auto 28px;
          width: fit-content;
        }
        .nf-divider-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,65,11,0.4));
        }
        .nf-divider-line:last-child {
          background: linear-gradient(90deg, rgba(200,65,11,0.4), transparent);
        }
        .nf-divider-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C8410B; opacity: 0.5;
        }

        /* Spice label */
        .nf-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8410B;
          opacity: 0.6;
          margin-bottom: 16px;
          display: block;
          animation: nfReveal 0.8s 0.15s cubic-bezier(0.22,1,.36,1) both;
        }

        /* Heading */
        .nf-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 400;
          color: #1a0f00;
          line-height: 1.15;
          margin-bottom: 16px;
          animation: nfReveal 0.8s 0.25s cubic-bezier(0.22,1,.36,1) both;
        }
        .nf-heading em {
          font-style: italic;
          color: #C8410B;
        }

        /* Body text */
        .nf-body {
          font-size: 15px;
          color: #7a5c3e;
          line-height: 1.75;
          margin-bottom: 40px;
          animation: nfReveal 0.8s 0.35s cubic-bezier(0.22,1,.36,1) both;
        }

        /* Buttons */
        .nf-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          animation: nfReveal 0.8s 0.45s cubic-bezier(0.22,1,.36,1) both;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #C8410B, #B8860B);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(200,65,11,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nf-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(200,65,11,0.42);
        }

        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: transparent;
          color: #3D1F0A;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: 1.5px solid rgba(61,31,10,0.2);
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .nf-btn-secondary:hover {
          border-color: #C8410B;
          color: #C8410B;
          transform: translateY(-3px);
        }

        /* Bottom brand mark */
        .nf-brand {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(61,31,10,0.25);
          white-space: nowrap;
          z-index: 2;
        }
      `}</style>

      <div className="nf-root">
        <div className="nf-glow" />
        <div className="nf-particles" ref={containerRef} />

        <div className="nf-content">
          <span className="nf-number">404</span>

          <span className="nf-label">Page Not Found</span>

          <div className="nf-divider">
            <div className="nf-divider-line" />
            <div className="nf-divider-dot" />
            <div className="nf-divider-line" />
          </div>

          <h1 className="nf-heading">
            Lost in the <em>spice trails</em>
          </h1>

          <p className="nf-body">
            This page seems to have wandered off into the spice gardens.<br />
            Let us guide you back to something delicious.
          </p>

          <div className="nf-actions">
            <button className="nf-btn-primary" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
            <button className="nf-btn-secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>

        <div className="nf-brand">Sakha Spices · Est. 2005</div>
      </div>
    </>
  );
};

export default NotFound;