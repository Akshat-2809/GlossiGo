"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── INTERSECTION OBSERVER HOOK ────────────────────────────────────────── */
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

/* ─── DATA ───────────────────────────────────────────────────────────────── */

/* ─── SECTION WRAPPER with fade-up ──────────────────────────────────────── */
function FadeSection({ children, delay = "0s", className = "" }: {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main id="about-us" style={{ background: "var(--black, #0A0A0A)", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .about-page * { box-sizing: border-box; }

        /* ── Hero ── */
        .ap-hero {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #060606;
        }
        .ap-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(62,156,64,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(62,156,64,0.04) 0%, transparent 60%);
        }
        .ap-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%);
          -webkit-mask-image: radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%);
        }
        .ap-hero-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3E9C40, transparent);
        }
        .ap-hero-content {
          position: relative;
          z-index: 2;
          padding: 60px 24px 60px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }





        /* ── Shared section styles ── */
        .ap-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .ap-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .ap-eyebrow-line {
          width: 28px; height: 1px;
          background: rgba(62,156,64,0.5);
          flex-shrink: 0;
        }
        .ap-eyebrow-text {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(62,156,64,0.85);
        }
        .ap-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .ap-h2 em {
          font-style: italic;
          color: #3E9C40;
        }
        .ap-body {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          line-height: 1.82;
          color: rgba(255,255,255,0.38);
        }

        /* ── Story section ── */
        .ap-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          padding: 72px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ap-story-img {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 4px;
          overflow: hidden;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .ap-story-img-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #0d1a0d 0%, #0a0a0a 100%);
        }
        .ap-story-img-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, transparent, #3E9C40, transparent);
        }
        .ap-story-text {
          padding-top: 8px;
        }
        .ap-story-quote {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(18px, 2.5vw, 26px);
          font-style: italic;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          border-left: 2px solid #3E9C40;
          padding-left: 24px;
          margin: 32px 0 36px;
        }

        /* ── Values ── */
        .ap-values {
          padding: 72px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ap-values-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 64px;
        }
        .ap-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          overflow: hidden;
        }
        .ap-value-card {
          background: #0a0a0a;
          padding: 36px 32px;
          transition: background 0.25s;
          cursor: default;
          border-right: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ap-value-card:nth-child(even) { border-right: none; }
        .ap-value-card:nth-last-child(-n+2) { border-bottom: none; }
        .ap-value-card:hover { background: #0f1a0f; }
        .ap-value-num {
          font-family: 'DM Serif Display', serif;
          font-size: 13px;
          font-style: italic;
          color: rgba(62,156,64,0.4);
          margin-bottom: 14px;
        }
        .ap-value-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
        }
        .ap-value-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(255,255,255,0.32);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .ap-story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .ap-values-header { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .ap-values-grid { grid-template-columns: 1fr !important; }
          .ap-story-grid, .ap-values { padding-top: 64px !important; padding-bottom: 64px !important; }
        }
      `}</style>

      <div className="about-page">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="ap-hero">
          <div className="ap-hero-bg" />
          <div className="ap-hero-grid" />
          <div className="ap-hero-topline" />
          <div className="ap-hero-content">
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 32,
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: heroVisible ? 1 : 0,
                transition: "opacity 0.5s ease 0.05s",
              }}
            >
              <span>About Us</span>
            </div>

            {/* Eyebrow */}
            <div
              className="ap-eyebrow"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              <div className="ap-eyebrow-line" />
              <span className="ap-eyebrow-text">Our Story</span>
            </div>

            {/* Big headline */}
            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(52px, 10vw, 120px)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: 32,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
              }}
            >
              Obsessed<br />
              with <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Perfect</em>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                lineHeight: 1.78,
                color: "rgba(255,255,255,0.38)",
                maxWidth: 460,
                marginBottom: 0,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s",
              }}
            >
              GlossiGo is Jodhpur&rsquo;s premium car care studio. We exist for one reason —
              to make your car look better than the day it was built.
            </p>


          </div>
        </section>

        {/* ══════════════════════════════════════════
            STORY SECTION
        ══════════════════════════════════════════ */}
        <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="ap-section">
            <div className="ap-story-grid">

              {/* Image */}
              <FadeSection delay="0.05s">
                <div className="ap-story-img">
                  <div className="ap-story-img-accent" />
                  <Image
                    src="/studio.webp"
                    alt="GlossiGo Studio"
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </FadeSection>

              {/* Text */}
              <div className="ap-story-text">
                <FadeSection delay="0.15s">
                  <div className="ap-eyebrow">
                    <div className="ap-eyebrow-line" />
                    <span className="ap-eyebrow-text">Who We Are</span>
                  </div>
                  <h2 className="ap-h2">
                    Built by a<br />
                    Car <em>Enthusiast</em>
                  </h2>
                </FadeSection>

                <FadeSection delay="0.25s">
                  <blockquote className="ap-story-quote">
                    &ldquo;I was tired of seeing beautiful cars ruined by bad washes and cheap products.
                    So I built the studio I always wished existed.&rdquo;
                  </blockquote>
                </FadeSection>

                <FadeSection delay="0.3s">
                  <p className="ap-body" style={{ marginBottom: 20 }}>
                    GlossiGo was founded in 2022 with a simple but uncompromising vision —
                    to bring genuine, professional-grade car care to Jodhpur. Not just a
                    wash. Not just a wax. A full-service, detail-obsessed studio where every
                    vehicle is treated like it belongs to us.
                  </p>
                  <p className="ap-body" style={{ marginBottom: 20 }}>
                    We started with three detailing bays and one rule: no shortcuts. Today,
                    we&rsquo;ve served over 700+ vehicles ranging from daily hatchbacks to exotic
                    sports cars — with the same obsessive attention to detail on every single one.
                  </p>
                  <p className="ap-body">
                    Our team is trained on international detailing standards, uses only
                    certified premium products, and works exclusively by appointment — so
                    your car always gets our complete, undistracted focus.
                  </p>
                  <p
                    style={{
                      marginTop: 20,
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    Shriyansh Taparia
                    <br />
                    Founder
                  </p>
                </FadeSection>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}