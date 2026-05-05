"use client";

/* ── Row 1: Services offered ── */
const SERVICES = [
  { icon: "✦", text: "Exterior Detail" },
  { icon: "✦", text: "Interior Deep Clean" },
  { icon: "✦", text: "Ceramic Coating" },
  { icon: "✦", text: "Paint Correction" },
  { icon: "✦", text: "PPF Application" },
  { icon: "✦", text: "Engine Bay Detailing" },
  { icon: "✦", text: "Headlight Restoration" },
  { icon: "✦", text: "Foam Wash" },
  { icon: "✦", text: "Odour Elimination" },
  { icon: "✦", text: "Nano Coating" },
  { icon: "✦", text: "Mirror Restoration" },
];

/* Duplicate items so the loop is seamless */
const SERVICES_LOOP = [...SERVICES, ...SERVICES];

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      style={{
        position: "relative",
        background: "#3E9C40",
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <style>{`
        .mq-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        /* Row 1 — scrolls left */
        .mq-track--left {
          animation: marqueeLeft 28s linear infinite;
        }

        /* Row 2 — scrolls right */
        .mq-track--right {
          animation: marqueeRight 32s linear infinite;
        }

        .mq-track--left:hover,
        .mq-track--right:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .mq-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 29px;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.88);
          transition: color 0.2s;
          cursor: default;
        }

        .mq-item:hover {
          color: #fff;
        }

        /* Row 1 icon — green star/diamond */
        .mq-icon--service {
          font-size: 8px;
          color: rgba(255,255,255,0.95);
          opacity: 0.95;
          flex-shrink: 0;
        }

        /* Fade masks on left + right edges */
        .mq-fade-left,
        .mq-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 2;
        }
        .mq-fade-left {
          left: 0;
          background: linear-gradient(to right, #080808, transparent);
        }
        .mq-fade-right {
          right: 0;
          background: linear-gradient(to left, #080808, transparent);
        }
      `}</style>

      {/* Edge fade masks */}
      <div className="mq-fade-left"  />
      <div className="mq-fade-right" />

      {/* ── Row 1: Services — scrolls LEFT ── */}
      <div style={{
        overflow: "hidden",
        paddingTop: 22,
        paddingBottom: 22,
      }}>
        <div className="mq-track mq-track--left">
          {SERVICES_LOOP.map((item, i) => (
            <span key={i} className="mq-item">
              <span className="mq-icon--service">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}