"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   PPF WRAPPING PAGE — /ppf
   GlossiGo
───────────────────────────────────────────── */

const WHAT_IS = [
  {
    step: "01",
    title: "Physical Paint Shield",
    desc: "PPF is a thick thermoplastic urethane film — physically applied over your paint to absorb the impact of stone chips, road debris, and abrasions before they ever reach the surface.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Self-Healing Topcoat",
    desc: "Light scratches and swirl marks in the film disappear on their own with heat — from the sun or warm water. The surface returns to a flawless finish without any intervention.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Computer-Cut Precision",
    desc: "Every piece of film is cut using a digital plotter from a database of car-specific patterns — ensuring edge-to-edge coverage with no cutting directly on your paint.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Fully Removable",
    desc: "PPF can be cleanly removed at any time without damaging the factory paint underneath — giving you full protection now with zero commitment to the film forever.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Stone Chip Protection",
    desc: "High-speed stone chips on highways are PPF's primary purpose — the film absorbs the impact and deforms, not your paint.",
  },
  {
    title: "Deep Scratch Resistance",
    desc: "Unlike ceramic coating, PPF's physical thickness resists deeper scratches from car park scrapes, brushes, and road rash.",
  },
  {
    title: "Invisible on the Car",
    desc: "Modern PPF is optically clear — nobody can tell it's there. Gloss stays gloss. Matte finishes stay matte with the right film.",
  },
  {
    title: "Self-Healing Surface",
    desc: "Minor surface scratches in the film vanish with heat. Your car always looks like it just left the showroom.",
  },
  {
    title: "Preserves Factory Paint",
    desc: "Factory original paint commands a significantly higher resale price. PPF is the surest way to deliver it in perfect condition.",
  },
  {
    title: "Works With Ceramic",
    desc: "PPF and ceramic coating are the ultimate combination — PPF absorbs impacts while ceramic adds hydrophobics and chemical resistance on top.",
  },
];

const COVERAGE_OPTIONS = [
  {
    name: "Full Front",
    parts: ["Full bonnet", "Full front bumper", "Both front fenders", "Both door edges", "Side mirrors"],
    note: "Most popular — protects the highest-impact areas at highway speed.",
  },
  {
    name: "Partial Front",
    parts: ["Bonnet leading edge", "Front bumper", "Headlights", "Side mirror caps"],
    note: "Entry-level protection for city and daily drivers on a tighter budget.",
  },
  {
    name: "Full Body",
    parts: ["Complete bonnet & roof", "All panels & doors", "Full bumpers", "Pillars & sills", "Side mirrors"],
    note: "Total coverage — for collectors, luxury vehicles, or anyone who wants zero compromise.",
  },
];

const FAQS = [
  {
    q: "How is PPF different from ceramic coating?",
    a: "PPF is a physical film that absorbs stone chips, deep scratches, and road rash. Ceramic coating is a chemical layer that adds hardness, gloss, and hydrophobics. PPF protects against physical damage; ceramic protects against chemical and environmental damage. They work best combined.",
  },
  {
    q: "Will PPF yellow or peel over time?",
    a: "Modern premium PPF films have UV inhibitors built in that prevent yellowing for years. Quality matters enormously — we only use professional-grade films with manufacturer warranties. Cheap films yellow. Ours don't.",
  },
  {
    q: "How long does installation take?",
    a: "Partial front coverage takes 1 day. Full front takes 1–2 days. Full body can take 3–5 days. Precision application cannot be rushed — we need time to ensure every edge sits perfectly.",
  },
  {
    q: "Can PPF go over existing paint damage?",
    a: "We do not apply PPF over chipped or scratched paint. Any existing damage should be corrected first so the film seals perfection underneath it. We can handle the paint prep as part of the job.",
  },
  {
    q: "How long does PPF last?",
    a: "Premium PPF films carry 5–10 year manufacturer warranties against yellowing, cracking, and delamination. With good care, real-world lifespan comfortably exceeds that.",
  },
  {
    q: "Can I wash the car normally after PPF?",
    a: "Yes — after a 7-day cure period, you can wash normally. Avoid high-pressure jets directly at film edges. Touchless or hand washing is ideal to maximise the film's lifespan.",
  },
];

