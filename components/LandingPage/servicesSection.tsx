"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   SERVICES / ABOUT SECTION — GlossiGo Detailing
   Layout: sticky image left | scrollable accordion right
───────────────────────────────────────────── */

const SERVICES = [
  {
    id: 1,
    title: "Ceramic Coating",
    desc: "A permanent, nano-ceramic layer that bonds to your car's paint and creates a hydrophobic, self-cleaning surface. Protects against UV rays, bird drops, water spots, and micro-scratches — keeping that showroom shine for years.",
  },
  {
    id: 2,
    title: "Paint Protection Film (PPF)",
    desc: "Military-grade thermoplastic urethane film applied to high-impact zones or the full vehicle. Self-healing technology removes light scratches with heat, keeping your paint flawless under daily punishment.",
  },
  {
    id: 3,
    title: "Paint Correction",
    desc: "Multi-stage machine polishing that eliminates swirl marks, buffer trails, water etching, and oxidation. We restore your car's finish to a mirror-perfect depth before any protective coating is applied.",
  },
  {
    id: 4,
    title: "Interior Deep Clean",
    desc: "Steam extraction, enzymatic odour treatment, leather conditioning, and meticulous detailing of every surface — from dashboard crevices to door jambs. Your cabin, transformed.",
  },
  {
    id: 5,
    title: "Steam & Dry Wash",
    desc: "Waterless steam cleaning that sanitises paint, glass, and trim without a single drop of tap water. Ideal for water-restricted zones or quick turnaround maintenance washes.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: "#080808", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .sg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        /* ── LEFT sticky panel ── */
        .sg-left {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: #060606;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* image fills the panel completely */
        .sg-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* overlays — light vignette only, image is contain so no heavy crops */
        .sg-overlay-main {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(8,8,8,0.55) 100%
          );
        }
        .sg-overlay-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 20%;
          z-index: 3;
          background: linear-gradient(to top, #080808 0%, transparent 100%);
        }
        .sg-overlay-right {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 60px;
          z-index: 3;
          background: linear-gradient(to left, #080808 0%, transparent 100%);
        }

        /* placeholder shown when no image */
        .sg-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #0d1a0d 0%, #0a0a0a 50%, #080808 100%);
          z-index: 1;
        }
        .sg-placeholder-text {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(80px, 12vw, 160px);
          font-weight: 400;
          font-style: italic;
          color: rgba(62,156,64,0.08);
          line-height: 1;
          user-select: none;
          letter-spacing: -4px;
        }
        .sg-placeholder-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(62,156,64,0.25);
          margin-top: 16px;
        }

        /* ── RIGHT content panel ── */
        .sg-right {
          padding: 96px 60px 100px 64px;
          display: flex;
          flex-direction: column;
        }

        /* eyebrow */
        .sg-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .sg-eyebrow-line {
          width: 28px; height: 1px;
          background: rgba(62,156,64,0.5);
        }
        .sg-eyebrow-text {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(62,156,64,0.85);
        }

        /* headline */
        .sg-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 22px;
        }
        .sg-h2 em {
          font-style: italic;
          color: #3E9C40;
        }

        /* body */
        .sg-body {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(255,255,255,0.38);
          max-width: 460px;
          margin-bottom: 52px;
        }

        /* ── accordion ── */
        .sg-accordion {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .sg-item {
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* green left bar on active */
        .sg-item.is-open::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #3E9C40;
          border-radius: 0 2px 2px 0;
        }

        .sg-trigger {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 20px 0 20px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 16px;
          text-align: left;
          transition: padding-left 0.2s ease;
        }
        .sg-item.is-open .sg-trigger,
        .sg-trigger:hover { padding-left: 10px; }

        .sg-num {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 12px;
          color: rgba(62,156,64,0.35);
          flex-shrink: 0;
          min-width: 26px;
          transition: color 0.2s;
        }
        .sg-item.is-open .sg-num,
        .sg-trigger:hover .sg-num { color: #3E9C40; }

        .sg-title {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          flex: 1;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .sg-item.is-open .sg-title,
        .sg-trigger:hover .sg-title { color: #fff; }

        .sg-icon {
          width: 26px; height: 26px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s, transform 0.28s ease;
        }
        .sg-item.is-open .sg-icon {
          border-color: rgba(62,156,64,0.45);
          background: rgba(62,156,64,0.07);
          transform: rotate(45deg);
        }

        .sg-body-wrap {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }
        .sg-body-inner {
          padding: 2px 0 22px 42px;
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px;
          line-height: 1.8;
          color: rgba(255,255,255,0.32);
          max-width: 420px;
        }

        /* ── fade-up animation ── */
        .sg-fu {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sg-fu.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── responsive ── */
        @media (max-width: 960px) {
          .sg-grid { grid-template-columns: 1fr !important; }
          .sg-left {
            position: relative !important;
            height: 55vw !important;
            min-height: 300px;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .sg-right { padding: 60px 24px 80px !important; }
        }
        @media (max-width: 600px) {
          .sg-right { padding: 48px 20px 64px !important; }
          .sg-body-inner { padding-left: 24px !important; }
          .sg-badge { bottom: 20px; left: 20px; }
        }
      `}</style>

      <div className="sg-grid">

        {/* ══════════════════════════════
            LEFT — sticky image panel
        ══════════════════════════════ */}
        <div className="sg-left">

          {/*
            ──────────────────────────────────────────────
            HOW TO ADD YOUR IMAGE:
            1. Drop your car photo into /public/images/
            2. Rename it: about-car.jpg  (or .webp / .png)
            3. Change the src below to: "/images/about-car.jpg"
            4. The placeholder will auto-hide once image loads
            ──────────────────────────────────────────────
          */}

          {/* Placeholder — shows when no image */}
          {(!imageLoaded || imageError) && (
            <div className="sg-placeholder">
              <div className="sg-placeholder-text">GG</div>
              <div className="sg-placeholder-label">
                Drop your car photo here
              </div>
              <div
                style={{
                  marginTop: 24,
                  padding: "8px 20px",
                  border: "1px dashed rgba(62,156,64,0.2)",
                  borderRadius: 4,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  color: "rgba(62,156,64,0.35)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                /public/about-car.webp
              </div>
            </div>
          )}

          {/* ↓↓ SWAP src WITH YOUR ACTUAL IMAGE PATH ↓↓ */}
          {!imageError && (
            <div
              className="sg-img-wrap"
              style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
              <Image
                src="/about-car.webp"
                alt="Freshly detailed car at GlossiGo Studio"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center center", padding: "32px 20px" }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            </div>
          )}

          {/* Gradient overlays — always on top of image */}
          <div className="sg-overlay-main" />
          <div className="sg-overlay-bottom" />
          <div className="sg-overlay-right" />

        </div>

        {/* ══════════════════════════════
            RIGHT — content + accordion
        ══════════════════════════════ */}
        <div className="sg-right">

          {/* Eyebrow */}
          <div
            className={`sg-eyebrow sg-fu ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            <div className="sg-eyebrow-line" />
            <span className="sg-eyebrow-text">What We Do</span>
          </div>

          {/* Headline */}
          <h2
            className={`sg-h2 sg-fu ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            Our One-Stop<br />
            <em>Detailing Studio</em>
          </h2>

          {/* Body */}
          <p
            className={`sg-body sg-fu ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            At GlossiGo, detailing isn&rsquo;t a service — it&rsquo;s an obsession.
            Every car that enters our studio leaves looking better than the day
            it was bought. We combine premium international products with trained
            hands and an eye for perfection that simply can&rsquo;t be compromised.
          </p>

          {/* Accordion */}
          <div
            className={`sg-accordion sg-fu ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            {SERVICES.map((svc) => {
              const isOpen = openId === svc.id;
              return (
                <div key={svc.id} className={`sg-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="sg-trigger"
                    onClick={() => setOpenId(isOpen ? null : svc.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="sg-num">
                      {String(svc.id).padStart(2, "0")}
                    </span>
                    <span className="sg-title">{svc.title}</span>
                    <span className="sg-icon">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M5 1v8M1 5h8"
                          stroke={isOpen ? "#3E9C40" : "rgba(255,255,255,0.35)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="sg-body-wrap"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="sg-body-inner">{svc.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`sg-fu ${inView ? "visible" : ""}`}
            style={{
              transitionDelay: "0.45s",
              marginTop: 44,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="#plans"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "13px 28px",
                borderRadius: 5,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
              }}
            >
             All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}