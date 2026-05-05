"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DOORSTEP DETAILING SECTION — Landing Page
   We come to you — compact feature section
   Links to /doorstep for full page
───────────────────────────────────────────── */

const PERKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "At Your Home",
    desc: "We arrive fully equipped. You don't move your car anywhere.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v4h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Fully Mobile Unit",
    desc: "Generator, water supply, all tools loaded. Zero dependencies on your setup.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "You Choose the Time",
    desc: "Morning, afternoon, or weekend — we work around your schedule.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Same Studio Quality",
    desc: "Identical products, identical standards. Just at your doorstep.",
  },
];

function PerkCard({ perk, index }: { perk: typeof PERKS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(62,156,64,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(62,156,64,0.22)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: 6,
        padding: "28px 24px",
        transition: "all 0.25s",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* number watermark */}
      <div aria-hidden style={{
        position: "absolute",
        top: 12, right: 16,
        fontFamily: "'DM Serif Display', serif",
        fontStyle: "italic",
        fontSize: 40,
        color: "rgba(62,156,64,0.05)",
        lineHeight: 1,
        userSelect: "none",
        transition: "color 0.25s",
        ...(hovered && { color: "rgba(62,156,64,0.1)" }),
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* icon */}
      <div style={{
        width: 44, height: 44,
        borderRadius: "50%",
        background: hovered ? "rgba(62,156,64,0.12)" : "rgba(62,156,64,0.06)",
        border: `1px solid ${hovered ? "rgba(62,156,64,0.3)" : "rgba(62,156,64,0.1)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#3E9C40" : "rgba(62,156,64,0.6)",
        transition: "all 0.25s",
        flexShrink: 0,
      }}>
        {perk.icon}
      </div>

      <div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          color: hovered ? "#fff" : "rgba(255,255,255,0.75)",
          marginBottom: 6,
          transition: "color 0.2s",
          letterSpacing: "0.01em",
        }}>
          {perk.title}
        </div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.28)",
          lineHeight: 1.68,
        }}>
          {perk.desc}
        </div>
      </div>
    </div>
  );
}

export default function DoorstepSection() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      id="doorstep"
      style={{
        background: "#060606",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .ds-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 520px;
        }
        .ds-perks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        @media (max-width: 960px) {
          .ds-inner { grid-template-columns: 1fr !important; }
          .ds-left { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
          .ds-left { padding: 56px 24px 48px !important; }
          .ds-right { padding: 48px 24px 64px !important; }
        }
        @media (max-width: 520px) {
          .ds-perks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Background green glow — left side */}
      <div aria-hidden style={{
        position: "absolute",
        top: "50%", left: 0,
        transform: "translateY(-50%)",
        width: "45%", height: "80%",
        background: "radial-gradient(ellipse at left center, rgba(62,156,64,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Faint diagonal line */}
      <div aria-hidden style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(115deg, transparent, transparent 60px, rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 61px)",
        pointerEvents: "none",
      }} />

      <div className="ds-inner" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* ── LEFT: headline + CTA ── */}
        <div
          className="ds-left"
          style={{
            padding: "72px 56px 72px 24px",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            marginBottom: 22,
          }}>
            <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10, fontWeight: 600,
              letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(62,156,64,0.85)",
            }}>New Service</span>
            {/* NEW badge */}
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 8, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#fff",
              background: "#3E9C40",
              padding: "2px 8px", borderRadius: 100,
            }}>Live</span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "#fff",
            marginBottom: 20,
          }}>
            We Come<br />
            <em style={{ fontStyle: "italic", color: "#3E9C40" }}>To You</em>
          </h2>

          {/* Body */}
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            lineHeight: 1.78,
            color: "rgba(255,255,255,0.32)",
            maxWidth: 380,
            marginBottom: 36,
          }}>
            GlossiGo&apos;s Doorstep Detailing brings our full studio experience
            to your home or office. No traffic, no waiting — just a perfectly
            detailed car waiting for you.
          </p>

          {/* Availability pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(62,156,64,0.06)",
            border: "1px solid rgba(62,156,64,0.18)",
            borderRadius: 100,
            padding: "8px 16px",
            marginBottom: 32,
            width: "fit-content",
          }}>
            <div style={{
              width: 6, height: 6,
              borderRadius: "50%",
              background: "#3E9C40",
              boxShadow: "0 0 8px rgba(62,156,64,0.9)",
              animation: "dsPulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(62,156,64,0.8)",
            }}>
              Available across Jodhpur
            </span>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/doorstep"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: btnHovered ? "#2d7a2f" : "#3E9C40",
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 4,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              Learn More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <Link
              href="/#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent",
                color: "rgba(255,255,255,0.38)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)";
              }}
            >
              Book a Slot
            </Link>
          </div>
        </div>

        {/* ── RIGHT: perks grid ── */}
        <div
          className="ds-right"
          style={{
            padding: "72px 24px 72px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Section label */}
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 10, fontWeight: 600,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            marginBottom: 20,
          }}>
            Why doorstep?
          </div>

          <div className="ds-perks-grid">
            {PERKS.map((perk, i) => (
              <PerkCard key={i} perk={perk} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <div style={{
            marginTop: 20,
            padding: "14px 18px",
            background: "rgba(255,255,255,0.015)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "2px solid rgba(62,156,64,0.4)",
            borderRadius: 4,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.22)",
            lineHeight: 1.6,
          }}>
             <strong style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>
              Exterior wash, interior clean, paint correction & ceramic coating
            </strong>{" "}
            — all available at your doorstep.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dsPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.35); }
        }
      `}</style>
    </section>
  );
}