/* ── FAQ Accordion ───────────────────────── */
function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      {open && (
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#3E9C40", borderRadius: 2 }} />
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", padding: "20px 0",
          paddingLeft: open ? 16 : 0,
          background: "transparent", border: "none", cursor: "pointer",
          gap: 16, textAlign: "left", transition: "padding-left 0.2s",
        }}
      >
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
          color: open ? "#fff" : "rgba(255,255,255,0.55)", transition: "color 0.2s",
        }}>
          {item.q}
        </span>
        <span style={{
          width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
          border: `1px solid ${open ? "rgba(62,156,64,0.45)" : "rgba(255,255,255,0.1)"}`,
          background: open ? "rgba(62,156,64,0.08)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s", transform: open ? "rotate(45deg)" : "none",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke={open ? "#3E9C40" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "240px" : "0",
        opacity: open ? 1 : 0,
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
        paddingLeft: open ? 16 : 0,
      } as React.CSSProperties}>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
          lineHeight: 1.78, color: "rgba(255,255,255,0.35)",
          paddingBottom: 22, maxWidth: 580,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────── */
export default function PPFPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }

        .ppf-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .ppf-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .ppf-card {
          background: #0a0a0a;
          padding: 32px 26px;
          transition: background 0.25s;
        }
        .ppf-card:hover { background: #0d180d; }

        .ppf-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .ppf-benefit-card {
          background: #0a0a0a;
          padding: 28px 24px;
          transition: background 0.25s;
        }
        .ppf-benefit-card:hover { background: #0d180d; }

        .ppf-coverage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes ppfPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }

        @media (max-width: 1024px) {
          .ppf-grid-4       { grid-template-columns: repeat(2, 1fr) !important; }
          .ppf-benefits-grid{ grid-template-columns: repeat(2, 1fr) !important; }
          .ppf-coverage-grid{ grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ppf-grid-4       { grid-template-columns: 1fr !important; }
          .ppf-benefits-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", background: "#060606",
        overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />
        {/* Grid bg */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
        }} />
        {/* Glow */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 55% 60% at 15% 55%, rgba(62,156,64,0.08) 0%, transparent 65%)",
        }} />
        {/* Watermark */}
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(80px, 16vw, 200px)",
          fontStyle: "italic", fontWeight: 400,
          color: "rgba(255,255,255,0.015)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none", letterSpacing: "-4px", pointerEvents: "none",
        }}>PPF</div>

        <div className="ppf-container" style={{ position: "relative", zIndex: 1, padding: "96px 24px 80px" }}>
          {/* Breadcrumb */}
          <div className="fu" style={{
            animationDelay: "0.05s",
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 28,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            <Link href="/" style={{ color: "rgba(62,156,64,0.75)", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/services" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Services</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span>PPF Wrapping</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
            {/* Left: headline */}
            <div style={{ maxWidth: 580 }}>
              <div className="fu" style={{ animationDelay: "0.1s", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>PPF Wrapping</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "#3E9C40", padding: "2px 8px", borderRadius: 100 }}>Studio Only</span>
              </div>

              <h1 className="fu" style={{
                animationDelay: "0.18s",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 24,
              }}>
                The Last Line<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Of Defence.</em>
              </h1>

              <p className="fu" style={{
                animationDelay: "0.26s",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                lineHeight: 1.78, color: "rgba(255,255,255,0.38)",
                marginBottom: 36, maxWidth: 460,
              }}>
                Paint Protection Film is an invisible, self-healing physical barrier bonded to your paint — absorbing stone chips, road rash, and deep scratches so your factory paintwork never has to.
              </p>

              {/* Studio badge */}
              <div className="fu" style={{
                animationDelay: "0.32s",
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(62,156,64,0.06)", border: "1px solid rgba(62,156,64,0.18)",
                borderRadius: 100, padding: "8px 18px", marginBottom: 32,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#3E9C40", boxShadow: "0 0 8px rgba(62,156,64,0.9)",
                  animation: "ppfPulse 2s ease-in-out infinite",
                }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(62,156,64,0.8)" }}>Available at our studio · Jodhpur</span>
              </div>

              <div className="fu" style={{ animationDelay: "0.38s", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/book-now" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#3E9C40", color: "#fff",
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 4, textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2d7a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#3E9C40")}
                >
                  Book Now
                </Link>
                <a href="https://wa.me/919799023966" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: stat tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 220 }}>
              {[
                { val: "200μm", lbl: "Film Thickness" },
                { val: "5–10yr", lbl: "Warranty" },
                { val: "1–5", lbl: "Days in Studio" },
                { val: "0°", lbl: "Paint Damage" },
              ].map((s) => (
                <div key={s.lbl} style={{
                  padding: "18px 20px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 6,
                }}>
                  <div style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 28, fontWeight: 400, color: "#fff",
                    letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6,
                  }}>{s.val}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1 — WHAT IS PPF
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="ppf-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>The Technology</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              What Is <em style={{ fontStyle: "italic", color: "#3E9C40" }}>PPF?</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              A physical film — not a coating, not a chemical. It sits between the world and your paint, taking every hit so the factory finish underneath never has to.
            </p>
          </div>

          <div className="ppf-grid-4">
            {WHAT_IS.map((item) => (
              <div key={item.step} className="ppf-card">
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 13, color: "rgba(62,156,64,0.4)", marginBottom: 16,
                }}>{item.step}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(62,156,64,0.07)", border: "1px solid rgba(62,156,64,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(62,156,64,0.7)", marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.3)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — BENEFITS
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="ppf-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Why PPF</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              What It <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Protects Against</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Six reasons why paint protection film is the single most effective thing you can do for a car you intend to keep in perfect condition.
            </p>
          </div>

          <div className="ppf-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="ppf-benefit-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#3E9C40", boxShadow: "0 0 6px rgba(62,156,64,0.6)", flexShrink: 0,
                  }} />
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>{b.title}</div>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.3)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — COVERAGE OPTIONS
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="ppf-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Coverage Packages</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Choose Your <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Coverage</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              From targeted high-impact zones to bumper-to-bumper coverage — we&apos;ll recommend the right package for how and where you drive.
            </p>
          </div>

          <div className="ppf-coverage-grid">
            {COVERAGE_OPTIONS.map((pkg, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                padding: "32px 28px",
                position: "relative",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
              }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: i === 2
                    ? "linear-gradient(90deg, transparent, #3E9C40, transparent)"
                    : "transparent",
                  borderRadius: "8px 8px 0 0",
                  transition: "background 0.3s",
                }} />

                {i === 2 && (
                  <div style={{
                    position: "absolute", top: 14, right: 16,
                    fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#fff", background: "#3E9C40",
                    padding: "3px 10px", borderRadius: 100,
                  }}>Most Complete</div>
                )}

                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 13, color: "rgba(62,156,64,0.4)", marginBottom: 10,
                }}>0{i + 1}</div>

                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 26, fontWeight: 400, color: "#fff",
                  letterSpacing: "-0.02em", marginBottom: 20,
                }}>{pkg.name}</div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {pkg.parts.map((part) => (
                    <div key={part} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "#3E9C40", flexShrink: 0,
                        boxShadow: "0 0 5px rgba(62,156,64,0.5)",
                      }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{part}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: "12px 14px",
                  background: "rgba(62,156,64,0.05)",
                  border: "1px solid rgba(62,156,64,0.12)",
                  borderRadius: 5,
                  borderLeft: "2px solid rgba(62,156,64,0.4)",
                }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{pkg.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA beneath coverage */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 20 }}>
              Not sure which package fits? We&apos;ll help you decide during a free consultation.
            </p>
            <Link href="/book-now" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "rgba(62,156,64,0.8)",
              fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "12px 28px", borderRadius: 4,
              border: "1px solid rgba(62,156,64,0.25)", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#3E9C40"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#3E9C40"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(62,156,64,0.8)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.25)"; }}
            >
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="ppf-container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>FAQ</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 400,
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Common <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Questions</em>
            </h2>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — redirects to /book-now
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0" }}>
        <div className="ppf-container">
          <div style={{
            position: "relative",
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "3px solid #3E9C40",
            borderRadius: 8, padding: "64px 56px",
            overflow: "hidden", textAlign: "center",
          }}>
            {/* Glow blob */}
            <div aria-hidden style={{
              position: "absolute", top: -80, left: "50%",
              transform: "translateX(-50%)",
              width: 480, height: 240,
              background: "radial-gradient(ellipse at center, rgba(62,156,64,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Top line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.35), transparent)",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Ready to Protect?</span>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              </div>

              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
                lineHeight: 1.0, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 16,
              }}>
                Guard It Now.<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Thank Yourself Later.</em>
              </h2>

              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)", maxWidth: 420,
                margin: "0 auto 40px", lineHeight: 1.78,
              }}>
                Book your PPF consultation at our Jodhpur studio. We&apos;ll assess your car, recommend the right coverage, and apply it with the precision it deserves.
              </p>

              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/book-now"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#3E9C40", color: "#fff",
                    border: "1.5px solid #3E9C40",
                    fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "15px 36px", borderRadius: 5, textDecoration: "none",
                    transition: "background 0.22s, color 0.22s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3E9C40"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#3E9C40"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  Book Now
                </Link>

                <Link
                  href="/services"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "transparent", color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "15px 32px", borderRadius: 5,
                    border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
                >
                  View All Services
                </Link>
              </div>

              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 11,
                color: "rgba(255,255,255,0.18)", marginTop: 28, lineHeight: 1.6,
              }}>
                Studio only · Jodhpur · Mon–Sun 9 AM–8 PM · Confirm via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}