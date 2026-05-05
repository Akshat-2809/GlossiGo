"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const STATS = [
  { num: "500+", label: "Cars Detailed" },
  { num: "5★",   label: "Avg Rating" },
  { num: "3+",   label: "Years of Excellence" },
  { num: "100%", label: "Satisfaction" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* ── Google Font import for stats — thin, elegant numerals ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .stat-num {
          font-family: 'DM Serif Display', Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          font-size: clamp(28px, 3vw, 42px) !important;
          color: var(--green);
          letter-spacing: -0.01em;
          line-height: 1;
          margin-bottom: 10px;
          display: block;
        }

        .stat-label {
          font-family: 'Outfit', sans-serif !important;
          font-weight: 400 !important;
          font-size: 9px !important;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          display: block;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.18); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1;   box-shadow: 0 0 6px rgba(62,156,64,0.9); }
          50%       { opacity: 0.5; box-shadow: 0 0 14px rgba(62,156,64,0.4); }
        }
        @media (max-width: 640px) {
          #hero h1 { letter-spacing: -0.015em; }
        }
        @media (max-width: 520px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* ── BG VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.28,
          zIndex: 0,
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.15) 40%, rgba(8,8,8,0.9) 85%, #080808 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Green radial glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 52%, rgba(62,156,64,0.09) 0%, transparent 65%)",
          zIndex: 1,
        }}
      />

      {/* ── Dot grid ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(62,156,64,0.16) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.5,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 75%)",
          zIndex: 1,
        }}
      />

      {/* ── Top green accent line ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, var(--green) 50%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Side accent lines ── */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "15%", bottom: "15%", left: 32,
        width: 1,
        background: "linear-gradient(to bottom, transparent, rgba(62,156,64,0.2), transparent)",
        zIndex: 2,
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", top: "15%", bottom: "15%", right: 32,
        width: 1,
        background: "linear-gradient(to bottom, transparent, rgba(62,156,64,0.2), transparent)",
        zIndex: 2,
      }} />

      {/* ── Main content ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "148px 24px 88px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
            marginBottom: 32,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(62,156,64,0.35)",
              borderRadius: 100,
              padding: "7px 18px",
              fontSize: 10,
              fontFamily: "var(--font-body)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(62,156,64,0.85)",
              background: "rgba(62,156,64,0.05)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 6px rgba(62,156,64,0.9)",
              animation: "blink 2s ease-in-out infinite",
              display: "inline-block",
              flexShrink: 0,
            }} />
            Premium Car Care Studio
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: 24,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            fontFamily: "var(--font-display)",
            color: "#fff",
          }}
        >
          Where Perfection
          <br />
          <span style={{ color: "var(--green)", position: "relative", display: "inline-block" }}>
            Meets the Road
            <span style={{
              position: "absolute",
              bottom: -4, left: "5%", right: "5%",
              height: 2,
              background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.45), transparent)",
              borderRadius: 2,
            }} />
          </span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            maxWidth: 440,
            margin: "0 auto 48px",
            fontSize: 15.5,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.78,
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease 0.32s, transform 0.65s ease 0.32s",
          }}
        >
          Professional detailing for those who demand the best. Every car,
          every time with precision, pride, and premium-grade products.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 80,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease 0.42s, transform 0.65s ease 0.42s",
          }}
        >
          <Link href="/book-now" className="btn-primary" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 30px", fontSize: 12,
            letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
          }}>
            Book a Detail
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="#services" className="btn-ghost" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 30px", fontSize: 12,
            letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase",
          }}>
            View Services
          </a>
        </div>

        {/* ── Stats bar ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.75s ease 0.58s, transform 0.75s ease 0.58s",
          }}
        >
          <div
            className="hero-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(10,10,10,0.72)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "30px 16px",
                  textAlign: "center",
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                  position: "relative",
                }}
              >
                {/* Top highlight per column */}
                <div style={{
                  position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.3), transparent)",
                }} />

                {/* Stat number — DM Serif Display italic, guaranteed thin & elegant */}
                <span className="stat-num">{s.num}</span>

                {/* Label */}
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: 36, left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          opacity: visible ? 0.45 : 0,
          transition: "opacity 0.7s ease 1.1s",
        }}
      >
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 9,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 36,
          background: "linear-gradient(to bottom, var(--green), transparent)",
          animation: "scrollPulse 1.8s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}